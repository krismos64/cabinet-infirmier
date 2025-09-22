# 🚀 PROCÉDURE DE LANCEMENT - 24 SEPTEMBRE 2025

## 📋 Instructions pour activer le site le 24 septembre 2025

### ✅ **Actions à effectuer le 24 septembre 2025 :**

#### 1. Supprimer les fichiers temporaires :
```bash
# Supprimer la page de maintenance
rm /Users/chris/Documents/sites/cabinet-infirmier/public/maintenance.html

# Supprimer l'index de redirection temporaire
rm /Users/chris/Documents/sites/cabinet-infirmier/index.html
```

#### 2. Restaurer l'index principal :
```bash
# Renommer l'index original
mv /Users/chris/Documents/sites/cabinet-infirmier/index-site.html /Users/chris/Documents/sites/cabinet-infirmier/index.html
```

#### 3. Rebuild et redéployer :
```bash
# Construire le site
npm run build

# Uploader le contenu de dist/ sur Hostinger
# Le site sera alors pleinement opérationnel
```

---

## 📁 **État actuel des fichiers :**

### ✅ **Fichiers créés temporairement :**
- `index.html` → Redirige vers `/maintenance.html`
- `public/maintenance.html` → Page "Bientôt disponible"

### ✅ **Fichiers sauvegardés :**
- `index-site.html` → Site complet (ancien index.html)

### ✅ **Fichiers conservés :**
- Tous les composants React dans `/src/`
- Tous les assets dans `/public/assets/`
- Configuration `.htaccess`, `robots.txt`, etc.

---

## 🎯 **Fonctionnement actuel :**

1. **Visiteur arrive sur** → `https://cabinet-infirmier-graslin.fr`
2. **Redirection automatique** → `/maintenance.html`
3. **Affichage** → Page "Bientôt disponible" avec countdown
4. **Countdown** → Se termine le 24 septembre 2025 à 00h00
5. **Auto-redirection** → Vers `/index.html` (site complet) après le 24 sept

---

## ⚡ **Redirection automatique incluse**

La page de maintenance contient un script qui :
- ✅ Affiche un **countdown en temps réel**
- ✅ **Redirige automatiquement** vers le site complet le 24 septembre
- ✅ Garde les **informations de contact** accessibles
- ✅ Maintient le **branding** du cabinet

---

## 📞 **Informations visibles pendant la maintenance :**

- **Nom** : Cabinet Infirmier Graslin
- **Adresse** : 9 rue Kléber, 44000 Nantes
- **Téléphone** : 02 40 77 73 81 (cliquable)
- **Horaires** : 7h-20h, 7j/7
- **Services** : Soins infirmiers à domicile et au cabinet

---

## 🚨 **RAPPEL IMPORTANT :**

**Le 24 septembre 2025**, effectuer les 3 actions ci-dessus pour que le site complet soit accessible !

Après ces manipulations, le site sera entièrement opérationnel avec :
- ✅ Toutes les optimisations SEO
- ✅ Headers de sécurité (.htaccess)
- ✅ Images WebP optimisées
- ✅ Service Worker pour le cache
- ✅ Données structurées pour IA/LLM
- ✅ Contenu SEO local Nantes

---

**Date de création de cette procédure :** 22 septembre 2025
**Lancement prévu :** 24 septembre 2025