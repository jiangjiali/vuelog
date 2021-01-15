@echo off
title ²¿Êð

call npm run build
cd docs

git init
git add -A
git commit -m ²¿Êð
git remote add origin git@github.com:jiangjiali/www.git
git push -u --force origin master:gh-pages

pause