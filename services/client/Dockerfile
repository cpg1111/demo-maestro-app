FROM debian:jessie

ENV RUBY_MAJOR 2.3 \
    RUBY_VERSION 2.3.1 \
    RUBY_DOWNLOAD_SHA256 b87c738cb2032bf4920fef8e3864dc5cf8eae9d89d8d523ce0236945c5797dcd \
    RUBYGEMS_VERSION 2.6.7 \
    BUNDLER_VERSION 1.13.5 \
    GEM_HOME /usr/local/bundle \
    BUNDLE_PATH="$GEM_HOME" \
    BUNDLE_BIN="$GEM_HOME/bin" \
    BUNDLE_SILENCE_ROOT_WARNING=1 \
    BUNDLE_APP_CONFIG="$GEM_HOME" \
    NPM_CONFIG_LOGLEVEL info \
    NODE_VERSION 6.9.1 \
    PATH $BUNDLE_BIN:$PATH

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        bzip2 \
        ca-certificates \
        libffi-dev \
        libgdbm3 \
        libssl-dev \
        libyaml-dev \
        procps \
        zlib1g-dev && \
    rm -rf /var/lib/apt/lists/* && \
    mkdir -p /usr/local/etc && \
    { \
        echo 'install: --no-document'; \
        echo 'update: --no-document'; \
    } >> /usr/local/etc/gemrc && \
    buildDeps=' \
        autoconf \
        bison \
        gcc \
        libbz2-dev \
        libgdbm-dev \
        libglib2.0-dev \
        libncurses-dev \
        libreadline-dev \
        libxml2-dev \
        libxslt-dev \
        make \
        ruby \
        wget ' && \
    apt-get update && \
    apt-get install -y --no-install-recommends $buildDeps && \
    rm -rf /var/lib/apt/lists/* && \
    wget -O ruby.tar.gz "https://cache.ruby-lang.org/pub/ruby/$RUBY_MAJOR/ruby-$RUBY_VERSION.tar.gz" && \
    echo "$RUBY_DOWNLOAD_SHA256 *rugy.tar.gz" | sha256sum -c - && \
    mkdir -p /usr/src/ruby && \
    tar xzvf ruby.tar.gz -C /usr/src/ruby --strip-components=1 && \
    rm ruby.tar.gz && \
    cd /usr/src/ruby && \
    { \
        echo '#define ENABLE_PATH_CHECK 0'; \
        echo; \
        cat file.c; \
    } > file.c.new && \
    mv file.c.new file.c && \
    autoconf && \
    ./configure --disable-install-doc && \
    make -j"$(nproc)" && \
    make install && \
    apt-get purge -y $buildDeps && \
    cd / && \
    rm -r /usr/src/ruby && \
    gem update --system "$RUBYGEM_VERSION" && \
    gem install bundler --version "$BUNDLER_VERSION" && \
    mkdir -p "$GEM_HOME" "$BUNDLE_BIN" && \
    chmod 777 "$GEM_HOME" "$BUNDLE_BIN" && \
    for key in \
        9554F04D7259F04124DE6B476D5A82AC7E37093B \
        94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
        0034A06D9D9B0064CE8ADF6BF1747F4AD2306D93 \
        FD3A5288F042B6850C66B31F09FE44734EB7990E \
        71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
        DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
        B9AE9905FFD7803F25714661B63B535A4C206CA9 \
        C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
    ; do \
        gpg --keyserver ha.pool.sks-keyservers.net --recv-keys "$key"; \
    done && \
    buildDeps='xz-utils curl' && \
    apt-get update && \
    apt-get install -y $buildDeps --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* && \
    curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" && \
    curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" && \
    gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc && \
    grep " node-v$NODE_VERSION-linux-x64.tar.xz\$" SHASUMS256.txt | sha256sum -c - && \
    tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 && \
    rm "node-v$NODE_VERSION-linux-x64.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt && \
    apt-get purge -y --auto-remove $buildDeps && \
    ln -s /usr/local/bin/node /usr/local/bin/nodejs && \
    npm install -g npm gulp

COPY . /srv/www/

ENTRYPOINT ["run.sh"]

