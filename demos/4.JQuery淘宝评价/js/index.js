$(function () {
    // 给每个li中图片根据索引设置id
    $('.header img').each(function (index, ele) {
        $(ele).attr('id', index)
    });
    // 给ul中的每个li绑定事件
    $(".header").on('click', 'li', function () {
        if ($(this).hasClass('active')) {
            $(this).css('cursor',"url('imgs/coverAdd.png'),auto")
            // 缩小图片，返回原始状态
            changeStyle()
            // 隐藏切换箭头
            $('.arrow').css('display', 'none');
        } else {
            // 初始状态，点击显示大图
            $(this).css('cursor',"url('imgs/coverSub.png'),auto");
            changeStyle()
            // 显示切换箭头
            $('.arrow').css('display', 'block');
            // 给点击的li改变样式;
            // 找到点击li下面的img，将其并复制一份添加到显示大图的盒子里
            $(this).addClass("active").find("img").clone().prependTo($(".bigImgBox"));
        }
    })

    // 左击
    $('.left-arrow').on('click', clickHandle);
    // 右击
    $('.right-arrow').on('click', function () {
        clickHandle('right')
    });
    // 点击事件处理函数
    function clickHandle(sign) {
        var index = $('.bigImgBox img').attr('id');
        sign == 'right' ? index++ : index--;
        if (index === 5) {
            index = 0;
        }
        changeStyle();
        $('.header li').eq(index).addClass('active').find('img').clone().prependTo($('.bigImgBox'))

    };
    // 每次点击时改变样式
    function changeStyle() {
        $(".active").removeClass('active');
        $(".bigImgBox img").remove();
    }
})