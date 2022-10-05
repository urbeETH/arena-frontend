FROM node:lts as dependencies
WORKDIR /arena-frontend
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /arena-frontend
COPY . .
COPY --from=dependencies /arena-frontend/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /arena-frontend
ENV NODE_ENV production
COPY --from=builder /arena-frontend/next.config.js ./
COPY --from=builder /arena-frontend/public ./public
COPY --from=builder /arena-frontend/.next ./.next
COPY --from=builder /arena-frontend/node_modules ./node_modules
COPY --from=builder /arena-frontend/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]