#!/bin/bash
set -e

if [ ! -f .env ]
then
	env > .env
fi

# Run tests before up server
if [ ! $DEV ] 
then
    $(npm run test > /dev/null)
    exec node src/server.js;
else
    exec npm run dev;
fi

 