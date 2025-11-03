# 🚀 GitHub Pages Deployment Guide

This guide will help you publish your portfolio to GitHub Pages.

---

## Prerequisites

1. **Git installed** - Download from [git-scm.com](https://git-scm.com/)
2. **GitHub account** - Sign up at [github.com](https://github.com/)

---

## Step 1: Initialize Git Repository

Open a terminal in the project folder and run:

```powershell
cd "c:\Users\jendg\OneDrive\Documents\Digital Design Projects\digital-design-portfolio"
git init
git add .
git commit -m "Initial commit: Portfolio with estate planning flowchart"
```

---

## Step 2: Create GitHub Repository

### Option A: Using GitHub CLI (if installed)
```powershell
gh repo create digital-design-portfolio --public --source=. --remote=origin
git push -u origin main
```

### Option B: Using GitHub Web Interface (Recommended)

1. Go to [github.com/new](https://github.com/new)
2. Fill in:
   - **Repository name:** `digital-design-portfolio`
   - **Description:** "Frame & Function Portfolio - Digital design projects"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click **Create repository**
4. Copy the commands shown and run them in your terminal:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/digital-design-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/docs`
5. Click **Save**
6. Wait 1-2 minutes for the site to build
7. Your site will be live at: `https://YOUR-USERNAME.github.io/digital-design-portfolio/`

---

## Step 4: Update Links in Your Site

Once your site is live, update these files with your actual URLs:

### In `README.md`:
- Replace `[Your GitHub Pages URL will go here]` with your actual Pages URL
- Replace `[Your contact info here]` with your email/contact info

### In `docs/index.html`:
- Replace `your.email@example.com` with your actual email
- Replace `@yourusername` with your GitHub username
- Replace GitHub links with your actual repository URL

### In `docs/projects/estate-planning-flowchart/index.html`:
- Replace `yourusername` in GitHub links with your actual username

---

## Step 5: Commit and Push Updates

After making the changes above:

```powershell
git add .
git commit -m "Update contact info and URLs"
git push
```

Wait a minute or two for GitHub Pages to rebuild, then visit your live site!

---

## Adding New Projects

To add a new project to your portfolio:

1. Create a new folder in `docs/projects/your-project-name/`
2. Add an `index.html` file for the project page
3. Update `docs/index.html` to add a new project card
4. Commit and push:

```powershell
git add .
git commit -m "Add new project: Your Project Name"
git push
```

---

## Custom Domain (Optional)

If you have a custom domain:

1. Create a file named `CNAME` in the `docs/` folder
2. Add your domain (e.g., `frameandfunction.com`)
3. Commit and push
4. In GitHub Settings → Pages, your custom domain will be detected
5. Update your domain's DNS settings (see GitHub's guide)

---

## Local Preview

To preview your site locally before pushing:

### Option 1: Python (if installed)
```powershell
cd docs
python -m http.server 8000
```
Then visit `http://localhost:8000`

### Option 2: VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click `docs/index.html`
3. Select "Open with Live Server"

---

## Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes after first enabling Pages
- Check Settings → Pages for build status
- Ensure `/docs` folder is selected as source
- Verify repository is Public

**Images/CSS not loading?**
- Check that all paths are relative (no leading `/`)
- Ensure files are committed and pushed

**Mermaid diagram not rendering?**
- Check browser console for errors
- Ensure you have internet connection (CDN required)
- Try clearing browser cache

---

## Next Steps

✅ **Your portfolio is live!**
- Share your URL on LinkedIn, resume, etc.
- Add more projects as you complete them
- Consider adding a custom domain
- Enable Google Analytics (optional)
- Add a contact form (optional)

---

**Questions?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
