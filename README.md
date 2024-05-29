# Cloudstrap Theme for Astro
[![Netlify Status](https://api.netlify.com/api/v1/badges/b60352ff-0308-4fc4-8b98-a35eee6772aa/deploy-status)](https://app.netlify.com/sites/cloudstrap/deploys)![GitHub last commit](https://img.shields.io/github/last-commit/hvxley/cloudstrap)

```sh
npm create astro@latest -- --template hvxley/cloudstrap
```

This free starter template brings bootstrap, astro-icons, and Sass to your Astro project.

Check back again soon!

Features:
* Color mode featuring Light, Dark, and Auto.
* Icon Pack [from astro-icons, iconify, and remix](https://icon-sets.iconify.design/ri/)
* Mobile-first design
* SEO Optimization
* Netlify-ready Contact Form
* Sitemap

## Project structure

Inside **Cloudstrap** template, you'll see the following folders and files:

```
/
├── public/
│   ├── favicons/
│   │   └── favicon.svg
│   ├── bootstrap-logo-white.svg
│   ├── humans.txt
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ColorModeButton.astro
│   │   ├── ColorModeGraphics.astro
│   │   ├── FormattedDate.astro
│   │   ├── Footer.astro
│   │   ├── Meta.astro
│   │   └── Navbar.astro
│   ├── content/
│   │   ├── blog/
|   │   │   ├── bootstrap-cheatsheet.md
|   │   │   └── post-2.md
│   │   └── config.ts
│   ├── layouts/
│   │   ├── BlogPost.astro
│   │   └── Layout.astro
│   ├── pages/
│   │   ├──blog/
|   │   │   ├── [...slug].astro
|   │   │   └── index.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── thankyou.astro
│   ├── scripts/
│   │   └── color-modes.js
│   ├── styles/
│   │   └── stylesheet.scss
│   └── env.d.ts
├── .gitignore
├── package.json
├── astro.config.mjs
├── README.md
├── tsconfig.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

To generate a new Sitemap, update your domain URL in `astro.config.mjs` and run `npm run build`.

## Lighthouse Score
![Lighthouse Score](https://cloudstrap.huxley.cloud/lighthouse.png "Lighthouse Score")
