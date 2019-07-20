# Prisma / Reeviewr

Special thanks goes to Atomic Object for open sourcing a starter kit that was preferable to my own.

# Set Up

- Use a Linux machine. This will assure compatability.
- Pull the repo https://github.com/alexthegoodman/reeviewr-prisma
- Swtch to branch `feature/prisma`
- Install all prerequesites. Including Node, Yarn, and Docker.
- Install dependencies by running `yarn`.
- `npm install -g prisma`
- `sudo apt install docker-compose`
- `sudo docker-compose up -d`
- `yarn prisma:deploy:local`
- Connect to the Docker MySQL database with
  Host: 127.0.0.1
  User: root
  Pass: prisma
  Make sure to connect to the `default@default` database / schema
- Download the seed data from https://drive.google.com/open?id=1NZhm8HYch_1Jy1Q6eV_YGBAEGWCIgRAm
- Import the .sql file into the `default@default` database
- Visit `http://localhost:443/` to verify that the Prisma / GraphQL Playground is functioning
- Duplicate `.env.example` as `.env`
- install audiowaveform on your machine
- Run `yarn dev`
- Wait for all the bundles to finshing bundling
- Open `localhost:3000` in your browser

You wll be doing most work in /modules/client/, /modules/server/, and /cypress/.

SSR will not function with `yarn dev` because webpack-dev-server is serving on port `3000`.
TO test SSR functions, run `yarn build:production` and check port `3001`.

## Commands

To ease creation of components, take advantage of these commands

- `yarn gen:ui ComponentName`
- `yarn gen:page PageName`
- `yarn gen:data DataComponentName`
- `yarn storybook` to browse all /ui/ components
- `yarn test` to run Jest and Cypress tests

## TODO

- Write Cypress tests
- Put components in categorical sub folders

## Technology Used

- Prisma
- Hooks
- Apollo
- Context
- Passport
- Navi
- Heroku to see Client
- DigitalOcean to serve GraphQL API

### Notes

- Cannot upgrade past Prisma 1.23 unless you can overcome its big database schema change (Data Export feature in Prisma may allow mitigation)
- If needed, you can refresh everything including the database by removing the containers, images, and volumes
- https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
- execute mysql commands in docker container: https://gist.github.com/geraldvillorente/4c60e7fdb5562f443f16ad2bbe4235ce
- mysql commands: http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm
