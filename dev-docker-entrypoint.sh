#!/bin/sh

set -e

echo "ENVIRONMENT ${RAILS_ENV}"

bundle check || bundle update

rm -f /app/tmp/pids/server.pid

bundle exec "$@"