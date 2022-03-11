let fs = require('fs');
let koa = require('koa');
let url = require('url');

let app = new koa();
var result;


function rdfileData(path) {
    if (path == '/') {
        fs.readFileSync('./index.html', 'utf-8', function(err, data) {
            if (err) { console.log(err) } else {
                console.log(data);
                result = data;
            }
        })
    } else {
        fs.readFileSync(path, 'utf-8', function(err, data) {
            if (err) { console.log(err) } else {
                console.log(data);
                result = data;
            }
        })
    }



}





//fs.readFile('./index.html', 'utf-8', function(err, data) {
//    console.log(data);
//})




app.use(async(ctx, next) => {

    await next();
    rdfileData(ctx.request.path);
    ctx.body = result;
    if (ctx.request.path.slice(-3) == 'tml' || ctx.request.path == '/ ') {
        ctx.response.type = 'text/html; charset=utf-8';
    } else if (ctx.request.path.slice(-3) === 'css') {
        ctx.response.type = 'text/css; charset=utf-8';
    } else if (ctx.request.path.slice(-3) === '.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
    }

})


app.listen(3000);