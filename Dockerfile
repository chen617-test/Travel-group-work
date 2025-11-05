FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies (include dev deps to run prisma generate)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

# Generate Prisma client before build (requires dev dep prisma)
RUN npx prisma generate

# Build Next frontend (produces .next)
RUN npm run build

# Optionally prune dev dependencies to slim image
RUN npm prune --omit=dev

EXPOSE 3000

# Start using the package.json start script
CMD ["npm", "start"]
