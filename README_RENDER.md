# Deploying the backend (Socket.IO + Prisma) to Render

This guide covers deploying the Node server (the `server.ts` custom server that runs Next + Socket.IO) to Render as a standalone service. The repository already includes a `Dockerfile`, `Procfile`, and helper script `scripts/init_repo.sh`.

Summary
- Frontend (Next) can be deployed to Vercel.
- Backend (Socket.IO + Prisma) should run as an always-on Node service on Render (or Railway/Fly), using `npm start` to launch `server.ts` in production.

Render steps (recommended)

1. Push the repo to GitHub (use `scripts/init_repo.sh` or create manually).

2. Create a new Web Service on Render
   - In Render dashboard -> New -> Web Service -> Connect GitHub repo
   - Branch: main
   - Root: (leave as repo root)
   - Build Command: npm install && npm run build
   - Start Command: npm start

3. Environment variables
   - Add `DATABASE_URL` (use managed Postgres instead of SQLite for production)
   - Add any auth secrets: `NEXTAUTH_SECRET`, OAuth keys, etc.

4. Database
   - Create a managed Postgres on Render and use its connection string as `DATABASE_URL`.
   - Run migrations locally then deploy, or configure Render to run migrations during deploy:
     - Locally:
       ```bash
       npm run db:generate
       npm run db:migrate
       ```
     - CI/Deploy: run `prisma migrate deploy` or `npm run db:push` depending on flow.

5. Socket path and CORS
   - The server exposes Socket.IO at `/api/socketio` (see `server.ts`).
   - Ensure your frontend uses the backend URL and path, e.g. `io('https://your-backend.onrender.com', { path: '/api/socketio' })`.

6. Verify
   - Visit `https://your-backend.onrender.com/api/health` — should return `{ message: "Good!" }`.
   - Test socket connection from browser console or small script.

Notes
- SQLite is not recommended for production on ephemeral file systems. Use Postgres or a managed DB.
- The `Dockerfile` builds the Next app (`npm run build`) then runs `npm start` which uses `tsx server.ts` as configured in `package.json`.

If you want, I can generate a render.yml (for Render's spec) or a GitHub Actions workflow to automatically deploy the backend on push to `main`.
