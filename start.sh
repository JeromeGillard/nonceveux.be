#!/bin/bash
set -o allexport
source .env
source .env.local
set +o allexport
envsubst < docker-compose.swarm.yml > docker-compose.swarm.yml.local
docker stack deploy -c docker-compose.swarm.yml.local nonceveux
