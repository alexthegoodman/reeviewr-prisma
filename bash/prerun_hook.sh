#! /bin/bash

set -e

printf "
port: ${PORT}
# managementApiSecret: ${MGMT_SECRET}
databases:
  default:
    connector: mysql
    host: ${DB_HOST}
    port: ${DB_PORT}
    database: ${DB_NAME}
    schema: public
    user: ${DB_USER}
    password: ${DB_PASSWORD}
    migrations: true
" >> ${PRISMA_CONFIG_PATH}