const Koa = require('koa');
const {MongoClient} = require("mongodb");

const client = new MongoClient('')

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'Welcome to the koa new sh';
});

app.listen(3000);

console.log('app running on 3000');
