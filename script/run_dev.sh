set -e
docker-compose up -d
echo
./bin/webpack --bail
echo
bundle exec rails s
