#!/bin/bash

printf "site: %s" "$DEPLOY_PRIME_URL" > _config_netlify.yml
bundle exec jekyll build --drafts --config _config.yml,_config_netlify.yml