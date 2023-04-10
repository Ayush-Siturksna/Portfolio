# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Set environment variables
ENV NODE_ENV=development

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
