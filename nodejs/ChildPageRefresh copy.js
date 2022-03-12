let fs = require('fs');
let koa = require('koa');
let url = require('url');

let app = new koa();
let pageResult;
let cssResult;

fs.readFile('./index.html', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
        pageResult = data;
    }
})

fs.readFile('./css/index.css', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
        cssResult = data;
    }
})


app.use(async(ctx, next) => {
    if (ctx.request.path == '/') {
        ctx.response.body = pageResult;
        ctx.response.type = 'text/html';
    } else {
        await next();
    }
})

app.use(async(ctx, next) => {
    if (ctx.request.path == '/css/index.css') {
        ctx.response.body = cssResult;
        ctx.response.type = 'text/css';
    }
})




app.listen(3000);