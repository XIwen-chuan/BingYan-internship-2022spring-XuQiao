let fs = require('fs');
let koa = require('koa');
let url = require('url');

let app = new koa();
var result;




fs.readFile('./index.html', 'utf-8', function(err, data) {
    if (err) { console.log(err) } else {
        console.log(data);
        result = data;
    }
})






//fs.readFile('./index.html', 'utf-8', function(err, data) {
//    console.log(data);
//})




app.use(async(ctx, next) => {

    await next();
    if (ctx.path == '/') {
        await fs.readFile('./index.html', 'utf-8', function(err, data) {
            console.log(data);
            ctx.body = data;
            ctx.type = 'text/html';
        })
    } else {}
    await fs.readFile(path, 'utf-8', function(err, data) {
        console.log(data);
        ctx.body = data;
        if (ctx.request.path.slice(-3) === 'css') {
            ctx.type = 'text/css';
        } else if (ctx.request.path.slice(-3) === '.js') {
            ctx.type = 'application/javascript';
        }
    })

})


app.listen(3000);