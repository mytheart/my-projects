
// 采用面向对象的编程思想

// 第一屏
var startPage = document.getElementsByClassName('startPage')[0];
// 开始按钮
var startGameBtn = document.getElementsByClassName('startGameBtn')[0];

// 第二屏
var wrapper = document.getElementsByClassName('wrapper')[0];
// 开始暂停按钮
var startOrPause = document.getElementsByClassName('startOrPause')[0]
// 分数
var scoreBox = document.getElementsByClassName('scoreBox')[0]
// 运动区域
var content = document.getElementsByClassName('content')[0];

// 第三屏
var gameOver = document.getElementsByClassName('gameOver')[0];
// 最终得分
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// 关闭按钮
var endScore = document.getElementsByClassName('endScore')[0];

// 定时器
var timerId,
    startGameBool = true,
    startPauseBool = true;
speed = 130;

init()

function init() {
    // 地图属性  
    this.mapW = content.offsetWidth;
    this.mapH = content.offsetHeight;
    this.map = content;
    //食物属性 
    this.foodW = 20;
    this.foodX;
    this.foodY;
    // 小蛇属性
    this.snakeW = 20;
    this.snakeBody = [
        [3, 0, 'head'],
        [2, 0, 'body'],
        [1, 0, 'body']
    ];
    // 游戏属性
    this.direction = 'right'
    this.right = false;
    this.left = false;
    this.up = true;
    this.down = true;

    // 分数
    this.score = 0;
    scoreBox.innerHTML = this.score;

    bindEvent();
}

// 开始游戏
function startGame() {
    startPage.style.display = 'none';
    startOrPause.style.display = 'block';
    food()
    snake()
}

// 食物
function food() {
    var food = document.createElement('div');
    food.style.width = this.foodW + 'px';
    food.style.height = this.foodW + 'px';
    food.style.position = 'absolute';
    food.style.borderRadius = '50%';
    this.foodX = Math.floor(Math.random() * (this.mapW / this.foodW - 1));
    this.foodY = Math.floor(Math.random() * (this.mapH / this.foodW - 1));
    food.style.left = this.foodX * 20 + 'px';
    food.style.top = this.foodY * 20 + 'px';

    this.map.appendChild(food).classList.add('food');

}

// 小蛇
function snake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
        // 蛇头蛇身
        var snabody = document.createElement('div');
        snabody.style.width = this.snakeW + 'px';
        snabody.style.height = this.snakeW + 'px';
        snabody.style.position = 'absolute';
        snabody.style.borderRadius = '15%';
        snabody.style.left = this.snakeBody[i][0] * this.snakeW + 'px';
        snabody.style.top = this.snakeBody[i][1] * this.snakeW + 'px';
        snabody.classList.add(this.snakeBody[i][2]);
        this.map.appendChild(snabody).classList.add('snake');

        // 蛇头方向
        switch (this.direction) {
            case 'right':
                break;
            case 'left':
                snabody.style.transform = 'rotate(180deg)';
                break;
            case 'up':
                snabody.style.transform = 'rotate(270deg)';
                break;
            case 'down':
                snabody.style.transform = 'rotate(90deg)';
                break;
            default:
                break;

        }
    }

}

// 小蛇运动
function move() {
    // 重新渲染表示蛇的数组
    // 渲染蛇身
    for (var i = this.snakeBody.length - 1; i > 0; i--) {
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
    }
    // 渲染蛇头
    switch (this.direction) {
        case 'right':
            this.snakeBody[0][0]++;
            break;
        case 'left':
            this.snakeBody[0][0]--;
            break;
        case 'up':
            this.snakeBody[0][1]--;
            break;
        case 'down':
            this.snakeBody[0][1]++;
            break;
        default:
            break;
    }

    // 删除之前的小蛇再渲染
    removeSelf('snake')
    snake()

    // 判断小蛇吃到食物
    if (this.snakeBody[0][0] === this.foodX && this.snakeBody[0][1] === this.foodY) {
        this.snakeBody.push([, , 'body'])
        // 分数++
        this.score++;
        scoreBox.innerHTML = this.score;
        // 重新渲染食物
        removeSelf('food');
        food()
    };

    // 判断小蛇是否碰到边界
    if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] > this.mapW / this.foodW) {
        gameFailed()
    }
    if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] > this.mapH / this.foodW - 1) {
        gameFailed()
    }

    // 判断蛇头是否碰到蛇身
    for (var i = 1; i < this.snakeBody.length; i++) {
        if (this.snakeBody[0][0] == this.snakeBody[i][0] && this.snakeBody[0][1] == this.snakeBody[i][1]) {
            gameFailed()
        }
    }

}

// 根据按键改变运动方向
function setDirection(code) {
    switch (code) {
        case 37:
            if (this.left) {
                this.direction = 'left';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 38:
            if (this.up) {
                this.direction = 'up';
                this.up = false;
                this.down = false;
                this.left = true;
                this.right = true;
            }
            break;
        case 39:
            if (this.right) {
                this.direction = 'right';
                this.right = false;
                this.left = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 40:
            if (this.down) {
                this.direction = 'down';
                this.down = false;
                this.up = false;
                this.left = true;
                this.right = true;
            }
            break;
        default:
            break;
    }
}

// 删除元素
function removeSelf(_class) {
    var _class = document.getElementsByClassName(_class);
    // var len=_class.length
    // for (var i = 0; i < len; i++) {
    //     this.map.removeChild(_class[i])
    // }
    while (_class.length > 0) {
        _class[0].parentNode.removeChild(_class[0])
    }
}

// 游戏失败
function gameFailed() {
    // 失败后的操作
    removeSelf('snake');
    removeSelf('food');
    clearInterval(timerId);
    startOrPause.setAttribute('src', 'img/start.png');
    endScore.innerHTML = this.score;
    gameOver.style.display = 'block';
    
    // 初始化
    // 初始化小蛇
    this.snakeBody = [
        [3, 0, 'head'],
        [2, 0, 'body'],
        [1, 0, 'body']
    ];
    // 初始化小蛇方向
    this.direction = 'right'
    this.right = false;
    this.left = false;
    this.up = true;
    this.down = true;
    // 初始化分数
    this.score=0;
    scoreBox.innerHTML=this.score;
    // 锁
    startGameBool = true;
    startPauseBool = true;
}

// 绑定事件
function bindEvent() {
    // 开始游戏
    startGameBtn.addEventListener('click', function () {
        startAndPauseGame()
    }, false);
    // 开始暂停游戏
    startOrPause.addEventListener('click', function () {
        startAndPauseGame()
    }, false)
    // 关闭按钮
    closeBtn.addEventListener('click', function () {
        gameOver.style.display = 'none';
    }, false)
}

// 开始和暂停游戏，封装逻辑
function startAndPauseGame() {
    if (startPauseBool) {
        // 开始游戏
        if (startGameBool) {
            // 点击开始按钮开始游戏
            startGame();
            startGameBool = false;
        }
        // 换成暂停图片
        startOrPause.setAttribute('src', 'img/pause.png');
        // 创建定时器使小蛇运动
        timerId = setInterval(function () {
            move()
        }, speed);
        // 注册键盘按下事件
        document.addEventListener('keydown', function (e) {
            setDirection(e.keyCode)
        }, false);
        // 锁
        startPauseBool = false;
    } else {
        // 暂停游戏
        clearInterval(timerId);
        startOrPause.setAttribute('src', 'img/start.png');
        startPauseBool = true;
    }
}