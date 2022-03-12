let fs = require('fs');
let koa = require('koa');
let url = require('url');

let app = new koa();
let indexResult;
let indexReBangQianDuanResult;
let indexReBangHouDuanResult;
let cssResult;
let jsResult;

function rdHTMLData() {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            indexResult = data;
        }
    })

    fs.readFile('./pages/index-reBang-qianDuan.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            indexReBangQianDuanResult = data;
        }
    })

    fs.readFile('./pages/index-reBang-houDuan.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            indexReBangHouDuanResult = data;
        }
    })

    fs.readFile('./pages/index-copy.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            indexCopyResult = data;
        }
    })
}

function rdCSSData() {
    fs.readFile('./css/index.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            cssResult = data;
        }
    })
}

function rdJSData() {
    fs.readFile('./js/index.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            jsResult = data;
        }
    })
}

rdHTMLData();
rdCSSData();
rdJSData();



app.use(async(ctx, next) => {
    if (ctx.request.path == '/') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = indexResult;

    } else if (ctx.request.path == '/pages/index-reBang-qianDuan') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = indexReBangQianDuanResult;
    } else if (ctx.request.path == '/pages/index-reBang-houDuan') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = indexReBangHouDuanResult;
    } else if (ctx.request.path == '/css/index.css') {
        ctx.response.type = 'text/css; charset=utf-8';
        ctx.body = cssResult;
    } else if (ctx.request.path == '/js/index.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = jsResult;
    } else if (ctx.request.path == '/pages/index-copy') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = indexCopyResult;
    }
    await next();
})


app.listen(3000);