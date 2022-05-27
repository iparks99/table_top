# Table Top DnD
Side project for my DnD group. This will be meant to be like a clone of astral table top.
Since astral is no longer being actively worked on, I wanted to make an open-source version for my friends.

Basic setup:
* Vue 3
* Phaser
* MongoDB
* NodeJS

## Dockerized Setup
After any changes, you need to rebuild the docker containers.
### Prerequisites
* [Docker](https://docs.docker.com/get-docker/)
* .env file

### Build Docker containers
In the top level directory:
```
docker-compose build
```

### Start Docker containers
```
docker-compose up -d
```

## Local Setup
A local setup might be ideal for testing and development, as you can hot reload.
### Prerequisites
* [MongoDB](https://www.mongodb.com/docs/manual/installation/) installed and running
* [NPM](https://docs.npmjs.com/cli/v7/configuring-npm/install) (preferably using [NVM](https://github.com/nvm-sh/nvm))
* .env file

### Install Packages
In the top level directory:
```
npm install
```

### Run API Server
```
npm run api
```

### Run GUI Server
```
npm run serve
```