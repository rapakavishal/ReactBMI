FROM node:alpine

RUN mkdir -p /app/src

# Set work directory
WORKDIR /app/src

# Copy package json
COPY package.json ./
COPY package-lock.json ./

RUN npm install 

# Copy App [source to destination]
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]