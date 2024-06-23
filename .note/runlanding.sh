#!/bin/bash
set -e

echo "Going to the root directory of the repository..."
cd /home/ubuntu/EzyCourse_landing

echo "Pulling the latest changes from the Git repository..."
git pull

echo "Installing the dependencies..."
npm install --force

# echo "Copying the environment variables..."
# cp .env.prod .env
export NEXT_PUBLIC_NODE_ENV=production

echo "Building the application..."
npm run build

LANDING_BUILD_DIR=/home/ubuntu/landingbuild

echo "Creating the build folder..."
mkdir -p $LANDING_BUILD_DIR

echo "Synchronizing the build folder with the destination folder..."
rsync -a .next/ $LANDING_BUILD_DIR/.next/

echo "Synchronizing the public folder with the destination folder..."
rsync -a public/ $LANDING_BUILD_DIR/public/

echo "Synchronizing the node_moduels to build"
rsync -a node_modules $LANDING_BUILD_DIR/

echo "Copying the package.json to build"
cp package.json next.config.js $LANDING_BUILD_DIR/

echo "Synchronizing the public folder to build"
rsync -a public $LANDING_BUILD_DIR/public

echo "Reloading the PM2 application..."
pm2 reload landing --update-env

echo "Done!"

echo "Going back to the home directory..."
cd ~
