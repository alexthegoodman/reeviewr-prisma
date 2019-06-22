# Prisma / Reeviewr

Special thanks goes to Atomic Object for open sourcing a starter kit that was preferable to my own.

## Technology Used

- Prisma
- Hooks
- Apollo
- Context
- Passport
- Heroku to see Client
- DigitalOcean to serve GraphQL API

### ToDo

- Make Open Source starting with Open Beta
- Jest tests
- Cypress tests
- CI Integration

### Notes

- Must access Prisma Cloud to deploy new Prisma schemas (or use the `prisma:deploy:prod` command and check in Cloud to verify)
- Cannot upgrade past Prisma 1.23 unless you can overcome its big database schema change (Data Export feature in Prisma may allow mitigation)
- If needed, you can refresh everything including the database by removing the containers, images, and volumes
- https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
- execute mysql commands in docker container: https://gist.github.com/geraldvillorente/4c60e7fdb5562f443f16ad2bbe4235ce
- mysql commands: http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm
- Use Prisma Cloud to browse the data - it is hooked up even though this is hosted at Digital Ocean
- use admin@reeviewr-prisma.com simply for SSL verification
- now available at https://reeviewr-prisma.com/default/default
