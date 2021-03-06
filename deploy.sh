#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
# echo 'www.jiangjiali.com' > CNAME

git init
git add -A
git commit -m '部署'
git remote add origin git@github.com:jiangjiali/www.git
git push -u --force origin gh-pages

cd -