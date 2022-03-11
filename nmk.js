const Koa = require('koa');
const dbfile = require('/dal/index.js');

dbfile;
const app = new Koa();

app.use((ctx) => {
  ctx.body = 'Welcome to the koa new sh';
});

app.listen(3000);

console.log('app running on 3000');
