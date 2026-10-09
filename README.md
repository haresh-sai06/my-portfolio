# Haresh Sainaath — Portfolio

A Next.js portfolio with a searchable project gallery, project detail pages, and cinematic portrait sections.

## Maintaining the content

`data/projects.json` is the single source for the gallery, project count, and new project detail pages. Every entry needs a name, meaningful summary, category, honest status, technologies, color, and working destination. New `/projects/<id>` pages also need an overview, build highlights, and a public repository link. Existing case studies retain their routes.

Every project has a cover image. The 15 new conceptual covers use built-in ImageGen; final WebP assets are in `public/thumbnail/generated/`, and the exact prompts are in `docs/cover-generation.json`. Preserve the user-approved eSports Tournament, Trip Bharat, Family Chatbot, PodJam, and AI Study Hub covers unless the user explicitly requests changes.

`lib/profile.ts` declares the active résumé URL and download filename. The October 2026 update uses the user-provided PDF from `Documents/Resume/Applications/resume.pdf`, copied byte-for-byte. Both the main navigation and contact component use this shared configuration. Résumé responses use attachment headers and must revalidate to prevent stale downloads. The prior canonical résumé URL also serves the updated file for compatibility.

Run `npm run refresh:github` to refresh public repository activity and `data/github.json`. It preserves curated copy and excludes private repositories, forks, and archived repositories from the snapshot. Review source and READMEs before adding new projects; a recent push alone does not establish a shipped product. Keep private project links as email enquiries.

Run `npm run check:content` after editing. The production build runs this check automatically and rejects missing project data, invalid local destinations, missing images, empty links, missing intro frames, and a missing résumé.

The weekly maintenance automation is attached to the Codex chat where the update was requested. It reviews new work, validates changes, and reports meaningful updates or blockers.

Portrait replacements require the user's supplied photos and approval of displayed previews. Follow `docs/photo-review.md`; use new asset filenames so existing browser caches cannot serve stale photos.

## Validation and publishing

Run `npm run build` for the content check, compilation, and Next.js production checks. Use `npm run start -- --port 3001` for a production preview. This checkout is linked to the existing `haresh-portfolio` Vercel project; authenticate Vercel before publishing to that project. Do not create a replacement hosted site to bypass missing authentication.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
