FROM node:10

# Create app directory
WORKDIR /usr/src/app


# Bundle app source
COPY . .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Since we are building for production
RUN npm ci --only=production

# Build the project
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
