# 🚀 Instructions pour créer le repository GitHub

## Étape 1 : Créer le repository sur GitHub

1. Va sur https://github.com/new
2. Nom du repository : `portefolio` (ou un autre nom)
3. Description : "Portfolio personnel - React + TypeScript + Tailwind CSS"
4. **Public** ou **Private** selon ta préférence
5. ❌ **NE COCHE PAS** "Add a README file" (on en a déjà un)
6. ❌ **NE COCHE PAS** "Add .gitignore" (on en a déjà un)
7. Clique sur **"Create repository"**

## Étape 2 : Lier ton repository local à GitHub

Une fois le repository créé sur GitHub, copie l'URL (format HTTPS ou SSH) et exécute :

### Avec HTTPS :

```bash
git remote add origin https://github.com/LacueyDavid/portefolio.git
git branch -M main
git push -u origin main
```

### Avec SSH :

```bash
git remote add origin git@github.com:LacueyDavid/portefolio.git
git branch -M main
git push -u origin main
```

## Étape 3 : Vérifier que tout est poussé

```bash
git remote -v
# Devrait afficher :
# origin  https://github.com/LacueyDavid/portefolio.git (fetch)
# origin  https://github.com/LacueyDavid/portefolio.git (push)
```

## 📝 Commits futurs

Pour les prochains commits :

```bash
# 1. Vérifier les fichiers modifiés
git status

# 2. Ajouter les fichiers
git add .

# 3. Créer un commit
git commit -m "feat: Ajoute nouvelle fonctionnalité"

# 4. Pousser sur GitHub
git push
```

## 🎨 Conventions de commit (optionnel mais recommandé)

- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Changements de style (CSS, formatage)
- `refactor:` - Refactorisation du code
- `test:` - Ajout de tests
- `chore:` - Tâches diverses (config, etc.)

Exemples :

```bash
git commit -m "feat: Ajoute section contact"
git commit -m "fix: Corrige affichage mobile"
git commit -m "docs: Met à jour README"
git commit -m "style: Améliore design du header"
```

## 🔍 État actuel du repository

Ton repository local est prêt avec :

- ✅ `.gitignore` configuré
- ✅ `README.md` personnalisé
- ✅ Commit initial créé
- ✅ Tout le code est prêt à être poussé

Il ne reste plus qu'à créer le repository sur GitHub et le lier !

## 🌐 Déployer sur GitHub Pages (optionnel)

Pour déployer ton portfolio gratuitement :

1. Installe le package gh-pages :

```bash
npm install --save-dev gh-pages
```

2. Ajoute dans `package.json` :

```json
{
  "homepage": "https://LacueyDavid.github.io/portefolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure Vite dans `vite.config.ts` :

```typescript
export default defineConfig({
  base: "/portefolio/",
  // ... reste de la config
});
```

4. Déploie :

```bash
npm run deploy
```

5. Active GitHub Pages dans les settings du repository :
   - Va dans Settings > Pages
   - Source : "Deploy from a branch"
   - Branch : `gh-pages` / `/ (root)`
   - Save

Ton site sera disponible sur : https://LacueyDavid.github.io/portefolio
