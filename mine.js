//   1.返回数据类型
/**
 * 输入一个值，返回其数据类型
 * @param  要获取数据类型的值
 */
function type(parameter) {
    var tmp = typeof (parameter);
    if (tmp == "object") {
        // 引用值或null
        var num = Object.prototype.toString.call(parameter);
        switch (num) {
            case "[object Array]":
                return "[object Array]";
            case "[object Object]":
                return "[object Object]";
            case "[object Null]":
                return "null";
            case "[object Boolean]":
                return "[object Boolean]";
            case "[object Number]":
                return "[object Number]";
            case "[object String]":
                return "[object String]";
            default:
                alert('error');
        }
    } else {
        // 原始值
        return tmp;
    }
}

// 2.数组去重(1)
Array.prototype.unique = function () {
    var obj = {};
    return this.filter(function (ele) {
        if (!obj[ele]) {
            obj[ele] = 1;
            return true;
        }
    })
}
// 2.数组去重(2)
Array.prototype.unique = function () {
    var obj = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            obj[this[i]] = 'a';
            arr.push(this[i]);
        }
    }
    return arr;
}

//3.字符串去重 
String.prototype.unique = function () {
    var obj = {},
        str = '',
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            str += this[i];
            obj[this[i]] = true;
        }
    }
    return str;
}

String.prototype.unique1 = function () {
    return str.split("").unique().join("")
}

//4.深克隆（深克隆不考虑函数）
function deepClone(origin, target) {
    var target = target || {};
    for (var prop in origin) {
        if (!origin.hasOwnProperty(prop)) {
            return false;
        }
        if (type(origin[prop]) == "object" && origin[prop] !== "null") {
            //  引用值
            if (Object.prototype.toString.call(origin[prop] == "[object Array]")) {
                target[prop] = [];
            } else if (Object.prototype.toString.call(origin[prop]) == "[object Object]") {
                target[prop] = {};
            }
            deepClone(origin[prop], target[prop]);
        } else {
            //   原始值或function
            target[prop] = origin[prop];
        }
    }
    return target;
}

// 深浅克隆是针对引用值
// 缺点：(1)无法复制函数(3)有字符串的会被分割成类数组
function deepClone1(obj) {
    if (typeof obj != "object") {
        return obj;
    }
    var result = {};
    for (var i in obj) {
        result[i] = deepClone(obj[i]);
    }
    return result;
}

var o1 = JSON.parse(JSON.stringify(obj1));

// 5.reverse底层原理和扩展
// 改变原数组
Array.prototype.myReverse = function () {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        var temp = this[i];
        this[i] = this[len - 1 - i];
        this[len - 1 - i] = temp;
    }
    return this;
}
// 不改变原数组
Array.prototype.invert = function () {
    var temp = [],
        len = this.length - 1
    for (var i = len; i >= 0; i--) {
        temp.push(this[i])
    }
    return temp;
}

//6. 继承
function inherit(Target, Origin) {
    function F() {};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    // 最终的原型指向
    Target.prop.uber = Origin.prototype;
}

//7. 找出字符串中第一次只出现一次的字母
String.prototype.firstAppear = function () {
    var obj = {},
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (obj[this[i]]) {
            obj[this[i]]++;
        } else {
            obj[this[i]] = 1;
        }
    }

    for (var prop in obj) {
        if (obj[prop] == 1) {
            return prop;
        }
    }
}

//8. 找元素的第n级父元素
function parents(ele, n) {
    while (ele && n) {
        ele = ele.parentElement ? ele.parentElement : ele.parentNode;
        n--;
    }
    return ele;
}

//9. 返回元素的第n个兄弟节点
function retSibling(e, n) {
    while (e && n) {
        if (n > 0) {
            if (e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
            }
            n--;
        } else {
            if (e.previousElementSibling) {
                e = e.previousElementSibling;
            } else {
                for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSibling);
            }
            n++;
        }
    }
    return e;
}

//10. 封装mychildren，解决浏览器的兼容问题
function myChildren(e) {
    var children = e.childNodes,
        arr = [],
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            arr.push(children[i])
        }
    }
    return arr;
}

// 11.判断元素有没有子元素
function hasChildren(e) {
    var children = e.childNodes,
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            return true;
        }
    }
    return false;
}

// 12.我一个元素插入到另一个元素的后面
Element.prototype.insertAfter = function (target, elen) {
    var nextElen = elen.nextElenmentSibling;
    if (nextElen == null) {
        this.appendChild(target);
    } else {
        this.insertBefore(target, nextElen);
    }
}

//   13.返回当前的时间（年月日时分秒）
function getDateTime() {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() + 1,
        minute = date.getMinutes(),
        second = date.getSeconds();

    month = checkTime(month);
    day = checkTime(day);
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}


//   14.获得滚动条的滚动距离
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

//    15.获得视口的尺寸
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

// 16.获取任一元素的任意属性
function getStyle(elem, prop) {
    return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]
}

// 17.绑定事件的兼容代码
function addEvent(elem, type, handle) {
    if (elem.addEventListener) { //非ie和非ie9
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) { //ie6到ie8
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}

// 18.解绑事件
function removeEvent(elem, type, handle) {
    if (elem.removeEventListener) { //非ie和非ie9
        elem.removeEventListener(type, handle, false);
    } else if (elem.detachEvent) { //ie6到ie8
        elem.detachEvent('on' + type, handle);
    } else {
        elem['on' + type] = null;
    }
}



//   19.取消冒泡的兼容代码
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}

// 20.检验字符串是否是回文
function isPalina(str) {
    if (Object.prototype.toString.call(str) !== '[object String]') {
        return false;
    }
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
//   21.检验字符串是否是回文
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str)
    return (str == str.split('').reverse().join(''))
}

// 22.兼容getElementsByClassName方法
Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (_className) {
    var allDomArray = document.getElementsByTagName('*');
    var lastDomArray = [];

    function trimSpace(strClass) {
        var reg = /\s+/g;
        return strClass.replace(reg, ' ').trim()
    }
    for (var i = 0; i < allDomArray.length; i++) {
        var classArray = trimSpace(allDomArray[i].className).split(' ');
        for (var j = 0; j < classArray.length; j++) {
            if (classArray[j] == _className) {
                lastDomArray.push(allDomArray[i]);
                break;
            }
        }
    }
    return lastDomArray;
}

// 23.运动函数
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

// 24.弹性运动
function ElasticMovement(obj, target) {
    clearInterval(obj.timer);
    var iSpeed = 40,
        a, u = 0.8;
    obj.timer = setInterval(function () {
        a = (target - obj.offsetLeft) / 8;
        iSpeed = iSpeed + a;
        iSpeed = iSpeed * u;
        if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
            console.log('over')
            clearInterval(obj.timer);
            obj.style.left = target + 'px';
        } else {
            obj.style.left = obj.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}

// 25.封装自己的forEach方法
Array.prototype.myForEach = function (func, obj) {
    var len = this.length;
    var _this = arguments[1] ? arguments[1] : window;
    // var _this=arguments[1]||window;
    for (var i = 0; i < len; i++) {
        func.call(_this, this[i], i, this)
    }
}

// 26.封装自己的filter方法
Array.prototype.myFilter = function (func, obj) {
    var len = this.length;
    var arr = [];
    var _this = arguments[1] || window;
    for (var i = 0; i < len; i++) {
        func.call(_this, this[i], i, this) && arr.push(this[i]);
    }
    return arr;
}

//  27.数组map方法
Array.prototype.myMap = function (func) {
    var arr = [];
    var len = this.length;
    var _this = arguments[1] || window;
    for (var i = 0; i < len; i++) {
        arr.push(func.call(_this, this[i], i, this));
    }
    return arr;
}

// 28.数组every方法
Array.prototype.myEvery = function (func) {
    var flag = true;
    var len = this.length;
    var _this = arguments[1] || window;
    for (var i = 0; i < len; i++) {
        if (func.apply(_this, [this[i], i, this]) == false) {
            flag = false;
            break;
        }
    }
    return flag;
}

// 29.数组reduce方法
Array.prototype.myReduce = function (func, initialValue) {
    var len = this.length,
        nextValue,
        i;
    if (!initialValue) {
        // 没有传第二个参数
        nextValue = this[0];
        i = 1;
    } else {
        // 传了第二个参数
        nextValue = initialValue;
        i = 0;
    }
    for (; i < len; i++) {
        nextValue = func(nextValue, this[i], i, this);
    }
    return nextValue;
}

// 30.实现bind()方法
Function.prototype.myBind = function (target) {
    var target = target || window;
    var _self = this;
    var args = [].slice.call(arguments, 1);
    var temp = function () {};
    var F = function () {
        var _arg = [].slice.call(arguments, 0);
        return _self.apply(this instanceof temp ? this : target, args.concat(_arg))
    }
    temp.prototype = this.prototype;
    F.prototype = new temp();
    return F;
}

// 31.获取url中的参数   
function showWindonHref() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    if (args[0] === sHref) {
        return '';
    }
    var hrefarr = args[1].split('&');
    var obj = {};
    for (var i = 0; i < hrefarr.length; i++) {
        hrefarr[i] = hrefarr[i].split('=');
        obj[hrefarr[i][0]] = hrefarr[i][1];
    }
    return obj;
}

//  32.冒泡排序(升序)
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 33.遍历Dom树
// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
    callback(element);
    var list = element.children;
    for (var i = 0; i < list.length; i++) {
        traverse(list[i], callback);
    }
}

// 34.原生js封装ajax
function ajax(method, url, callback, data, flag) {
    var xhr;
    flag = flag || true;
    method = method.toUpperCase();

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(2)
            callback(xhr.responseText);
        }
    }

    if (method == 'GET') {
        var date = new Date(),
            timer = date.getTime();
        xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
        xhr.send()
    } else if (method == 'POST') {
        xhr.open('POST', url, flag);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}

// 35.异步加载script
function loadScript(url, callback) {
    var oscript = document.createElement('script');
    if (oscript.readyState) { // ie8及以下版本
        oscript.onreadystatechange = function () {
            if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
                callback();
            }
        }
    } else {
        oscript.onload = function () {
            callback()
        };
    }
    oscript.src = url;
    document.body.appendChild(oscript);
}

// 36.cookie管理
var cookie = {
    set: function (name, value, time) {
        document.cookie = name + '=' + value + '; max-age=' + time;
        return this;
    },
    remove: function (name) {
        return this.setCookie(name, '', -1);
    },
    get: function (name, callback) {
        var allCookieArr = document.cookie.split('; ');
        for (var i = 0; i < allCookieArr.length; i++) {
            var itemCookieArr = allCookieArr[i].split('=');
            if (itemCookieArr[0] === name) {
                return itemCookieArr[1]
            }
        }
        return undefined;
    }
}