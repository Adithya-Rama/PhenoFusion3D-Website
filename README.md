# PhenoFusion3D — Website

A **display-only marketing website** for **PhenoFusion3D**, an integrated 3D–hyperspectral analytics tool developed at the ANU node of the **Australian Plant Phenomics Network (APPN)**. The site showcases the project’s goals, capabilities, and workflows for plant phenomics research and breeding.

---

## About PhenoFusion3D

PhenoFusion3D extracts structural and spectral traits from plant scans, enabling researchers to:

- **Visualise** plants in 3D with hyperspectral overlays (bands/indices)
- **Derive** key hyperspectral indices and correlate traits with phenotypes or agronomic features
- **Accelerate** plant science and breeding decisions with reproducible pipelines and exportable outputs

The project aims for a usable desktop application with calibration, background removal, trait extraction, interactive 3D visualisation, and clear documentation for adoption.

---

## Tech Stack

| Category      | Technology                          |
| ------------- | ----------------------------------- |
| Framework     | [Next.js](https://nextjs.org/) 14   |
| Language      | TypeScript                          |
| Styling       | Tailwind CSS                        |
| Animation     | Framer Motion                       |
| Icons         | Lucide React                        |
| Font          | Inter (Google Fonts)                |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout, metadata, fonts
│   ├── page.tsx     # Home page composition
│   └── globals.css  # Global styles
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Features.tsx
    ├── Pipeline.tsx
    ├── Visualisation.tsx
    ├── TechStack.tsx
    ├── Organisation.tsx
    └── Contact.tsx
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later  
- **npm** (or yarn / pnpm)

### Install

```bash
npm install
```

### Development

Run the dev server (default: [http://localhost:3000](http://localhost:3000)):

```bash
npm run dev
```

### Build

Static export (e.g. for GitHub Pages):

```bash
npm run build
```

Output is in the `out/` directory. To preview it locally:

```bash
npx serve out
```

### Lint

```bash
npm run lint
```

---

## Hosting on GitHub Pages

The repo is set up to build and deploy to **GitHub Pages** via GitHub Actions.

### 1. Create a GitHub repository

1. On [GitHub](https://github.com/new), create a new repository (e.g. `PhenoFusion3D-Website`).
2. Do **not** add a README, .gitignore, or licence if you already have a local repo.

### 2. Push this project to GitHub

From the project root:

```bash
git remote add origin https://github.com/YOUR_USERNAME/PhenoFusion3D-Website.git
git branch -M main
git add .
git commit -m "Add GitHub Pages deployment"
git push -u origin main
```

Use your GitHub username and repo name. If your default branch is `master`, use `master` instead of `main` and push that.

### 3. Turn on GitHub Pages

1. In the repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save. The first deployment runs from the **Actions** tab (workflow: “Deploy to GitHub Pages”).

### 4. View the site

After the workflow finishes (a few minutes), the site is available at:

**https://YOUR_USERNAME.github.io/PhenoFusion3D-Website/**

(Replace `YOUR_USERNAME` and the repo name if different.)

Later pushes to `main` (or `master`) will trigger a new build and deploy automatically.

---

## Links

- **APPN / ANU node contact:** [plantphenomics.org.au/contact#node-anu](https://www.plantphenomics.org.au/contact#node-anu)
- **Australian Plant Phenomics Network:** [plantphenomics.org.au](https://www.plantphenomics.org.au/)

---

## Licence & IP

Project IP is used under a fee-free licence from The University for assessable work (examination/assessment only). Stakeholder context: Government, start-up/entrepreneurial, not-for-profit. No compensation or remuneration is offered for this project.

---

## Summary

This repository is a **static, display-only** site for promoting and advertising PhenoFusion3D. It does not implement the desktop application or analytics pipelines; those are separate deliverables of the APPN/ANU PhenoFusion3D project.
