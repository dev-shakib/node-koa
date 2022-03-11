const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body')();

const router = new Router();
const server = new Koa();

router.get('/', (ctx) => {
  ctx.body = 'I am router body ctx';
});

router.get('/sec', (ctx) => {
  ctx.body = 'This is second router';
});

router.post('/something', (ctx) => {
  ctx.body = {
    something: 'New something here',
  };
});

server
  .use(router.routes())
  .use(logger('tiny'))

  .listen(3001);
