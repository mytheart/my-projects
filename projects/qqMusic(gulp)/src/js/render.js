// 页面渲染   
// 1.渲染图片 2.渲染歌曲信息 3.渲染是否喜欢按钮
// 避免变量冲突  采用立即构造函数

(function ($, root) {
    // 渲染图片
    function renderImg(src) {
        var img = new Image();
        img.src = src;
        img.onload = function () {
            $('.img-box img').attr('src', src);
            root.blurImg(img, $('body'));
        }
    }
    // 渲染歌曲信息
    function renderInfo (info) {
        var str = ' <div class="song-name">'+ info.song +'</div>\
        <div class="singer-name">'+ info.singer +'</div>\
        <div class="album-name">' + info.album +'</div>';
        $('.song-info').html(str);
    }
    // 渲染是否喜欢
    function renderIsLike(like) {
        if (like) {
            $('.like').addClass('liking');
        } else {
            $('.like').removeClass('liking');
        }
    }
    root.render = function(data) {
        console.log(data)
        renderImg(data.image);
        renderInfo(data);
        renderIsLike(data.isLike);
    };

})(window.Zepto, window.player || (window.player = {}));
