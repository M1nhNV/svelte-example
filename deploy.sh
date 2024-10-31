cd /var/wwww/html/svelte

git checkout .
git checkout main
git pull origin main

yarn install
yarn build

npx prisma db push

pm2 restart svelte
