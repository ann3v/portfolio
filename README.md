# Ardit Avdiu — Developer Portfolio

A personal portfolio for an early-career full-stack developer focused on AI-powered products. Three project case studies connect product engineering, AI reliability, and conventional backend development without inventing employment, production usage, or project maturity.

## Stack and approach

- Next.js App Router, React, and TypeScript.
- Tailwind CSS and shared CSS design tokens; local Geist fonts.
- Server Components for page content; a small client component for mobile navigation.
- Local typed content, native SVG architecture artwork, and optional optimized project images.
- Vitest and React Testing Library for configuration and contact behavior; Playwright and axe for browser checks.
- GitHub Actions for type checking, lint, tests, production build, and Chromium checks.

There is no database, custom backend, tracking script, or contact service to configure. The diagrams illustrate architecture; they are not fabricated product screenshots.

## Local development

Use Node.js 24 (also specified in `.nvmrc`) and npm. Dependency versions are locked in `package-lock.json`.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No environment variables are required to run the site.

| Command                | Purpose                                                 |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Start local development                                 |
| `npm run typecheck`    | Check TypeScript                                        |
| `npm run lint`         | Run ESLint; warnings fail the check                     |
| `npm run format`       | Format source and documentation with Prettier           |
| `npm run format:check` | Check formatting without changing files                 |
| `npm test`             | Run unit and component tests                            |
| `npm run test:watch`   | Run Vitest in watch mode                                |
| `npm run build`        | Create the production build                             |
| `npm start`            | Serve the production build                              |
| `npm run check`        | Run typecheck, lint, unit tests, and build              |
| `npm run test:e2e`     | Run Chromium browser checks against a production server |

Install the browser and build before the first browser test run:

```sh
npx playwright install chromium
npm run build
npm run test:e2e
```

Playwright starts the production server at `http://127.0.0.1:3000`. Outside CI, it can reuse a server already running there. Stop any development server on that port before verifying the production build. Browser failures save screenshots and traces in `test-results/`.

## Routes

| Route                          | Content                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------- |
| `/`                            | Introduction, selected work, engineering approach, about, skills, and contact |
| `/work/kosvibe`                | Collaborative mobile platform and business-workflow case study                |
| `/work/ai-interview-simulator` | AI practice application, safeguards, and evaluation experiment                |
| `/work/smart-student-planner`  | Mobile planner and custom REST backend                                        |
| `/opengraph-image`             | Generated social preview image                                                |
| `/sitemap.xml`                 | Configured public page URLs                                                   |
| `/robots.txt`                  | Crawler instructions                                                          |

Unknown routes display a custom 404 with a link back to the selected work.

## Content and component architecture

```text
src/
  app/                  App Router pages, metadata routes, global styles
  components/           Homepage sections, navigation, project artwork, shared UI
  data/
    portfolio.ts        Profile, projects, skills, education, and case-study content
    media.ts            Optional project screenshot mapping
  lib/
    metadata.ts         Validated public URL and case-study metadata helpers
public/projects/        Real project screenshots can be added here
tests/
  unit/                 Contact-link and metadata configuration tests
  e2e/                  Routes, internal links, accessibility, and responsive checks
```

Update `src/data/portfolio.ts` to change the profile, availability, project facts, technology groups, or education. Keep claims supported by the project evidence: KosVibe is collaborative, its marketplace is listing/contact based, and the interview experiment measures expected-band agreement rather than AI accuracy. The exact education institution is intentionally optional.

The page sections are separate components. `SiteHeader` owns mobile-menu interaction; `ProfileLinks` owns optional public contact links. `ProjectArt` and `SystemVisual` provide lightweight SVG illustrations. Change the color palette, spacing, and typography through the variables and styles in `src/app/globals.css`; artwork styles live in `src/app/artwork.css`.

## Optional email and résumé

Both are omitted until explicitly configured in the `portfolio` object in `src/data/portfolio.ts`:

```ts
contactEmail: "your-approved-public-address@example.com",
resumeUrl: "/resume/ardit-avdiu.pdf",
```

Use an address approved for public display; no email is derived from Git metadata. To enable the résumé, add the finalized PDF at `public/resume/ardit-avdiu.pdf`, then set `resumeUrl`. An external HTTPS URL also works. The email link opens the visitor's email client; it does not claim to send messages through the website.

## Project media

Real screenshots are not included. Every current project visual is labeled architectural artwork. Add files beneath `public/projects/`, then map a cover in `src/data/media.ts`:

```ts
export const projectMedia: Record<string, ProjectMedia | undefined> = {
  kosvibe: {
    src: "/projects/kosvibe/cover.webp",
    alt: "KosVibe business dashboard showing restaurant and reservation tools.",
  },
};
```

Use the actual project slug as the key: `kosvibe`, `ai-interview-simulator`, or `smart-student-planner`. Describe the actual image in `alt`. Configured covers replace the homepage's architectural artwork and appear on the matching case-study page via `next/image`. The case studies retain their educational architecture diagrams. Capture additional screenshots using the directory guides for later galleries.

| Directory                                                                               | Recommended captures                                                                                             |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`public/projects/kosvibe/`](public/projects/kosvibe/README.md)                         | Discovery, map, restaurant detail, booking, business dashboard, business claim, reservation manager, marketplace |
| [`public/projects/interview-simulator/`](public/projects/interview-simulator/README.md) | Setup, active interview, answer feedback, final results, history/resume                                          |
| [`public/projects/student-planner/`](public/projects/student-planner/README.md)         | Dashboard, tasks, task details/reminders, weekly schedule, analytics                                             |

Prefer WebP or AVIF at an appropriate display resolution (roughly 1200–1600 pixels across for a wide cover). Preserve legible UI, remove private data, and use a consistent crop. Never place access tokens, personal account details, or credentials in screenshots.

## Public URL and metadata

`SITE_URL` is optional. Set it to the final origin, such as `https://your-real-domain.com`, in the deployment environment when a domain is available. This is an example only; no domain is assumed or hardcoded.

URL selection in `src/lib/metadata.ts` is:

1. Explicit `SITE_URL`.
2. On a Vercel production deployment, `VERCEL_PROJECT_PRODUCTION_URL`, falling back to `VERCEL_URL`.
3. On other Vercel deployments, `VERCEL_URL`.
4. No public origin when none is configured.

URLs must use HTTP or HTTPS and contain no embedded credentials. Paths and query strings are reduced to the origin. Without a public origin, canonical URLs and absolute sitemap entries are omitted rather than assigned a fabricated domain; the site still works locally. Set the variable before building, and rebuild after changing it. Vercel normally supplies its deployment variables automatically; see [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables).

Page titles, descriptions, social metadata, structured Person data, an SVG icon, a generated social card, sitemap, and robots are implemented with Next.js metadata conventions. Public contact information belongs in the content file, not a secret environment variable.

A local build without a public URL can report Next.js’s `metadataBase` warning and use localhost for social-image URLs. This does not fail the build. Vercel’s deployment variables or an explicit `SITE_URL` supply the public origin when deployed.

## Verification

The automated checks cover:

- Site URL precedence, invalid origins, and canonical/social metadata.
- Conditional email/résumé rendering and safe external profile links.
- All four pages, internal page/anchor destinations, titles/descriptions, and the 404.
- Mobile menu keyboard use, Escape behavior, the skip link, and reduced motion.
- Horizontal overflow at 320, 390, 768, and 1440 pixels.
- Automated axe checks for WCAG A/AA rules on each primary page.

These are regression checks, not a WCAG certification or a substitute for visual review. Browser tests validate the supplied external URLs without relying on third-party availability. Review GitHub and LinkedIn manually before sharing the portfolio. No performance score, full accessibility certification, or passing-test claim is implied by the existence of these checks; use the actual command/CI results for the current revision.

## Deploy to Vercel

1. Push this repository, including `package-lock.json`, to GitHub.
2. Import the repository as a Vercel project. Use the detected Next.js framework and repository root, with Node.js 24.
3. Keep the standard `npm run build` command and framework output defaults. No environment variable is needed for the first deployment.
4. Deploy, then check all pages, the menu on a phone, project links, and social previews on the generated URL.
5. Add an owned domain in the project's domain settings and apply the DNS records Vercel supplies at the domain provider.
6. Set `SITE_URL` to the chosen HTTPS origin for production, then redeploy so canonical URLs and the sitemap use it.

Connected Git branches support preview deployments; production follows the configured production branch. See [Vercel Git deployments](https://vercel.com/docs/git) and [environment variable configuration](https://vercel.com/docs/environment-variables) for the platform workflow. The repository's GitHub Actions checks do not themselves publish a deployment.

## Content still needed

- Real screenshots for the three applications.
- An approved public contact email, if desired.
- A finalized résumé PDF or URL, if desired.
- Confirmed official institution/program wording.
- The final custom domain, if desired.

The portfolio is usable without these optional additions. There are no invented employers, testimonials, user counts, or fake résumé downloads to replace.
#   p o r t f o l i o  
 