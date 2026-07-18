import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const failures = [];

const publicJsonFiles = [
  'public/manifest.json',
  'public/seo-local-nantes.json'
];

const requiredPublicFiles = [
  'public/llms.txt',
  'public/ai-llm-context.txt',
  'public/seo-local-nantes.json',
  'public/sitemap.xml'
];

for (const path of requiredPublicFiles) {
  if (!existsSync(resolve(root, path))) failures.push(`Ressource publique absente : ${path}`);
}

for (const path of publicJsonFiles) {
  try {
    JSON.parse(read(path));
  } catch (error) {
    failures.push(`${path}: JSON invalide (${error.message})`);
  }
}

const indexHtml = read('index.html');
const jsonLdBlocks = indexHtml.matchAll(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
);

for (const [index, match] of [...jsonLdBlocks].entries()) {
  try {
    JSON.parse(match[1]);
  } catch (error) {
    failures.push(`index.html: JSON-LD ${index + 1} invalide (${error.message})`);
  }
}

const trackedContent = [
  'index.html',
  'public/ai-llm-context.txt',
  'public/llms.txt',
  'public/seo-local-nantes.json',
  'public/robots.txt',
  'robots.txt',
  ...[
    'CTA', 'ContactInfo', 'Header', 'Hero', 'InfoSections',
    'MobileNavigation', 'SEOLocalNantes'
  ].map((name) => `src/components/${name}.jsx`)
].map(read).join('\n');

const llmsTxt = read('public/llms.txt');
if (!llmsTxt.startsWith('# Cabinet Infirmier Graslin')) {
  failures.push('public/llms.txt: titre principal absent ou incorrect');
}

for (const expectedUrl of [
  'https://cabinet-infirmier-graslin.fr/',
  'https://cabinet-infirmier-graslin.fr/sitemap.xml',
  'https://cabinet-infirmier-graslin.fr/seo-local-nantes.json'
]) {
  if (!llmsTxt.includes(expectedUrl)) failures.push(`public/llms.txt: URL absente (${expectedUrl})`);
}

for (const invalidPhone of ['02 40 77 73 81', '+332440777381']) {
  if (trackedContent.includes(invalidPhone)) {
    failures.push(`Numéro incorrect encore présent : ${invalidPhone}`);
  }
}

if (!trackedContent.includes('+33240737781')) {
  failures.push('Le numéro international canonique est absent');
}

const manifest = JSON.parse(read('public/manifest.json'));
for (const icon of manifest.icons ?? []) {
  const iconPath = resolve(root, 'public', icon.src.replace(/^\//, ''));
  if (!existsSync(iconPath)) failures.push(`Icône manifest absente : ${icon.src}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Validation technique réussie');
}
