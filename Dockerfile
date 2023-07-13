FROM node:20-alpine

RUN chown -R $USER:$USER /home/$USER/Desktop/Dev/bookshelf-rpcclient

WORKDIR /home/$USER/Desktop/Dev/bookshelf-rpcclient

COPY package*.json ./

COPY tsconfig.json

USER ridhogapx

RUN npm install 

COPY --chown=$USER:$USER . .

RUN npx tsc

EXPOSE 8080

CMD ["node", "./dist/src/index.js"]