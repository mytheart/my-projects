// server data

var personArr = [{
        name: '王港',
        src: 'imgs/3.png',
        des: '颈椎不好',
        sex: 'm',
        age: 22
    },
    {
        name: '刘莹',
        src: 'imgs/5.png',
        des: '我是谁',
        sex: 'f',
        age: 16
    },
    {
        name: '王秀莹',
        src: 'imgs/4.png',
        des: '我很好看',
        sex: 'f',
        age: 18
    },
    {
        name: '刘金雷',
        src: 'imgs/1.png',
        des: '你没有见过陌生的脸',
        sex: 'm',
        age: 23
    },
    {
        name: '刘飞翔',
        src: 'imgs/2.png',
        des: '瓜皮刘',
        sex: 'm',
        age: 26
    }
];

// 搜索框
var oInput = document.getElementsByClassName('search')[0];
// 按钮
var btnList = document.getElementsByClassName('btn');
var btnArr = Array.prototype.slice.call(btnList, 0);
// 列表框
var oUl = document.getElementsByTagName('ul')[0];

// var oOption=document.getElementsByTagName('option');
// var oOptionArr=Array.prototype.slice.call(oOption,0);

// oOptionArr.forEach(function(ele,index){
//     if(ele.selected){
//         console.log(ele)
//     }
// })



var lastArrayFunc = combineFilterFunc({
    text: filterArrByText,
    sex: filterArrBySex
});

var store = createStore({
    text: '',
    sex: 'a',
    age:[0,18]
})

store.subscribe(upData)

upData();
// 点击处理
btnArr.forEach(function (ele, index, self) {
    ele.addEventListener('click', function () {
        // 改变按钮样式
        changeStyle(this);
        // 渲染数据
        store.dispatch({
            type: 'sex',
            value: this.getAttribute('sex')
        })
    })
})
// 文本框内容处理
oInput.addEventListener('input', function () {
    store.dispatch({
        type: 'text',
        value: this.value
    })
})

// 根据数据渲染页面
function upData() {
    renderData(lastArrayFunc(personArr));
}

// 根据传入的数据渲染页面
function renderData(data) {
    var htmlStr = '';
    data.forEach(function (ele, index) {
        htmlStr += '<li><img src="' + ele.src + '" alt=""><p class="name">' + ele.name + '</p><p class="des">' + ele.des + '</p></li>'
    })
    oUl.innerHTML = htmlStr;
}

// 改变按钮样式
function changeStyle(ele) {
    for (var i = 0; i < btnList.length; i++) {
        btnList[i].className = 'btn';
    }
    ele.className = 'btn active';
}
