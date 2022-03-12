let fs = require('fs');
let koa = require('koa');
let url = require('url');

let app = new koa();
let indexCopyResult
let indexResult;
let indexReBangQianDuanResult;
let indexReBangHouDuanResult;
let indexCSSResult;
let indexJSResult;
let feiDianResult;
let feiDianCSSResult;
let feiDianJSResult;
let myHomeResult;
let myHomeCSSResult;
let myHomeJSResult;
let picResult;

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

    fs.readFile('./pages/feiDian.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            feiDianResult = data;
        }
    })

    fs.readFile('./pages/myHome.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            myHomeResult = data;
        }
    })
}

function rdCSSData() {
    fs.readFile('./css/index.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            indexCSSResult = data;
        }
    })

    fs.readFile('./css/feiDian.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            feiDianCSSResult = data;
        }
    })

    fs.readFile('./css/myHome.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            myHomeCSSResult = data;
        }
    })
}

function rdJSData() {
    fs.readFile('./js/index.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            indexJSResult = data;
        }
    })

    fs.readFile('./js/feiDian.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            feiDianJSResult = data;
        }
    })

    fs.readFile('./js/myHome.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            myHomeJSResult = data;
        }
    })
}

function rdIMGData() {
    fs.readFile('./images/pic01.jpg', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            picResult = data;
        }
    })
}

rdHTMLData();
rdCSSData();
rdJSData();
rdIMGData();


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
        ctx.body = indexCSSResult;
    } else if (ctx.request.path == '/js/index.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = indexJSResult;
    } else if (ctx.request.path == '/pages/index-copy') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = indexCopyResult;
    } else if (ctx.request.path == '/pages/feiDian') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = feiDianResult;
    } else if (ctx.request.path == '/css/feiDian.css') {
        ctx.response.type = 'text/css; charset=utf-8';
        ctx.body = feiDianCSSResult;
    } else if (ctx.request.path == '/js/feiDian.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = feiDianJSResult;
    } else if (ctx.request.path == '/pages/myHome') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = myHomeResult;
    } else if (ctx.request.path == '/css/myHome.css') {
        ctx.response.type = 'text/css; charset=utf-8';
        ctx.body = myHomeCSSResult;
    } else if (ctx.request.path == '/js/myHome.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = myHomeJSResult;
    } else if (ctx.request.path == '/images/pic01.jpg') {
        ctx.body = picResult;
    }
    await next();
})


app.listen(3000);