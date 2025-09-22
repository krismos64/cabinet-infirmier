# 🏥 Cabinet Infirmier Graslin - Site Vitrine

Site vitrine moderne et responsive pour le Cabinet Infirmier Graslin situé à Nantes, quartier Graslin.

🔗 **Site en production :** [https://cabinet-infirmier-graslin.fr](https://cabinet-infirmier-graslin.fr)

## 🌟 Aperçu

Site one-page professionnel développé en React avec CSS Modules, respectant les règles de l'ordre infirmier (contenu informatif uniquement, sans promotion).

**Dernière mise à jour :** 22 septembre 2024

### 🎯 Caractéristiques principales

- **Design ultra-moderne** avec palette dorée premium
- **Animations Lottie** intégrées et micro-interactions
- **Mobile-first** ultra-compact et entièrement responsive
- **SEO optimisé** avec schema.org et balises avancées
- **Accessibilité WCAG AA** complète
- **Performance optimisée** avec lazy loading et images WebP
- **PWA ready** avec manifest et service worker
- **Score PageSpeed 95+** après optimisations

## 📍 Informations du Cabinet

- **Adresse :** 9 rue Kléber, 44000 Nantes (Hyper centre-ville - Quartier Graslin)
- **Téléphone :** 02 40 77 73 81
- **Email :** infirmiere.cabinet.le.heron@gmail.com
- **Horaires :** 7h-20h, 7j/7 (y compris jours fériés)
- **Accessibilité :** PMR (Personnes à Mobilité Réduite)

### 🗺️ Zone d'intervention

- Quartier Graslin
- Dobrée
- Guist'hau
- Place Royale
- Quai de la Fosse
- Place René Bouhier
- Quartier Canclaux

## 🚀 Technologies

### Frontend

- **React 18** - Bibliothèque UI moderne
- **Vite** - Bundler ultra-rapide
- **CSS Modules** - Styles encapsulés
- **Lottie React** - Animations vectorielles interactives
- **Intersection Observer API** - Animations au scroll

### Design & UX

- **Mobile-First Design** - Navbar ultra-compacte
- **Palette dorée premium** - Gold/Orange gradient design
- **Lottie Animations** - Micro-interactions fluides
- **Accessibility First** - WCAG AA compliant

### SEO & Performance

- **Schema.org** - Données structurées JSON-LD complètes
- **Meta tags optimisés** - Open Graph, Twitter Cards
- **Sitemap XML** - Indexation optimisée
- **PWA Manifest** - Application web progressive

## 🛠️ Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Démarrage rapide

```bash
# Cloner le projet
git clone [url-du-repo]
cd cabinet-infirmier

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la build
npm run preview
```

## 📁 Structure du projet

```
cabinet-infirmier/
├── public/
│   ├── assets/
│   │   ├── lottie/              # Animations Lottie
│   │   │   ├── mynurse.json     # Animation infirmière (Hero)
│   │   │   ├── Medic.json       # Animation croix médicale (Header)
│   │   │   └── map search.json  # Animation carte (Zones)
│   │   ├── photo-entree.webp    # Photo optimisée WebP
│   │   ├── photo-entree-optimized.jpg # Photo JPEG optimisée
│   │   └── favicon.png          # Favicon
│   ├── .htaccess               # Configuration Apache/Hostinger
│   ├── manifest.json           # PWA Manifest
│   ├── sw.js                   # Service Worker
│   ├── sitemap.xml            # Plan de site SEO
│   └── robots.txt             # Directives robots
├── src/
│   ├── components/               # Composants React
│   │   ├── Header.jsx           # En-tête compact mobile
│   │   ├── Hero.jsx             # Section principale + Lottie
│   │   ├── InfoSections.jsx     # Horaires/Contact/Accessibilité
│   │   ├── InterventionZones.jsx # Zones + Animation carte
│   │   ├── DoctolibSection.jsx  # Prise de RDV
│   │   ├── MobileNavigation.jsx # Menu mobile hamburger
│   │   ├── FloatingElements.jsx # Éléments décoratifs
│   │   ├── CTA.jsx              # Call-to-action
│   │   ├── LegalDisclaimer.jsx  # Mentions légales
│   │   ├── Footer.jsx           # Pied de page
│   │   └── *.module.css         # Styles CSS Modules
│   ├── hooks/
│   │   └── useScrollAnimation.js # Hook animations scroll
│   ├── styles/
│   │   └── globals.css          # Styles globaux
│   ├── App.jsx                  # Composant racine
│   └── index.jsx               # Point d'entrée
├── index.html                   # HTML avec SEO optimisé
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Palette de couleurs

```css
/* Couleurs principales - Theme doré */
--gold-primary: #daa520; /* Or principal */
--gold-light: #ffd700; /* Or clair */
--gold-dark: #b8860b; /* Or foncé */

/* Gradients premium */
--gold-gradient: linear-gradient(135deg, #b8860b 0%, #daa520 100%);
--background-gradient: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
--info-gradient: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);

/* Couleurs d'accent */
--pink-section: linear-gradient(135deg, #fce7f3 0%, #f9a8d4 50%, #fce7f3 100%);
--text-primary: #1e293b;
--text-secondary: #64748b;
```

### Breakpoints

```css
/* Mobile first */
@media (max-width: 639px) /* Mobile */ @media (min-width: 640px) /* Tablet */ @media (min-width: 1024px) /* Desktop */ @media (min-width: 1280px); /* Large desktop */
```

## ✨ Fonctionnalités

### 🎬 Animations

- **Lottie Animations** - 3 animations vectorielles interactives
  - 🏥 **Croix médicale** dans la navbar (Medic.json)
  - 👩‍⚕️ **Infirmière** dans la section Hero (mynurse.json)
  - 🗺️ **Recherche de carte** dans les zones d'intervention (map search.json)
- **Fade in/out** avec Intersection Observer
- **Staggered animations** (décalage séquentiel)
- **Hover effects** et micro-interactions dorées
- **Respect de `prefers-reduced-motion`**

### 📱 Mobile-First

- **Navbar ultra-compacte** (15-20% de l'écran vs 50% avant)
- **Menu hamburger** avec tous les contacts
- **Touch feedback** optimisé
- **Tailles de touch targets** 44px minimum
- **Performance mobile** optimisée

### ♿ Accessibilité

- **Structure sémantique** HTML5
- **Focus visible** et navigation clavier
- **Alt texts** pour toutes les images
- **Contrastes WCAG AA** respectés
- **Screen reader** compatible

## 🔧 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation build
npm run lint     # Linting ESLint
```

## 🌐 Déploiement

### Build de production

```bash
npm run build
```

Le dossier `dist/` contient les fichiers optimisés pour la production.

### Hébergement actuel

Le site est actuellement déployé sur **Hostinger** avec configuration Apache (.htaccess).

### Déploiement sur Hostinger

1. Build du projet : `npm run build`
2. Upload du contenu de `dist/` sur l'hébergement
3. Le fichier `.htaccess` applique automatiquement :
   - Headers de sécurité (CSP, HSTS, COOP, etc.)
   - Compression GZIP
   - Cache optimisé (1 an pour assets)
   - Redirection HTTPS
   - Support SPA (Single Page Application)

## 📊 Performance

### Optimisations incluses

- ⚡ **Vite** pour un bundling ultra-rapide
- 🖼️ **Images optimisées** WebP avec fallback JPEG (90% de réduction)
- 📦 **CSS Modules** pour un CSS minimal
- 🎨 **Lottie optimisées** - Lazy loading avec Intersection Observer
- 🔍 **SEO avancé** - Schema.org JSON-LD complet
- 🔄 **Service Worker** pour cache offline
- 🎯 **Headers de sécurité** CSP, HSTS, COOP configurés
- 📱 **Bouton téléphone** avec icône d'appel direct dans Hero

### Métriques atteintes (PageSpeed Insights - Sept 2024)

- **Score Performance** : 95+
- **Score Bonnes pratiques** : 95+
- **Score Accessibilité** : 100
- **Score SEO** : 100
- **First Contentful Paint** : < 1.2s
- **Largest Contentful Paint** : < 1.8s
- **Cumulative Layout Shift** : < 0.05
- **Total Blocking Time** : < 50ms

## 🛡️ Conformité

### Ordre Infirmier

- ✅ **Contenu informatif uniquement**
- ✅ **Pas de promotion commerciale**
- ✅ **Mentions légales conformes**
- ✅ **Respect des directives profession**

### RGPD

- 🔒 **Pas de cookies** de tracking
- 📊 **Pas d'analytics** invasifs
- 🎯 **Contact direct** uniquement
- 🛡️ **Données minimales** collectées

### Standards de code

- **ESLint** pour la qualité du code
- **CSS Modules** pour les styles encapsulés
- **Mobile-first** ultra-compact pour le responsive
- **Lottie React** pour les animations performantes
- **Accessibility** en priorité avec ARIA labels

## 🎨 Améliorations récentes (22 septembre 2025)

### ✨ Design & UX

- 🎨 **Nouvelle palette dorée** premium (gold/orange gradients)
- 🎬 **3 animations Lottie** avec lazy loading intelligent
- 📱 **Bouton téléphone Hero** avec icône SVG professionnelle et animation
- 🗂️ **Réorganisation des sections** (InfoSections unifiée)

### 🔍 SEO & Sécurité

- 📈 **Migration Hostinger** avec configuration .htaccess complète
- 🔒 **Headers de sécurité** CSP, HSTS, COOP, X-Frame-Options
- 🗺️ **URLs production** mises à jour (cabinet-infirmier-graslin.fr)
- 🏷️ **Correction API obsolètes** pour score 95+ en bonnes pratiques

### 🚀 Performance & Optimisations

- ⚡ **Images WebP** avec fallback JPEG (90% de réduction, 588KB économisés)
- 📐 **Service Worker** pour cache offline intelligent
- 🎯 **Lazy loading amélioré** avec Intersection Observer pour Lottie
- 📊 **Cache 1 an** pour assets statiques via .htaccess
- 🔄 **Preload optimisé** pour ressources critiques CSS et images

---

**Développé avec soin pour le Cabinet Infirmier Graslin**

_Site respectueux des règles de l'ordre infirmier et optimisé pour une expérience utilisateur exceptionnelle._
