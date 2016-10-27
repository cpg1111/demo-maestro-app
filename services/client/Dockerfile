FROM ruby:2.3.1-slim

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 6.9.1

RUN buildDeps='xz-utils curl' && \
    apt-get update && \
    apt-get install -y $buildDeps --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* && \
    curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" && \
    tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 && \
    apt-get purge -y --auto-remove $buildDeps && \
    ln -s /usr/local/bin/node /usr/local/bin/nodejs && \
    npm install -g npm gulp

COPY . /srv/www/

ENTRYPOINT ["/srv/www/run.sh"]
