(function () {
    obj = {
        init: function (opt) {
            this.parent = opt.parent;
            this.img = opt.img;
            this.nowLocation = opt.nowLocation;
            this.items = opt.items;
            this.colNum = opt.colNum;
            this.createDom();
            this.bindEvent();
        },
        createDom: function () {
            var content = $('<div class="content"></div>');
            var area = $('<div class="area"></div>');
            var areaLists = $('<div class="areaLists"></div>');
            area.append('<span class="nowLocation">' + this.nowLocation + '</span>')
            var img = new Image();
            img.src = this.img;
            img.onload = function () {
                $(img).prependTo(area);
            }
            var str = '';
            this.items.forEach(function (ele) {
                str += '<li><a href="' + ele.href + '">' + ele.name + '</a></li>';
            })
            areaLists.html(str);
            content.append(area).append(areaLists).prependTo(this.parent);
            areaLists.css({
                top:this.parent.innerHeight(),
                width:this.colNum*($('.content .areaLists li').width()+parseInt($('.content .areaLists li').css('margin'))*2)
            });
            // console.log( )
        },
      
        bindEvent: function () {
            var that=this;
            // 给默认选中的地区添加nowactive样式
            $('.content .areaLists li a:contains('+this.nowLocation+')').addClass('nowactive');
            // 鼠标移入显示具体地点框
            $('.content .area').on('mouseenter',function(){
                $('.content .areaLists').show();
            });
            // 鼠标移除隐藏具体地点框
            $('.content').on('mouseleave',function(){
                $('.content .areaLists').hide();
            });
            $('.content .areaLists').on('click','li a',function(){
                $('.content .areaLists li a.nowactive').removeClass('nowactive');
                $(this).addClass('nowactive');
                $('.content .area .nowLocation').text($(this).text())
            })
        }
    }

    $.fn.extend({
        location: function (option) {
            option.parent = this;
            obj.init(option);
            return this;
        }
    })
}())