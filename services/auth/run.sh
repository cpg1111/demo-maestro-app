#!/bin/bash

if [ "$1" == "run" ]; then
    python ./auth.py
elif [ "$1" == "test" ]; then
    exit 0
fi
