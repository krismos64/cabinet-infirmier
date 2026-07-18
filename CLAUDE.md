# Cabinet Infirmier Graslin

Site vitrine one-page statique : React 18 + Vite 5, CSS Modules. Pas de backend, pas de base de données.

## Commandes

- `npm run dev` : serveur local (port 3000)
- `npm run build` : build de production dans `dist/`
- `npm run lint` : ESLint sur `src/`

## Déploiement

- Automatique : chaque push sur `main` déclenche `.github/workflows/deploy.yml` (build puis upload FTPS vers Hostinger, dossier `public_html`)
- Secrets GitHub requis : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
- `dist/` n'est pas versionné : le CI le régénère à chaque déploiement
- `public/.htaccess` est critique (redirection HTTPS, headers de sécurité, cache, fallback SPA) : Vite le copie dans `dist/` au build. Ne jamais le supprimer ni le sortir de `public/`.

## Contraintes métier

- Règles de l'ordre infirmier : contenu strictement informatif, aucune formulation promotionnelle
- SEO local Nantes prioritaire : maintenir la cohérence entre le contenu, `index.html` (metas, schema.org), `public/sitemap.xml`, `public/seo-local-nantes.json` et `public/ai-llm-context.txt` à chaque modification
- Accessibilité WCAG AA à préserver

## Structure

- `index.html` (racine) : point d'entrée Vite, contient les metas SEO et le JSON-LD
- `src/components/` : composants one-page (Hero, CTA, InterventionZones, SEOLocalNantes, etc.)
- `public/` : fichiers copiés tels quels dans `dist/` (manifest, robots, sitemap, sw.js, .htaccess)
