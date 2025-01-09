FROM node:20.18-alpine3.19
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json /app/
RUN npm install

# Copy source code and build
COPY . /app
RUN npm run build

# Expose the port and specify the command
EXPOSE 3000
CMD ["npm", "run", "start"]
