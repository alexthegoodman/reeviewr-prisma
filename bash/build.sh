
#! /bin/bash

set -e

VERSION="${1:?Provide the Prisma version this script should use}"
APP="${2:?Provide the Heroku app name to deploy/release to}"

docker build --build-arg tag=${VERSION} -t registry.heroku.com/${APP}/web ./docker/
docker push registry.heroku.com/${APP}/web

echo "Image pushed successfully. Release with heroku container:release web -a ${APP}"