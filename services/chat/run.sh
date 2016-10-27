#!/bin/bash

if [ "$1" == "run" ]; then
    python ./chat.py
elif [ "$1" == "test" ]; then
    python ./chat_test.py
fi
