let fs = require('fs');
let koa = require('koa');
let bodyParser = require('koa-bodyparser');
let router = require('koa-router')();


let app = new koa();
let indexCopyResult
let indexResult;
let indexCSSResult;
let indexJSResult;
let indexReBangQianDuanResult;
let indexReBangHouDuanResult;

let feiDianResult;
let feiDianCSSResult;
let feiDianJSResult;

let myHomeResult;
let myHomeCSSResult;
let myHomeJSResult;

let picResult;

let refreshModuleJS;

let loginResult;
let loginCSSResult;
let loginJSResult;

let signinResult;
let signinCSSResult;
let signinJSResult;


let cleanData;
let primaryData, afterData;
let username, password;


function rdHTMLData() {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            indexResult = data;
        }
    })

    fs.readFile('./pages/index-reBang-qianDuan.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            indexReBangQianDuanResult = data;
        }
    })

    fs.readFile('./pages/index-reBang-houDuan.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            indexReBangHouDuanResult = data;
        }
    })

    fs.readFile('./pages/index-copy.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            indexCopyResult = data;
        }
    })

    fs.readFile('./pages/feiDian.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            feiDianResult = data;
        }
    })

    fs.readFile('./pages/myHome.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            myHomeResult = data;
        }
    })

    fs.readFile('./pages/login.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            loginResult = data;
        }
    })

    fs.readFile('./pages/signin.html', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            signinResult = data;
        }
    })
}

function rdCSSData() {
    fs.readFile('./css/index.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            indexCSSResult = data;
        }
    })

    fs.readFile('./css/feiDian.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            feiDianCSSResult = data;
        }
    })

    fs.readFile('./css/myHome.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            myHomeCSSResult = data;
        }
    })

    fs.readFile('./css/login.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            loginCSSResult = data;
        }
    })

    fs.readFile('./css/signin.css', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            signinCSSResult = data;
        }
    })
}

function rdJSData() {
    fs.readFile('./js/index.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            indexJSResult = data;
        }
    })

    fs.readFile('./js/feiDian.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            feiDianJSResult = data;
        }
    })

    fs.readFile('./js/myHome.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            myHomeJSResult = data;
        }
    })

    fs.readFile('./js/indexRefresh.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            refreshModuleJS = data;
        }
    })

    fs.readFile('./js/login.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            loginJSResult = data;
        }
    })

    fs.readFile('./js/signin.js', 'utf-8', function(err, data) {
        if (err) { console.log(err) } else {
            signinJSResult = data;
        }
    })
}

function rdIMGData() {
    fs.readFile('./images/pic01.jpg', function(err, data) {
        if (err) { console.log(err) } else {
            picResult = data;
        }
    })
}

/*
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
*/

rdHTMLData();
rdCSSData();
rdJSData();
rdIMGData();

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
    console.log(primaryData)
})

app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

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
        let _ctxBody = myHomeResult;

        let cookies = ''

        if (ctx.headers['Cookie']) {
            cookies = ctx.headers['Cookie'].split('; ')
        }

        let hash = {};
        for (let i = 0; i < cookies.length; i++) {
            let parts = cookies[i].split('=');
            let key = parts[0];
            let value = parts[1];
            hash[key] = value;
        }

        let cookieUsername = hash.username;
        let users;

        fs.readFileSync('./database/datacollection.json', 'utf8', function(err, data) {
            users = data;
        })

        try {
            users = JSON.parse(users);
        } catch (err) { users = {} }


        let foundUser
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === cookieUsername) {
                foundUser = users[i];
                break
            }
        }

        if (foundUser) {
            _ctxBody.replace('<a href="http://localhost:3000/login" class="login-signin">登录</a><a href="http://localhost:3000/signin" class="login-signin">注册</a>', `<a>${foundUser.username}</a>`)
            ctx.response.body = _ctxBody;
        } else {
            ctx.response.body = _ctxBody;
        }

    } else if (ctx.request.path == '/css/myHome.css') {
        ctx.response.type = 'text/css; charset=utf-8';
        ctx.body = myHomeCSSResult;
    } else if (ctx.request.path == '/js/myHome.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = myHomeJSResult;
    } else if (ctx.request.path == '/images/pic01.jpg') {
        ctx.body = picResult;
    } else if (ctx.request.path == '/js/indexRefresh.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = refreshModuleJS;
    } else if (ctx.request.path == '/login') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = loginResult;
    } else if (ctx.request.path == '/css/login.css') {
        ctx.response.type = 'text/css; charset=utf-8';
        ctx.body = loginCSSResult;
    } else if (ctx.request.path == '/js/login.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = loginJSResult;
    } else if (ctx.request.path == '/signin') {
        ctx.response.type = 'text/html; charset=utf-8';
        ctx.body = signinResult;
    } else if (ctx.request.path == '/css/signin.css') {
        ctx.response.type = 'text/css; charset=utf-8';
        ctx.body = signinCSSResult;
    } else if (ctx.request.path == '/js/signin.js') {
        ctx.response.type = 'application/javascript; charset=utf-8';
        ctx.body = signinJSResult;
    }
    await next();
})

app.use(bodyParser());

router.post('/signinProcess', async function(ctx, next) {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);

    console.log(ctx.request);

    username = ctx.request.body.username;
    password = ctx.request.body.password;

    console.log(typeof ctx.response.header)

    ctx.response.body = '<h1>注册成功！点击<a href="http://localhost:3000/login">此处</a>跳转到登录页面</h1>'

    primaryData.push({
        "username": username,
        "password": password
    })
    afterData = JSON.stringify(primaryData);

    fs.writeFile('./database/datacollection.json', afterData, function(err, result) {
        if (err) { console.log(err) }
    })

    await next();
})

router.post('/loginProcess', async function(ctx, next) {
    let found = false;

    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    console.log(ctx.request);

    username = ctx.request.body.username;
    password = ctx.request.body.password;

    for (let primaryDataCell in primaryData) {
        if (username == primaryDataCell.username && password == primaryDataCell.password) {
            found = true;
            break;
        }
    }

    if (found) {
        ctx.response.body = '<h1>登录成功！点击<a href="http://localhost:3000/pages/myHome">此处</a>跳转到【我的】页面</h1>'
        ctx.response.header['Set-Cookie'] = `login_username=${username}`;

    } else {
        ctx.response.body = '<h1>登录失败，用户名不存在或者密码错误。点击<a href="http://localhost:3000/login">此处</a>重新登录</h1>'
        ctx.response.status = 401
    }





})

app.use(router.routes());


app.listen(3000);

console.log('Now server running on http://localhost:3000 ......')