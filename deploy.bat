@echo off
title ����

call npm run build
cd docs

git init
git add -A
git commit -m ����
git remote add origin git@github.com:jiangjiali/www.git
git push -u --force origin master:gh-pages

pause