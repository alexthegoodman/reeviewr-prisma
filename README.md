# Reeviewr v2 Beta - Prisma + React + TypeScript

## Introduction

### Getting Started

- Use a Linux machine. This will assure compatability.
- Pull the repo https://github.com/alexthegoodman/reeviewr-prisma
- Install all prerequesites. Including Node and Yarn.
- Install dependencies by running `yarn`.
- Duplicate `.env.example` as `.env` and get the needed values from Alex
- `npm install -g dotenv-cli`
- `npm install -g prisma2@latest`
- `yarn prisma:apply`
- `yarn gen:gql`
- `yarn build:graphql`
- `yarn seed`
- install audiowaveform on your machine
- Run `yarn dev`
- `yarn gen:gql` (to generate client-side types)
- Wait for all the bundles to finshing bundling
- Visit `http://localhost:4000/` to verify that the Prisma / GraphQL Playground is functioning
- Open `localhost:3000` in your browser to verify the web app is functioning

### Relevant Directories

- /modules/ Working Directory
- /cypress/ UI Tests

## Run

### Development

```
Run `yarn dev`
Check `localhost:3000`
```

Notes: SSR will not function with `yarn dev` because webpack-dev-server is serving on port `3000`.

### Production

```
Run `yarn build:production`
Run `yarn dev:server:nodemon`
Check `localhost:3001`
```

Notes: To test SSR functions, run `yarn build:production` and `yarn dev:server:nodemon` and check port `3001`.

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

### Notes

- Utilizing Prisma 2 on Postgres database
- https://alligator.io/nodejs/take-command-with-env-cmd/
- https://gqless.dev/
- Special thanks goes to Atomic Object for starter kit
