# 🏥 Cabinet Infirmier Graslin - Site Vitrine

Site vitrine moderne et responsive pour le Cabinet Infirmier Graslin situé à Nantes, quartier Graslin.

## 🌟 Aperçu

Site one-page professionnel développé en React avec CSS Modules, respectant les règles de l'ordre infirmier (contenu informatif uniquement, sans promotion).

### 🎯 Caractéristiques principales

- **Design ultra-moderne** avec palette de couleurs 2024
- **Animations avancées** et micro-interactions
- **Mobile-first** et entièrement responsive
- **Glassmorphism** et effets visuels premium
- **Accessibilité WCAG AA** complète
- **Performance optimisée** avec lazy loading

## 📍 Informations du Cabinet

- **Adresse :** 9 rue Kléber, 44000 Nantes (Hyper centre-ville - Quartier Graslin)
- **Téléphone :** 02 40 77 73 81
- **Email :** contact@cabinet-graslin.fr
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
- **Intersection Observer API** - Animations au scroll

### Design & UX

- **Mobile-First Design** - Approche responsive
- **Glassmorphism** - Effets de transparence modernes
- **Cubic-Bezier Animations** - Transitions fluides
- **Accessibility First** - WCAG AA compliant

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
│   │   ├── logo-caducee.svg      # Logo du cabinet
│   │   └── photo-entree.jpg      # Photo d'entrée
│   └── index.html
├── src/
│   ├── components/               # Composants React
│   │   ├── Header.jsx           # En-tête avec contact info
│   │   ├── Hero.jsx             # Section principale
│   │   ├── OpeningHours.jsx     # Horaires d'ouverture
│   │   ├── ContactInfo.jsx      # Informations de contact
│   │   ├── Accessibility.jsx    # Accessibilité PMR
│   │   ├── InterventionZones.jsx # Zones desservies
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
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Palette de couleurs

```css
/* Couleurs principales */
--sky-500: #0ea5e9; /* Bleu principal */
--sky-400: #38bdf8; /* Bleu clair */
--sky-600: #0284c7; /* Bleu foncé */

/* Couleurs de fond */
--background: linear-gradient(135deg, #fefefe 0%, #f1f5f9 30%, #e0f2fe 70%);
--glass: rgba(255, 255, 255, 0.9) avec backdrop-filter;
```

### Breakpoints

```css
/* Mobile first */
@media (max-width: 639px) /* Mobile */ @media (min-width: 640px) /* Tablet */ @media (min-width: 1024px) /* Desktop */ @media (min-width: 1280px); /* Large desktop */
```

## ✨ Fonctionnalités

### 🎬 Animations

- **Fade in/out** avec Intersection Observer
- **Staggered animations** (décalage séquentiel)
- **Hover effects** et micro-interactions
- **Loading animations** et transitions fluides
- **Respect de `prefers-reduced-motion`**

### 📱 Mobile-First

- **Touch feedback** optimisé
- **Tailles de touch targets** 44px minimum
- **Navigation adaptative** avec émojis
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

### Hébergement recommandé

- **Netlify** - Déploiement automatique
- **Vercel** - Optimisé pour React
- **GitHub Pages** - Gratuit pour projets publics

## 📊 Performance

### Optimisations incluses

- ⚡ **Vite** pour un bundling ultra-rapide
- 🖼️ **Images optimisées** avec lazy loading
- 📦 **CSS Modules** pour un CSS minimal
- 🔄 **Code splitting** automatique
- 🎯 **Tree shaking** pour réduire la taille

### Métriques cibles

- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **First Input Delay** < 100ms

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
- **CSS Modules** pour les styles
- **Mobile-first** pour le responsive
- **Accessibility** en priorité

---

**Développé avec soin pour le Cabinet Infirmier Graslin**

_Site respectueux des règles de l'ordre infirmier et optimisé pour une expérience utilisateur exceptionnelle._
