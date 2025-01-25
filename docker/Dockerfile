FROM node:18-alpine

WORKDIR /app

# Kopírování package.json a package-lock.json
COPY package*.json ./

# Instalace závislostí
RUN npm install

# Kopírování zbytku projektu
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
