FROM node:20-alpine3.17
#postavi radni direktprijum
WORKDIR /usr/src/app
#kopiraj u radni dir samo listove paketa za instalaciju
COPY package*.json ./
#instaliraj pakete
RUN npm install
#kopiraj sve u radni dir (orva tacka je trenutni dir i kopira se sve u drugu tacku koja je radni dir u kontjeneru)
COPY . .
RUN npm run build
CMD [ "npm", "run", "start:prod"]