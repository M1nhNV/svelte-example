cd /var/wwww/html/svelte

git checkout .
git checkout main
git pull origin main

yarn install
yarn build

pm2 restart svelte
