FROM node:18.12.1-alpine3.15

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir /app/.next
RUN chown -R node /app/.next

# Create user node
USER node

CMD [ "npm", "run", "dev" ]