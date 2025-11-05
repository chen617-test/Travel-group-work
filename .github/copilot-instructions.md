## Quick orientation

This repository is a Next.js 15 + TypeScript app scaffold with a custom Node server (`server.ts`) that integrates Socket.IO and serves the Next app. Key runtime pieces are in `src/lib/*` and UI components live under `src/components` (shadcn/ui-style).

Keep these files in mind when making changes:
- `server.ts` — custom server + Socket.IO setup (entry for both dev and prod)
- `next.config.ts` — HMR and build-time rules (HMR disabled; nodemon used in dev)
- `package.json` — scripts for dev, build, start and Prisma (db:migrate, db:generate, etc.)
- `src/lib/db.ts` — Prisma client singleton pattern (global reuse in dev)
- `src/lib/socket.ts` — Socket.IO handlers and message patterns
- `src/app/api/health/route.ts` — example App Router API route

## Big-picture architecture

- Next.js App Router provides pages and API routes under `src/app/`.
- A custom HTTP server in `server.ts` creates a combined Next.js + Socket.IO server. Socket.IO mounts at path `/api/socketio`.
- Prisma (SQLite by default) is used for persistence. The client is exported from `src/lib/db.ts` and intentionally reused via `globalThis` during development to avoid multiple connections.

Why this structure?
- Using a custom server allows Socket.IO to coexist with Next routes and gives more control over HTTP handling (see `server.ts`).
- HMR for Next is intentionally disabled in `next.config.ts` — nodemon + `tsx` restart strategy is used for full-server restarts during development (see `npm run dev`).

## Developer workflows (specific commands)

- Install: `npm install`
- Dev (full server + watch): `npm run dev` — this runs `nodemon --exec "npx tsx server.ts"` and writes `dev.log`.
- Build frontend: `npm run build` (calls `next build`).
- Start production: `npm start` — runs `NODE_ENV=production tsx server.ts` and writes `server.log`.
- Prisma:
  - `npm run db:generate` -> `prisma generate`
  - `npm run db:migrate` -> `prisma migrate dev`
  - `npm run db:push` -> `prisma db push`

Notes: `next.config.ts` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` — builds may succeed even when lints/TS errors exist.

## Project-specific conventions & patterns

- Socket.IO path: `/api/socketio` — update both `server.ts` and any client code using `socket.io-client` if you change it.
- DB client singleton: `src/lib/db.ts` uses `globalThis` to store the PrismaClient in dev. Do not create new PrismaClient instances per request.
- API routes: prefer App Router handlers under `src/app/api/...` (see `health/route.ts`).
- UI: components follow a shadcn-style structure under `src/components` and `src/components/ui` — prefer small, composable components.
- Logs: dev logs are saved to `dev.log`, production server logs to `server.log` (see scripts).

## Integration points & external deps

- Socket.IO (server: `socket.io`, client: `socket.io-client`) — see `src/lib/socket.ts`.
- Prisma + `@prisma/client` — configured for SQLite via `prisma/schema.prisma` (uses `DATABASE_URL` env var).
- NextAuth/next-intl/sonner/zod/React Query/Zustand — common libs used across code; check `package.json` for exact versions.

## Common changes and examples

- Adding a server-side feature that uses sockets: update `src/lib/socket.ts` and ensure `server.ts` continues to call `setupSocket(io)`.
- Adding a DB model: edit `prisma/schema.prisma`, then run `npm run db:migrate` (or `db:push` for prototyping) and `npm run db:generate`.
- Adding an API endpoint: place route in `src/app/api/<name>/route.ts` following the App Router signature (see `health/route.ts`).

## Quick tips for AI agents

- When modifying server behavior, inspect `server.ts` first — it is the runtime entry point.
- Prefer editing `src/lib/*` for shared utilities (db/socket) and `src/components/*` for UI.
- Respect the socket path and Prisma singleton pattern to avoid runtime issues.
- Tests are not present in the scaffold — focus on small, self-contained changes and local validation (start server, hit `/api/health`, and test socket connection).

If anything here is unclear or you'd like more detail about a specific area (auth, i18n, or component patterns), tell me which part and I will expand or adjust this file. 
