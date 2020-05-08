## Prisma Notes

#### Generate Prisma Client (and Types?):

Which location is better / worse for Heroku? Type checking?

- `@prisma/client`
- `../../__generated__/prisma-client`

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
