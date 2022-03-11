let fs = require('fs');
let koa = require('koa');
let url = require('url');

let app = new koa();
var result;











//fs.readFile('./index.html', 'utf-8', function(err, data) {
//    console.log(data);
//})




app.use(async(ctx, next) => {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            console.log(data);
            ctx.response.type = 'text/html';
            ctx.response.body = data;

        }
    })

})


app.listen(3000);