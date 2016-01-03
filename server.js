var koa     = require('koa');
var views   = require('co-views');
var app     = koa();

var render = views(__dirname + '/', { map: { html: 'swig' }});

app.use(function *(){
    this.body = yield render('index');
});

app.listen(3000);