# Prisma / Reeviewr

Special thanks goes to Atomic Object for open sourcing a starter kit that was preferable to my own.

The project has since evolved into Prisma centric.

# Set Up

- Use a Linux machine. This will assure compatability.
- Pull the repo https://github.com/alexthegoodman/reeviewr-prisma
- Swtch to branch `dev`
- Install all prerequesites. Including Node and Yarn.
- Install dependencies by running `yarn`.
- `npm install -g prisma2@latest`
- Ask Alex how to load the seed data
- Duplicate `.env.example` as `.env`
- install audiowaveform on your machine
- Run `yarn dev`
- Wait for all the bundles to finshing bundling
- Visit `http://localhost:4000/` to verify that the Prisma / GraphQL Playground is functioning
- Open `localhost:3000` in your browser to verify the web app is functioning

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

- Utilizing Prisma 2 on Postgres database
