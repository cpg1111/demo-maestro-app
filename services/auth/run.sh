#!/bin/bash

if [ "$1" == "run" ]; then
    python /opt/src/auth.py
elif [ "$1" == "test" ]; then
    exit 0
fi
