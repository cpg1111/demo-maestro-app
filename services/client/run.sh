#!/bin/bash

if [ "$1" == "test" ]; then
    rspec . && \
    cd public/js/ && \
    gulp test
else
    ruby app.rb -p 3000
fi

