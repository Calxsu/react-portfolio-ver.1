# React Portfolio Template

A reusable, production-minded developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. The layout is modular, data-driven, and designed for cinematic presentation without sacrificing clarity.

## Features
- Modular section architecture with data-driven content
- Framer Motion reveal animations and motion-ready UI
- Responsive, accessible layout with focus states
- Placeholder-ready media, projects, and testimonials
- Dockerized dev and production workflows
- SEO-friendly metadata placeholders

## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Docker + Nginx (production)

## Docker-First Workflow (No Local Node Needed)
1. Start Docker Desktop.
2. Install dependencies in the container:
   - `docker compose run --rm app npm install`
3. Run the dev server:
   - `docker compose up --build app`
4. Build static output before pushing:
   - `docker compose run --rm app npm run build`

## Local Development (Optional)
1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
4. Preview production build:
   - `npm run preview`

## Docker Development
- Build and run the dev container:
   - `docker compose up --build app`
- The app runs at `http://localhost:5173`

## Docker Production
- Build and run the production container:
  - `docker compose up --build web`
- The app runs at `http://localhost:8080`

## Static Build Output
- Production build output is generated in `dist/`.
- The Nginx container serves the `dist/` folder.

## GitHub Pages Deployment
1. Build the site (Docker):
   - `docker compose run --rm app npm run build`
2. Ensure `base` in `vite.config.ts` is set for your repo name if needed.
3. Push the `dist/` folder to the `gh-pages` branch using your preferred workflow.

## Customization Guide
### Update core content
- Update basic profile details and section toggles in `src/data/siteConfig.ts`.
- Update section headings and subtitles in `src/data/sectionCopy.ts`.
- Update skills in `src/data/skills.ts`.
- Update projects in `src/data/projects.ts`.
- Update experience in `src/data/experience.ts`.
- Update services in `src/data/services.ts`.
- Update testimonials in `src/data/testimonials.ts`.
- Update media in `src/data/media.ts`.
- Update social links in `src/data/socials.ts`.

### Replace placeholder media
- Add images or videos to the `public/` directory.
- Replace `src` and `poster` fields in `src/data/media.ts` and `src/data/projects.ts`.

### Update colors and typography
- Modify CSS variables in `src/index.css`.
- Tailwind theme values are defined in `tailwind.config.ts`.

### Disable sections
- Toggle `enabled` for any section in `src/data/siteConfig.ts`.

### Contact form
- The form UI is ready. Connect to a form provider by setting `action` and `method` on the form element or by wiring your own API endpoint.

## Notes
- Replace placeholder content and links before publishing.
- Add a real Open Graph image at `public/og-image.png`.
