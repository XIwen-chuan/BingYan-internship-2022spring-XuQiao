export function pullRefresh(pullCallback) {
    const body = document.body;
    const app = document.getElementById('main-content');
    const app_style_cache = app.style;
    const pullTextEl = document.createElement('p');

    pullTextEl.style = "width: 100%; text-align: center; position: fixed; z-index: 3; left: 0; top: 4rem; font-size: 1rem; line-height: 3rem; color: #999; display: none;";
    const loadText = document.createElement('span');


    let refreshStatus = false;

    const finish = () => {
        loadText.innerText = '刷新成功';
        setTimeout(() => {
            app.style['transition'] = 'transform 0.2s';
            app.style['transform'] = 'translate(0, 0)';
            setTimeout(() => {
                pullTextEl.style['display'] = 'none';
                app.style = app_style_cache;
            }, 400);
        }, 500);
    };

    const init = () => {
        body.appendChild(pullTextEl);
        pullTextEl.appendChild(loadText);
        let startP, moveLen;
        //默认回调
        const _pullCallback = () => {
            window.location.reload();
        };

        const _pullHandler = (moveLen) => {
            const top_distance = app.getBoundingClientRect().top;

            //判断下拉是否有效
            if (top_distance >= 0) {
                if (pullTextEl.style['display'] === 'none') {

                    pullTextEl.style['display'] = 'block';
                }
                //设置下拉阻尼
                if (moveLen > 0 && moveLen < 50) {
                    app.style['transform'] = 'translate(0, ' + moveLen + 'px)';
                } else if (moveLen >= 50 && moveLen < 100) {
                    const _moveLen = 50 + (moveLen - 50) * 0.6;
                    app.style['transform'] = 'translate(0, ' + _moveLen + 'px)';
                } else if (moveLen >= 100) {
                    const _moveLen = 80 + (moveLen - 100) * 0.2;
                    app.style['transform'] = 'translate(0, ' + _moveLen + 'px)';
                }
                //如果有效，不同下拉长度下有不同的显示效果
                if (top_distance < 340) {
                    loadText.innerText = '下拉即可刷新...';
                    refreshStatus = false;
                } else {
                    loadText.innerText = '松开立即刷新...';
                    refreshStatus = true;
                }
            }
        };

        app.addEventListener('touchstart', (e) => {
            startP = e.touches[0].pageY;
            app.style['transition'] = 'transform 0s';
        });
        //下拉过程中显示过程文字
        app.addEventListener('touchmove', (e) => {
            moveLen = e.touches[0].pageY - startP;
            _pullHandler(moveLen);
        });
        //下拉结束后显示结果文字
        app.addEventListener('touchend', (e) => {

            const top_distance = app.getBoundingClientRect().top;
            if (top_distance > 0) {
                if (refreshStatus) {
                    loadText.innerText = '数据加载中...';
                    pullCallback ? pullCallback() : _pullCallback();
                    app.style['transition'] = 'transform 0.4s';
                    app.style['transform'] = 'translate(0, 40px)';
                } else {
                    app.style['transition'] = 'transform 0.4s';
                    app.style['transform'] = 'translate(0, 0)';
                    setTimeout(() => {
                        pullTextEl.style['display'] = 'none';
                        app.style = app_style_cache;
                    }, 400);
                }
            } else {
                pullTextEl.style['display'] = 'none';
                app.style = app_style_cache;
            }
        })
    };
    return {
        init,
        finish
    }
}