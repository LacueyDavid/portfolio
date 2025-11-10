# Structure des composants

## Architecture

Le projet a été refactoré en composants réutilisables organisés dans le dossier `src/components/`.

## Composants créés

### 1. **Header.tsx**

Navigation fixe en haut de la page avec liens vers Posts et Works.

### 2. **Hero.tsx**

Section hero/profil avec :

- Présentation personnelle
- Image de profil avec effet sepia
- Bouton "Download Resume"

### 3. **PostCard.tsx**

Carte réutilisable pour afficher un article de blog.

**Props:**

- `title: string` - Titre de l'article
- `date: string` - Date de publication
- `tags: string` - Tags/catégories
- `description: string` - Description de l'article

### 4. **RecentPosts.tsx**

Section qui affiche les articles récents en utilisant `PostCard`.
Les données des posts sont gérées dans un tableau local.

### 5. **ProjectCard.tsx**

Carte réutilisable pour afficher un projet.

**Props:**

- `title: string` - Titre du projet
- `year: string` - Année du projet
- `type: string` - Type/catégorie
- `description: string` - Description
- `imageUrl: string` - URL de l'image

### 6. **Projects.tsx**

Section qui affiche tous les projets en utilisant `ProjectCard`.
Les données des projets sont gérées dans un tableau local.

### 7. **Divider.tsx**

Composant simple pour les séparateurs horizontaux.

### 8. **Footer.tsx**

Pied de page avec :

- Icônes des réseaux sociaux (GitHub, Instagram, Vector, LinkedIn)
- Copyright

### 9. **index.ts**

Fichier barrel export pour importer tous les composants facilement.

## Utilisation dans App.tsx

```tsx
import { Header, Hero, RecentPosts, Projects, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <RecentPosts />
      <Projects />
      <Footer />
    </>
  );
}
```

## Avantages de cette structure

✅ **Réutilisabilité** - Les composants peuvent être réutilisés facilement
✅ **Maintenabilité** - Chaque composant a une responsabilité unique
✅ **Lisibilité** - App.tsx est maintenant très simple (15 lignes vs 202 lignes)
✅ **Scalabilité** - Facile d'ajouter de nouveaux composants
✅ **Testabilité** - Chaque composant peut être testé isolément

## Prochaines améliorations possibles

- Extraire les données (posts, projects) dans des fichiers JSON ou une API
- Créer un système de types partagés dans un dossier `types/`
- Ajouter des tests unitaires pour chaque composant
- Créer un fichier de configuration pour les URLs des réseaux sociaux
