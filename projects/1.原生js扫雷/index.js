// 右键：
// 胜利判断：所有有雷的小方块上都有红旗时，胜利
// 只能插10个小红旗
// 插满10个红旗后，右键不能添加红旗，可以删除红旗

// 获取开始游戏按钮
var stratBtn = document.getElementById('startBtn');
// 获取标题框
var banner = document.getElementById('banner');
// 获取棋盘
var map = document.getElementById('map');
// 获取弹出框
var alertBox = document.getElementById('alertBox');
// 获取弹出图片
var alertImg = document.getElementsByClassName('alertImg')[0];
// 获取关闭按钮
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// 剩余雷数框
var score = document.getElementById('score');
// 总雷数
var mineSum = 10;
// 剩余还能插旗的数量
var flagRemain = 10;
// 存储每个小方格
var position = [];
// 锁
var key = true;


bindEvent();

function bindEvent() {
    // 点击开始游戏并初始化
    stratBtn.addEventListener('click', function () {
        if (key) {
            banner.style.display = 'block';
            map.style.display = 'block';
            init();
            key = false;
        }

    }, false)


    // 取消鼠标右键的默认事件
    document.addEventListener('contextmenu', function (e) {
        if (e.preventDefault) {
            e.preventDefault()
        } else {
            // 兼容ie
            window.event.returnValue = false;
        }
    }, false)

    // 关闭按钮
    closeBtn.addEventListener('click', function () {
        // map.style.display = 'none';
        // alertBox.style.display = 'none';
        // map.innerHTML='';
        window.location.reload();
    }, false)

    // 鼠标按下事件
    map.addEventListener('mousedown', function (e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if (target.classList.contains('block')) {
            if (e.which == 1) {
                leftClick(target);
            } else if (e.which == 3) {
                rightClick(target);
            }
        }

    }, false)

    // 初始化
    function init() {
        // 初始化记雷器
        score.innerHTML = flagRemain;
        // 创建小方块
        for (var i = 1; i <= 10; i++) {
            for (var j = 1; j <= 10; j++) {
                var div = document.createElement('div');
                div.classList.add('block');
                div.setAttribute('id', i + '-' + j)
                map.appendChild(div);
                position.push({
                    mine: 0
                })
            }
        }
        // 创建地雷
        var block = document.getElementsByClassName('block');
        while (mineSum) {
            var leiIndex = Math.floor(Math.random() * 100);
            if (position[leiIndex].mine === 0) {
                position[leiIndex].mine = 1;
                block[leiIndex].classList.add('islei');
                mineSum--;
            }
        }

    }


    // 鼠标左击
    function leftClick(dom) {
        if (dom && dom.classList.contains('flag')) {
            return;
        }

        if (dom && dom.classList.contains('islei')) {
            // 点到雷，显示全部雷和弹出框
            var dilei = document.getElementsByClassName('islei');
            for (var i = 0; i < 10; i++) {
                dilei[i].classList.add('show');
            };

            setTimeout(function () {
                alertBox.style.display = 'block';
                alertImg.style.backgroundImage = 'url(img/over.jpg)'
            }, 800);
        } else {
            // 没点到雷，计算周围雷数
            var n = 0;
            var positiArr = dom && dom.getAttribute('id').split('-');
            var positiX = positiArr && +positiArr[0];
            var positiY = positiArr && +positiArr[1];
            dom.classList.add('num');
            for (var i = positiX - 1; i <= positiX + 1; i++) {
                for (var j = positiY - 1; j <= positiY + 1; j++) {
                    var aroundBox = document.getElementById(i + '-' + j)
                    if (aroundBox && aroundBox.classList.contains('islei')) {
                        n++;
                    }
                }
            }
            dom && (dom.innerHTML = n);
            if (n == 0) {
                for (var i = positiX - 1; i <= positiX + 1; i++) {
                    for (var j = positiY - 1; j <= positiY + 1; j++) {
                        var nearBox = document.getElementById(i + '-' + j);
                        if (nearBox && !nearBox.classList.contains('checked')) {
                            nearBox.classList.add('checked');
                            leftClick(nearBox)
                        }
                    }
                }
            }

        }
    }

    // 鼠标右击
    function rightClick(dom) {
        if (dom && dom.classList.contains('num')) {
            return;
        }
        // 面板数字大于0时才能添加小旗
        if (flagRemain > 0) {
            if (dom.classList.contains('flag')) {
                dom.classList.remove('flag');
                flagRemain++;
            } else {
                dom.classList.add('flag');
                flagRemain--;
            }
        } else {
            if (dom.classList.contains('flag')) {
                dom.classList.remove('flag');
                flagRemain++;
            }
        }

        score.innerHTML = flagRemain;

        // 胜利
        var dilei = document.getElementsByClassName('islei');
        var count = 0;
        for (var i = 0; i < dilei.length; i++) {
            if (dilei[i].classList.contains('flag')) {
                count++;
            }
        }
        if (count == 10) {
            alertBox.style.display = 'block';
            alertImg.classList.add('success');
            key = true;
        }

        // dom.classList.toggle('flag');
        // if (dom.classList.contains('islei') && dom.classList.contains('flag')) {
        //     flagRemain--;
        // }
        // if (dom.classList.contains('islei') && !dom.classList.contains('flag')) {
        //     flagRemain++;
        // }
        // score.innerHTML = flagRemain;
        // if (flagRemain == 0) {
        //     alertBox.style.display = 'block';
        //     alertImg.classList.add('success');
        //     key = true;
        // }

    }
}