# 🎨 Portfolio - Lacuey David

Portfolio personnel développé avec React, TypeScript et Tailwind CSS.

## 🚀 Technologies

- **React 19** - Framework UI
- **TypeScript 5.9** - Typage statique
- **Tailwind CSS 3.4** - Framework CSS utilitaire
- **Vite 7** - Build tool ultra-rapide
- **PostCSS** - Transformation CSS

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Section profil
│   ├── PostCard.tsx    # Carte article
│   ├── RecentPosts.tsx # Section articles
│   ├── ProjectCard.tsx # Carte projet
│   ├── Projects.tsx    # Section projets
│   ├── Divider.tsx     # Séparateur
│   ├── Footer.tsx      # Pied de page
│   └── index.ts        # Exports
├── data/
│   └── content.ts      # Données (posts, projets)
├── types/
│   └── index.ts        # Types TypeScript
├── imgs/               # Images et assets
├── App.tsx             # Composant principal
└── main.tsx            # Point d'entrée
```

## ⚡ Installation

```bash
# Cloner le repository
git clone https://github.com/LacueyDavid/portefolio.git
cd portefolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🛠️ Scripts disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Build pour la production
npm run preview      # Prévisualise le build
npm run lint         # Vérifie le code avec ESLint
```

## 🎯 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Architecture modulaire avec composants
- ✅ Type-safety avec TypeScript
- ✅ Styles avec Tailwind CSS
- ✅ Images optimisées avec Vite
- ✅ SEO-friendly

## 📝 Ajouter du contenu

### Ajouter un article

Édite `src/data/content.ts` :

```typescript
export const posts: Post[] = [
  {
    title: "Mon nouvel article",
    date: "10 Nov 2025",
    tags: "React, TypeScript",
    description: "Description de l'article...",
  },
  // ... autres articles
];
```

### Ajouter un projet

Édite `src/data/content.ts` :

```typescript
export const projects: Project[] = [
  {
    title: "Mon nouveau projet",
    year: "2025",
    type: "Web App",
    description: "Description du projet...",
    imageUrl: img4, // Importer l'image au début du fichier
  },
  // ... autres projets
];
```

## 🎨 Personnalisation

Les couleurs et styles peuvent être personnalisés dans :

- `tailwind.config.cjs` - Configuration Tailwind
- `src/index.css` - Styles globaux

## 📄 License

Ce projet est sous licence MIT.

## 👤 Auteur

**Lacuey David**

- GitHub: [@LacueyDavid](https://github.com/LacueyDavid)
- École: 42

---

💼 Actuellement à la recherche d'un stage de 6 mois
tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },

},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
