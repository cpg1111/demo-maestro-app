#!/bin/bash

if [ "$1" == "test" ]; then
    # rspec . && \
    # cd public/js/ && \
    # gulp test
    exit 0
else
    cd /srv/www/
    npm install --prefix=public/js/
    cd public/js/ && \
    gulp all
    cd /srv/www/
    bundle install
    ruby app.rb -p 3000
fi
