// 具体实现扩展轮播图插件:sliderImg
// 放在一个父级中id名为swiper  具有宽高 
// $('#swiper').sliderImg({
//     image: ['./image/pic1.jpg', './image/pic2.jpg', './image/pic3.jpg'],
// interVal: 2000,
// });

(function () {

    function Swiper(opt) {
        var opts = $.extend({
            img: [],
            interval: 2000
        }, opt)
        this.father = opts.father;
        this.img = opts.img;
        this.interval = opts.interval;
        this.init()
    }
    Swiper.prototype.init = function () {

        this.nowIndex = 0;
        this.imgWide = this.father.width();
        this.len = this.img.length;
        this.timer = null;
        this.flag = true;

        this.createDom();
        this.bindEvent();
        this.autoSlide()
    }

    Swiper.prototype.createDom = function () {
        var len = this.len;
        var strImgBox = '';
        var strOrder = '';
        var strBtn = `<div class="btn">
        <a class="prevBtn" href="javaScript:void(0)">
            <span><</span>
        </a>
        <a class="nextBtn" href="javaScript:void(0)">
            <span>></span>
        </a>
    </div>`
        for (var i = 0; i < len; i++) {
            strImgBox += '<li><img src="' + this.img[i] + '" alt=""></li>';
            strOrder += '<li></li>';
        }
        strImgBox += '<li><img src="' + this.img[0] + '" alt=""></li>'
        this.father.append($('<ul class="imgBox"></ul>').append(strImgBox))
            .append(strBtn)
            .append($('<div class="order"></div>').append($('<ul></ul>').append(strOrder)));
        $('#swiper .order li').eq(0).addClass('active');
        $('#swiper .imgBox').css('width', this.imgWide * (this.len + 1));
        $('#swiper .imgBox li').css('width', this.imgWide);
    }

    Swiper.prototype.bindEvent = function () {
        var that = this;
        $('.order li').add('.prevBtn').add('.nextBtn').on('click', function () {
            if ($(this).attr('class') == 'prevBtn') {
                that.move('prev');
            } else if ($(this).attr('class') == 'nextBtn') {
                that.move('next');
            } else {
                that.nowIndex = $(this).index();
                that.move(that.nowIndex);
            }
        });
        $('#swiper').on('mouseenter', function () {
            $('.btn').show();
            clearInterval(that.timer);
        }).on('mouseleave', function () {
            $('.btn').hide();
            that.autoSlide();
        })
    }

    Swiper.prototype.move = function (dir) {
        var that = this;
        if (that.flag) {
            that.flag = false;
            if (dir == 'prev') {
                if (that.nowIndex == 0) {
                    $('.imgBox').css('left', -that.len * that.imgWide)
                    that.nowIndex = that.len - 1;
                } else {
                    that.nowIndex--;
                }
            } else if (dir == 'next') {
                if (that.nowIndex == that.len - 1) {
                    $('.imgBox').animate({
                        'left': -that.len * that.imgWide
                    }, function () {
                        $(this).css('left', 0);
                        that.changeStyle();
                        that.flag = true;
                    });
                    that.nowIndex = 0;
                } else {
                    that.nowIndex++;
                }
            } else {
                // changeStyle()
            }
            that.slider();
        }
    }

    Swiper.prototype.slider = function () {
        var that = this;
        $('.imgBox').animate({
            left: -that.nowIndex * that.imgWide
        }, function () {
            that.flag = true;
        });
        that.changeStyle()
    }

    Swiper.prototype.autoSlide = function () {
        var that = this;
        clearInterval(that.timer);
        that.timer = setInterval(function () {
            that.move('next')
        }, that.interval)
    }

    Swiper.prototype.changeStyle = function () {
        $('.active').removeClass('active');
        $('.order li').eq(this.nowIndex).addClass('active');
    }


    $.fn.extend({
        sliderImg: function (options) {
            options.father = this;
            new Swiper(options);
            return this;
        }
    })

}())