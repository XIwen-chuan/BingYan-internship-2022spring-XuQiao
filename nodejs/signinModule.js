let router = require('koa-router')();
let fs = require('fs')
const { rejects } = require('assert');
let Koa = require('koa');

let app = new Koa();

let cleanData;
let primaryData, afterData;
let username, password;

export function signinModule() {

    function readBody(request) {
        return new Promise((resolve, reject) => {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk)
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                resolve(body)
            })
        })
    }

    fs.readFile('./database/datacollection.json', 'utf-8', function(err, data) {
        if (err) console.log(err);
        else {
            try {
                data = JSON.parse(data);
                primaryData = data;
            } catch (exception) {
                primaryData = [];
            }
        }
    })

    app.use(async(ctx, next) => {
        console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
        await next();
    });

    router.post('/signin-process', async function(ctx, next) {
        readBody(ctx.request).then((dataString) => {
            cleanData = dataString.split('&');

            usernameArr = cleanData[0].split('=');
            username = usernameArr[1];

            passwordArr = cleanData[1].split('=');
            password = passwordArr[1];
            await next();
        })
    })


    app.use(router.routes());

    app.use(async function(ctx, next) {
        primaryData.push({
            "username": username,
            "password": password
        })
        afterData = JSON.stringify(primaryData);

        fs.writeFile('../database/datacollection.json', afterData)

    })

}