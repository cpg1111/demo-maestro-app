#!/bin/bash

if [ "$1" == "run" ]; then
    python /opt/src/chat.py
elif [ "$1" == "test" ]; then
    exit 0
fi
