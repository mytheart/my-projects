// wrapper盒子
var wrapper = document.getElementsByClassName('wrapper')[0];
// 图片盒子
var slideBox = document.getElementsByClassName('slideBox')[0];
// 图片数量
var imgSum = wrapper.getElementsByTagName('img').length - 1;
// 箭头盒子
var arrowBox = document.getElementsByClassName('arrow-box')[0];
// 左箭头
var leftArrowBtn = document.getElementsByClassName('left-arrow')[0];
// 右箭头
var rightArrowBtn = document.getElementsByClassName('right-arrow')[0];
// 小圆点类数组
var indexArr = document.getElementsByClassName('index');

// 每张图片的宽度
var imgWidth = slideBox.children[0].offsetWidth;
// 定时器
var timer,
    index = 0,
    lock = true;

init()
// 初始化
function init() {
    bindEvent();
    clickAndToggle();
    timer = setInterval(clickHandle, 1500);
}

// 点击索引切换图片
function clickAndToggle() {
    for (var i = 0; i < indexArr.length; i++) {
        (function (i) {
            indexArr[i].addEventListener('click', function () {
                // 渲染索引
                changeIndex(i)
                // 根据所以定位图片
                animate(slideBox, {
                    left: -i * imgWidth
                })
            })
        }(i))
    }
}

// 事件绑定
function bindEvent() {
    // 右击切换图片
    rightArrowBtn.addEventListener('click', function () {
        clickHandle('right-left');
    })
    // 左击切换图片
    leftArrowBtn.addEventListener('click', function () {
        clickHandle('left-right')
    })
    // 鼠标进入取消自动播放
    wrapper.addEventListener('mouseenter', function () {
        clearInterval(timer);
        arrowBox.style.opacity=0.8;
    })
    // 鼠标离开启用启动播放
    wrapper.addEventListener('mouseleave', function () {
        timer = setInterval(clickHandle, 1500);
        arrowBox.style.opacity=0;
    })
}

//点击处理和自动播放 
function clickHandle(direction) {
    if (lock) {
        // 锁
        lock = false;
        if (!direction || direction === 'right-left') {
            // 左击和默认播放
            // 渲染索引
            index++;
            if (index == 4) {
                index = 0;
            }
            changeIndex(index)
            // 图片移动
            animate(slideBox, {
                left: slideBox.offsetLeft - imgWidth
            }, function () {
                if (slideBox.offsetLeft == -imgSum * imgWidth) {
                    slideBox.style.left = 0 + 'px';
                }
                lock = true;
            });
        } else if (direction === 'left-right') {
            // 右击
            // 渲染索引
            index--;
            if (index == -1) {
                index = 3
            }
            changeIndex(index)
            // 移动图片
            if (slideBox.offsetLeft == 0) {
                slideBox.style.left = -imgSum * imgWidth + 'px';
            }
            animate(slideBox, {
                left: slideBox.offsetLeft + imgWidth
            }, function () {
                lock = true;
            })
        }
    }

}

// 渲染索引
function changeIndex(_idnex) {
    for (var i = 0; i < indexArr.length; i++) {
        indexArr[i].classList.remove('active')
    }
    indexArr[_idnex].classList.add('active');
}

// 动画函数
function animate(obj, json, callback) {
    clearInterval(obj.timer);
    var speed,
        current;
    obj.timer = setInterval(function () {
        var lock = true;
        for (var prop in json) {
            if (prop == 'opacity') {
                current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
            } else {
                current = parseInt(window.getComputedStyle(obj, null)[prop]);
            }

            speed = (json[prop] - current) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (prop == 'opacity') {
                obj.style[prop] = (current + speed) / 100;
            } else {
                obj.style[prop] = current + speed + 'px';
            }
            if (current != json[prop]) {
                lock = false;
            }
        }
        if (lock) {
            clearInterval(obj.timer);
            typeof callback == 'function' ? callback() : '';
        }
    }, 30)
}