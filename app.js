'use strict';

let path = require('path');

let koa = require('koa');
const app = koa();

let staticFiles = require('koa-static');
let router = require('koa-route');
let render = require('koa-ejs');
render(app, {
  root: path.join(__dirname, 'view'),
  //layout: false,
  viewExt: 'html',
  cache: false,
  debug: true
});


let home = require('./app/controller/home.js');

app.use(staticFiles('public'));

app.use(router.get('/', home.index));
app.use(router.get('/production', home.production));
app.use(router.get('/us', home.us));

app.listen(3000);

console.log('server is ready on port: 3000');
