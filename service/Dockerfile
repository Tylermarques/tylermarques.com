FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build 

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build /app/build/
COPY --from=builder /app/node_modules /app/node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
