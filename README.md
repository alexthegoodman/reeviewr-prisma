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

This web app has been open sourced so that it may evolve and inspire other developers and creatives.

Featuring Packages: `TypeScript, Node, Postgres, Passport, Mandrill, Prisma, Nexus, React, Apollo, Blueprint, Storybook, Jest, Cypress, Formik, Lodash, Moment, Navi, Superagent, Webpack`

Monitoring: `Mixpanel, Sentry, FullStory, Tag Manager, Rollbar (Bugsnag? Timber?)`

Recommended: `.vscode/extensions.json`

Special thanks goes to Atomic Object for the original starter kit.

### Getting Started

Use a Linux machine. This will assure compatability.

- Pull `https://github.com/alexthegoodman/reeviewr-prisma`
- Install Pre-Requisites
  - Node <a href="#using-nvm">Using nvm</a>
  - Yarn <a href="#managing-packages">Managing packages</a>
  - Postgres <a href="#managing-databases">Managing databases</a>
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

- Install Heroku for Terminal
- Assure updated ENV vars
- Check Prisma generator binaryTargets
- Put binary needed from node_modules to /entry/ (`build:production` copies it to /dist/)
- Procfile
- Aptfile
- https://devcenter.heroku.com/articles/app-json-schema

## Contributing

### How To

- Use Git Flow (feature branches)

### Using Prisma

#### Install Prisma:

- Run `yarn global add @prisma/cli`

#### Prisma Commands:

- Delete `/migrations/` and run `yarn prisma:migrate` to re-create migrations
- Alter `schema.prisma` and run `yarn prisma:migrate` to add a new migration
- Run `yarn prisma:apply` to update database according to latest migrations

Learn more about Prisma at <a href="/PRISMA.md">PRISMA.md</a>

### More Info

#### Terminal Commands

To ease creation of components, take advantage of these commands

- `yarn gen:ui ComponentName`
- `yarn gen:page PageName`
- `yarn gen:data DataComponentName`
- `yarn storybook` to browse all /ui/ components
- `yarn test` to run Jest and Cypress tests

#### Managing Packages

- Delete `yarn.lock`
- Run `yarn upgrade`
- Run `npm-upgrade`
- Run `ncu`
- Freeze `package.json` by removing all carets (^)
- Re-install modules by running `yarn`

#### Managing Databases

- Run `brew cask install pgadmin4`

#### Using nvm

- Run `nvm install node`
- Run `nvm alias default node`
- Restart Terminal
- Run`node -v`

### Technology Used

#### Prisma

See <a href="#using-prisma">Using Prisma</a>

#### Custom Hooks

See `modules/client/hooks/`

#### Apollo

See `modules/client/services/ApolloClient.ts`

#### Context

See `modules/client/context/`

#### Navi

See `modules/client/routes/`

#### Passport

See `modules/server/`

### TODO

#### Priority

- `TODO` comments in code
- Write Cypress tests
- Limit incoming/outgoing calls/queries per minute on average
- Split up Prisma schema
- Dev Depenendencies
- Suspense in Navi with SSR and HMR
- https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/
- Docgen `styleguide.config.js`
- GraphQL roles / permissions: https://github.com/lvauvillier/nexus-plugin-shield
- JWT on queries: https://github.com/Camji55/nexus-plugin-jwt-auth
