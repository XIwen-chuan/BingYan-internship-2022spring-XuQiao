const topTabBtn = document.querySelector('#top-2 ul');
const mainContent = document.getElementById('main-content');
let reBangTop2Btn;


let result = '';



function refreshPage(pathName) {
    let text = '';
    const logProcess = (res) => {
        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');
        const push = ({ value, done }) => {
            if (done) { return text; }
            text += decoder.decode(value, { stream: true });
            // ...
            return reader.read().then(push);
        };
        return reader.read().then(push);
    };


    fetch('http://localhost:3000/' + pathName)
        .then(logProcess)
        .then((res) => {
            mainContent.innerHTML = res;

            reBangTop2Btn = document.querySelector('.top-3 ul');
            reBangTop2Btn.addEventListener('click', function(e) {
                let clickElmt;
                clickElmt = e.target;
                switch (clickElmt.innerHTML) {
                    case '前端':
                        refreshPage('pages/index-reBang-qianDuan');
                        break;
                    case '后端':
                        refreshPage('pages/index-reBang-houDuan')
                        break;
                }
            })

        });


}

topTabBtn.addEventListener('click', function(e) {
    let clickElmt;
    clickElmt = e.target;
    switch (clickElmt.innerHTML) {
        case '热榜':
            refreshPage('pages/index-reBang-qianDuan');
            break;
        case '关注':
            refreshPage('pages/index-copy');
            break;
    }



})




/*
fetch('http://localhost:3000/' + pathName, {
        "headers": {
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "no-cors",
        "credentials": "omit"
    }).then(response => response.body).then(rdStream => {
        let rdStreamReader = rdStream.getReader();

    }).catch(err => console.log(err))
*/