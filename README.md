# Reeviewr v2 Beta

[![alexthegoodman](https://circleci.com/gh/alexthegoodman/reeviewr-prisma.svg?style=svg)](https://app.circleci.com/pipelines/github/alexthegoodman/reeviewr-prisma)

## Introduction

Prisma + React + TypeScript

### Getting Started

Use a Linux machine. This will assure compatability.

- Pull `https://github.com/alexthegoodman/reeviewr-prisma`
- Install Pre-Requisites
  - Node
  - Yarn
- Install Dependencies
  - `yarn`
  - `yarn global add dotenv-cli`
  - `yarn global add @prisma/cli`
  - Install `audiowaveform` on your machine
- Project Configuration
  - Duplicate `.env.example` as `.env` and get the needed values from Alex
- Initial Data
  - `yarn prisma:apply` (may need to run manually without `dotenv`)
  - `yarn build:graphql`
  - `yarn db:seed`

### Relevant Directories

- /modules/ Working Directory
- /cypress/ UI Tests

## Run

### Development

```
Run `yarn dev`
Check `localhost:3000`
```

- Visit `http://localhost:3000/graphql` to verify that the Prisma / GraphiQL is functioning
- Open `http://localhost:3000/` in your browser to verify the web app is functioning

Notes: SSR will not function with `yarn dev` because webpack-dev-server is serving on port `3000`.

Health Check `nexus dev` should work?

### Production

```
Run `yarn build:production`
Run `yarn dev:server:nodemon`
Check `localhost:3001`
```

Notes: To test SSR functions, run `yarn build:production` and `yarn dev:server:nodemon` and check port `3001`.

## Deploy

### Heroku

- Assure updated ENV vars
- Check Prisma generator binaryTargets
- Put binary needed from node_modules to /entry/ (`build:production` copies it to /dist/)

## Contributing

### Technology Used

- Prisma
- Hooks
- Apollo
- Context
- Passport
- Navi
- Heroku

### Terminal Commands

To ease creation of components, take advantage of these commands

- `yarn gen:ui ComponentName`
- `yarn gen:page PageName`
- `yarn gen:data DataComponentName`
- `yarn storybook` to browse all /ui/ components
- `yarn test` to run Jest and Cypress tests

### TODO

- Write Cypress tests
- Put components in categorical sub folders
- graphql-codegen
- Limit incoming/outgoing calls/queries per minute on average

### Notes

- Utilizing Prisma 2 on Postgres database
- https://alligator.io/nodejs/take-command-with-env-cmd/
- Special thanks goes to Atomic Object for starter kit
- graphql-code-generator needed for types?

Nexus/Prisma:

How to simplify?

- `@prisma/cli` - Global add for `prisma` and `prisma2` terminal commands
- `nexus-prisma` - Get the `nexusPrismaPlugin` function (replaced by nexus-plugin-prisma?)
- `nexus` - Get the `schema` object
- `@nexus/schema` - Get the `makeSchema` function
- `@prisma/nexus` - 10 months old
- `nexus-plugin-prisma` - Highly volatile, Learn More https://github.com/graphql-nexus/nexus-plugin-prisma (Seems to install multiple nexus/prisma modules in one?)
- `@prisma/client` - Better / worse for Heroku?
- `../../**generated**/prisma-client` - Better / worse for Heroku?
