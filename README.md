# Portfolio Igor ADANDE

Portfolio professionnel moderne d'Igor ADANDE, développeur full-stack freelance, construit avec Next.js 15, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

### ✨ Fonctionnalités Principales
- **Design Responsive** : Optimisé pour tous les appareils
- **Mode Sombre/Clair** : Toggle automatique avec persistance
- **Animations Fluides** : Framer Motion pour les transitions
- **PWA** : Installation sur mobile et support hors ligne
- **Internationalisation** : Support français et anglais
- **Lazy Loading** : Chargement optimisé des sections
- **Tests Complets** : Jest + React Testing Library

### 🔒 Sécurité
- **Rate Limiting** : Protection contre le spam
- **Validation Renforcée** : Sanitisation des données
- **Headers de Sécurité** : Protection contre les attaques
- **API Sécurisée** : Validation côté serveur

### ♿ Accessibilité
- **ARIA Labels** : Navigation par lecteur d'écran
- **Navigation Clavier** : Support complet du clavier
- **Contrastes Optimisés** : Respect des standards WCAG
- **Skip Links** : Navigation rapide

## 🛠️ Technologies

### Frontend
- **Next.js 15** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Animations
- **Lucide React** : Icônes

### Backend & API
- **Next.js API Routes** : API REST
- **Nodemailer** : Envoi d'emails
- **Rate Limiting** : Protection API
- **Validation** : Sanitisation des données

### Tests & Qualité
- **Jest** : Framework de tests
- **React Testing Library** : Tests d'intégration
- **ESLint** : Linting du code
- **TypeScript** : Vérification de types

### PWA & Performance
- **next-pwa** : Support PWA
- **Service Worker** : Cache et hors ligne
- **Lazy Loading** : Optimisation du chargement
- **Image Optimization** : Next.js Image

## 📦 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/adandeigor/portfolio.git
cd portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration des variables d'environnement**
```bash
cp env.example .env.local
```

Éditer `.env.local` avec vos configurations :
```env
# Configuration Email
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Configuration du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Configuration PWA
NEXT_PUBLIC_PWA_NAME=Igor ADANDE - Portfolio
NEXT_PUBLIC_PWA_DESCRIPTION=Portfolio professionnel d'Igor ADANDE
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🧪 Tests

### Lancer les tests
```bash
# Tests en mode watch
npm run test:watch

# Tests avec couverture
npm run test:coverage

# Tests une seule fois
npm test
```

### Structure des tests
```
src/
├── components/
│   └── sections/
│       └── __tests__/
│           ├── welcome-section.test.tsx
│           └── contact-section.test.tsx
└── app/
    └── api/
        └── send-email/
            └── __tests__/
                └── route.test.ts
```

## 🏗️ Architecture

### Structure du Projet
```
src/
├── app/                    # App Router Next.js
│   ├── api/               # API Routes
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── design/            # Éléments de design
│   ├── navigation/        # Navigation
│   ├── sections/          # Sections du portfolio
│   ├── ui/                # Composants UI
│   └── sections/          # Sections avec lazy loading
├── data/                  # Données statiques
├── hooks/                 # Hooks personnalisés
├── i18n/                  # Internationalisation
├── lib/                   # Utilitaires et validation
└── utils/                 # Fonctions utilitaires
```

### Sections du Portfolio
- **Accueil** : Présentation et CTA principal
- **À Propos** : Bio et stack technologique
- **Projets** : Portfolio dynamique des réalisations
- **CV** : Parcours professionnel
- **Services** : Offres commerciales
- **Témoignages** : Retours clients
- **Contact** : Formulaire sécurisé

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `src/app/globals.css` :
```css
--color-primary: #8447ff;    /* Couleur principale */
--color-dark: #1c0221;       /* Texte sombre */
--color-secondary: #0e105b;  /* Couleur secondaire */
```

### Thèmes
Le projet supporte les modes clair et sombre avec transition automatique.

### Internationalisation
Les traductions sont dans `src/i18n/locales/` :
- `fr.json` : Français
- `en.json` : Anglais

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connecter votre repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Variables d'environnement de production
```env
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-production-app-password
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production
```

## 📱 PWA

Le portfolio est configuré comme une PWA avec :
- **Installation** : Ajout à l'écran d'accueil
- **Hors ligne** : Cache des ressources
- **Notifications** : Support des notifications push
- **Manifeste** : Configuration PWA complète

## 🔒 Sécurité

### API Protection
- **Rate Limiting** : 5 requêtes par 15 minutes par IP
- **Validation** : Sanitisation des données d'entrée
- **Headers** : Vérification des headers de sécurité
- **CORS** : Configuration sécurisée

### Bonnes Pratiques
- Variables d'environnement pour les secrets
- Validation côté client et serveur
- Sanitisation des données utilisateur
- Logs sécurisés sans données sensibles

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Igor ADANDE** - [@adandeigor](https://github.com/adandeigor) - igor@example.com

Lien du projet : [https://github.com/adandeigor/portfolio](https://github.com/adandeigor/portfolio)
