FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Build Next frontend (produces .next)
RUN npm run build

EXPOSE 3000

# Start using the package.json start script
CMD ["npm", "start"]
