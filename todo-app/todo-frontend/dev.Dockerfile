FROM node:20

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://localhost:8080/api

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]