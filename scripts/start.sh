#!/bin/bash
# compose                       = multi-container app
# -f (--file) [string array]    = Compose configuration files
# up                            = Create and start containers
# -d                            = Detached mode: Run containers in the background
docker compose -f docker/docker-compose.yml up -d
