# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile || pnpm i
COPY . .
RUN pnpm build

# Runtime
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
RUN npm i -g pnpm && pnpm i --prod --frozen-lockfile || true
EXPOSE 3000
CMD ["pnpm", "start"]
