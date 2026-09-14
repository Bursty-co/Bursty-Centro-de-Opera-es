FROM node:20-alpine

WORKDIR /app

# Copia os arquivos do projeto (index.html, boost.html, server.js, package.json)
COPY . .

# O Railway injeta a porta em PORT; o server.js já a utiliza.
CMD ["node", "server.js"]
