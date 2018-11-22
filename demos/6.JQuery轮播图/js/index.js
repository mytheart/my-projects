function init() {
    bindEvent();
    autoSlide();
}
init();

var nowIndex = 0;
var imgWide = 500;
var len = 5;
var timer;
var flag = true;

function bindEvent() {
    $('.order li').add('.prevBtn').add('.nextBtn').on('click', function () {
        if ($(this).attr('class') == 'prevBtn') {
            move('prev');
        } else if ($(this).attr('class') == 'nextBtn') {
            move('next');
        } else {
            nowIndex = $(this).index();
            move(nowIndex);
        }
    });
    $('.wrapper').on('mouseenter', function () {
        $('.btn').show();
        clearInterval(timer);
    }).on('mouseleave', function () {
        $('.btn').hide();
        autoSlide();
    })
}

function move(dir) {
    if (flag) {
        flag = false;
        if (dir == 'prev') {
            if (nowIndex == 0) {
                $('.imgBox').css('left', -len * imgWide)
                nowIndex = len - 1;
            } else {
                nowIndex--;
            }
        } else if (dir == 'next') {
            if (nowIndex == len - 1) {
                $('.imgBox').animate({
                    'left': -len * imgWide
                }, function () {
                    $(this).css('left', 0);
                    changeStyle();
                    flag=true;
                });
                nowIndex = 0;
            } else {
                nowIndex++;
            }
        } else {
            // changeStyle()
        }
        slider();
    }
}

function slider() {
    $('.imgBox').animate({
        left: -nowIndex * imgWide
    },function(){
        flag=true;
    });
    changeStyle()
}

function autoSlide() {
    clearInterval(timer);
    timer = setInterval(function () {
        move('next')
    }, 2000)
}

function changeStyle() {
    $('.active').removeClass('active');
    $('.order li').eq(nowIndex).addClass('active');
}