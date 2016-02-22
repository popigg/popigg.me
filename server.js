var koa     = require('koa');
var views   = require('co-views');
var serve   = require('koa-static');
var app     = koa();

if (process.env.NODE_ENV == 'development') {
  var render = views(__dirname + '/', { map: { html: 'swig' }});
} else {
  var render = views(__dirname + '/public', { map: { html: 'swig' }});
}

app.use(serve(__dirname + '/build'));

app.use(function *(){
    this.body = yield render('index');
});

app.listen(3000);
