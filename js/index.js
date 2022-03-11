const topTabBtn = document.querySelector('#top-2 ul');
const mainContent = document.getElementById('main-content');

let clickElmt


function refreshPage(pathName) {
    fetch('localhost:3000/' + pathName, { method: 'GET' })
        .then(function(response) {
            mainContent.innerHTML = response.body;
        })
}

topTabBtn.addEventListener('click', function(e) {
    let clickElmt;
    clickElmt = e.target;
    switch (clickElmt.innerHTML) {
        case '关注':
            refreshPage('./index.html')
        case '推荐':
            refreshPage('./pages/index-tuijian.html')
        case '热榜':
            refreshPage('./pages/index-reBang-qianDuan.html')
        case '头条精选':
            refreshPage('./pages/index-touTiao-zongHe.html')
        case '后端':
            refreshPage('./pages/index-houDuan.html')
        case '前端':
            refreshPage('./pages/index-qianDuan.html')
    }
})