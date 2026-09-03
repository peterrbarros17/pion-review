# Pion Review

A game review blog built to practice modern web development — covering retro and current titles, news, and featured posts.

The UI is in Portuguese (`pt-BR`). Content is served by a separate API ([pion-api](https://github.com/peterrbarros17/pion-api)).

![Pion Review](https://github.com/user-attachments/assets/cdeed920-5890-4a71-b9cd-b58705b228c7)

## Features

- Latest published review on the homepage, then a grid of recent reviews
- Game reviews with dynamic slug pages
- News sidebar and news listing
- Search by title (`/results`)
- Responsive layout with mobile navigation

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 14 (App Router) |
| Language | TypeScript |
| UI | React 18, Tailwind CSS, React Icons |
| Logging | Winston |
| Backend | [pion-api](https://github.com/peterrbarros17/pion-api) (deployed on Vercel) |

## Prerequisites

- Node.js 18.17 or later
- npm
- A running [pion-api](https://github.com/peterrbarros17/pion-api) instance (local or the hosted URL used in `src/lib/getPosts.ts`)

Without the API, pages still load, but featured posts, reviews, and news will be empty.

## Getting started

```bash
git clone https://github.com/peterrbarros17/pion-review.git
cd pion-review
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/            # Routes: home, reviews, news, popular, search results
  components/     # Layout, header, footer, cards, search
  lib/            # API fetch helpers
  types/          # Shared TypeScript types
  logger.ts       # Winston logger
```

Main routes:

| Path | Description |
| --- | --- |
| `/` | Latest review, recent grid, and news |
| `/reviews` | Review listing |
| `/reviews/[slug]` | Review detail |
| `/homepage/[slug]` | Featured post detail |
| `/news` | News |
| `/popular` | Popular games (placeholder) |
| `/results` | Search results |

## API

Fetch helpers live in `src/lib/getPosts.ts` and currently point to:

```
https://pion-api.vercel.app
```

Endpoints used by this app:

- `GET /homepage`
- `GET /newspage`
- `GET /reviewspage`
- `GET /search?title=`
- `GET /{page}?slug=`

To use a local API, update the base URL in `src/lib/getPosts.ts`.

## Deployment

The frontend is set up for [Vercel](https://vercel.com/). The production build fetches the API at build/runtime, so the API should be reachable when you deploy.

## License

Private project — created for learning and portfolio use.
