
    // 原生js实现input搜索框（jsonp，taobao接口）
    var searchInput = document.getElementById('inputSearch');
    var oUl = document.getElementsByClassName('dropMenus')[0];

    searchInput.oninput = function () {

        var oScript = document.createElement('script');
        oScript.src = 'https://suggest.taobao.com/sug?&q=' + this.value + '&callback=doJson';
        document.body.appendChild(oScript);
        document.body.removeChild(oScript);
    }

    function doJson(date) {
        oUl.style.display = 'block';
        var str = '';
        date.result.forEach(function (ele, index) {
            str += '<li>' + ele[0] + '</li>'
        });
        oUl.innerHTML = str;
    }

    oUl.addEventListener('mouseleave', function () {
        this.style.display = 'none';
    })


