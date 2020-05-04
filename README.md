# Reeviewr v2 Beta

<p>
<a href="https://app.circleci.com/pipelines/github/alexthegoodman/reeviewr-prisma">
<img alt="Maintained?: Yes" src="https://circleci.com/gh/alexthegoodman/reeviewr-prisma.svg?style=svg" target="_blank" />
</a>
<a href="https://github.com/alexthegoodman/reeviewr-prisma/graphs/commit-activity">
<img alt="Maintained?: Yes" src="https://img.shields.io/badge/Maintained%3F-Yes-success.svg" target="_blank" />
</a>
<a href="https://github.com/alexthegoodman/reeviewr-prisma/blob/master/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
</a>
<a href="https://twitter.com/reeviewr">
<img alt="Twitter: Reeviewr" src="https://img.shields.io/twitter/follow/Reeviewr.svg?style=social" target="_blank" />
</a>
</p>

## Introduction

Prisma + React + TypeScript

### Getting Started

Use a Linux machine. This will assure compatability.

- Pull `https://github.com/alexthegoodman/reeviewr-prisma`
- Install Pre-Requisites
  - Node
  - Yarn
  - Postgres
- Install Dependencies
  - `yarn`
  - `yarn global add dotenv-cli`
  - `yarn global add @prisma/cli`
  - Install `audiowaveform` on your machine
- Project Configuration
  - Duplicate `.env.example` as `.env` and get the needed values from Alex
- Initial Data
  - Optional: See <a href="#using-prisma">Using Prisma</a> for more on migrations
  - `yarn prisma:apply` to update database according to latest migrations
  - `yarn generate:prisma` (create Prisma client)
  - `yarn generate:gql-types` (generate interfaces/types for use in `/modules/client/`)
  - `yarn db:seed` (use Prisma client to load database with test data)

### Relevant Directories

- `/modules/` Working Directory
- `/cypress/` UI Tests

## Run

### Development

```
Run `yarn dev`
Check `localhost:3000`
```

- Visit `http://localhost:3000/graphql` to verify that the Prisma / GraphiQL is functioning
- Open `http://localhost:3000/` in your browser to verify the web app is functioning

Notes: SSR will not function with `yarn dev` because webpack-dev-server is serving the client bundle to enable Hot Reloading.

### Production

```
Run `yarn build:production`
Run `yarn dev:server:nodemon`
Check `localhost:3001`
```

Notes: SSR should function here via the Express server

## Deploy

### Heroku

- Assure updated ENV vars
- Check Prisma generator binaryTargets
- Put binary needed from node_modules to /entry/ (`build:production` copies it to /dist/)
- Procfile
- Aptfile
- https://devcenter.heroku.com/articles/app-json-schema

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
- Hot Module Replacement

### Using Prisma

#### Prisma Commands:

- Run `yarn global add @prisma/cli`
- Delete `/migrations/` and run `yarn prisma:migrate` to re-create migrations
- Alter `schema.prisma` and run `yarn prisma:migrate` to add a new migration
- Run `yarn prisma:apply` to update database according to latest migrations
- Health Check `nexus dev` should work?
- GraphQL roles / permissions: https://github.com/lvauvillier/nexus-plugin-shield
- JWT on queries: https://github.com/Camji55/nexus-plugin-jwt-auth
- Docgen `styleguide.config.js`

#### Generate Prisma Client (and Types?):

Which location is better / worse for Heroku? Type checking?

- `@prisma/client`
- `../../**generated**/prisma-client`

#### Connect Prisma to Nexus:

Seems to install multiple nexus / prisma modules in one? (setup with use())

- `nexus-plugin-prisma`

#### Build Schema:

Must determine `nexus` vs `@nexus/schema` for creating Queries, Mutations, etc

- `nexus` - Get the `schema` object
- `@nexus/schema` - Get the `makeSchema` function

#### Deprecated:

- `@prisma/nexus` - 10 months old (deprecated)
- `nexus-prisma` - Get the `nexusPrismaPlugin` function (replaced by nexus-plugin-prisma?)

### Further Notes

- Special thanks goes to Atomic Object for starter kit
- Is `graphql-code-generator` needed for types?
