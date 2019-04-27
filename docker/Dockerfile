# FROM node:10-alpine

# RUN apk update && apk add git supervisor && rm -rf /var/run/apk/*

# ADD package.json /usr/src/app/
# ADD yarn.lock /usr/src/app/

# RUN mkdir -p /usr/src/app
# RUN chown -R node: /usr/src/app

# USER node
# WORKDIR /usr/src/app/

# RUN yarn install

# ADD . /usr/src/app/

# RUN NODE_ENV=production yarn build

# USER root

# https://github.com/dpetrick/prisma-heroku
# https://github.com/Radu-Raicea/Dockerized-Flask/wiki/%5BDocker%5D-Remove-all-Docker-volumes-to-delete-the-database
ARG tag
FROM prismagraphql/prisma:$tag
# COPY ./bash/prerun_hook.sh /app/prerun_hook.sh
CMD /app/start.sh


# brew install cmake
# brew install libsoundio
# brew install libebur128
# brew install chromaprint
# brew install ffmpeg @ 3.4
#
#
#
#
