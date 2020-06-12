set -e
docker-compose up -d
echo
bundle exec rake db:create db:setup
