(function () {
    function Menu(opt) {
        this.parent = opt.parent;
        this.dir = opt.dir;
        this.colNum = opt.colNum;
        this.item = opt.item;
        this.align = opt.align;
        this.init()
    }
    Menu.prototype.init = function () {
        this.createDom();
        this.addCss();
        this.bindEvent();
    }
    Menu.prototype.createDom = function () {
        var dropCont = $('<div class="dropCont"></div>');
        var dropDownCont = $('<div class="dropDownCont"></div>');


        // 判断方向
     
            this.item.forEach(function (ele, index) {
                var menu = $('<div class="menu"></div>');
                if (ele.title) {
                    var title = $('<span class="title"><span>').html(ele.title)
                    menu.append(title)
                }
                var str = '';
                ele.itemLists.forEach(function (ele1, index) {
                    str += '<div class="itemLists"><a href="' + ele1.href + '">' + ele1.name + '</a></div>';
                })
                menu.append(str).appendTo(dropDownCont)
            });
            dropCont.append(dropDownCont).appendTo(this.parent);
    }
    Menu.prototype.addCss = function () {
        var that = this;
        // 公共样式和当htis.dir=='x'时的样式
        $('.dropCont',this.parent).css({
          
            'position':'relative',
            'backgroundColor': '#fff',
        })
        $('.dropDownCont', this.parent).css({
            'position': 'absolute',
            'backgroundColor': '#fff',
            'z-index': '999',
            'padding': '10px',
            'display': 'none',
        });
        $('.dropDownCont .menu ', this.parent).css({
            'position': 'relative',
            'width': that.colNum * 80,
            'border-bottom': '1px solid #ddd',
            'backgroundColor':'#fff',
        })
        $('.dropDownCont .menu:last ', this.parent).css({
            'border-bottom': ''
        })
        $('.dropDownCont .menu .title', this.parent).css({
            'display': 'block',
            'font-weight': '700',
            'color': '#666'
        })
        $('.dropDownCont .menu .itemLists', this.parent).css({
            'width': '80px',
            'height': '30px',
            'text-align':'left',
            'line-height': '30px',
            'display': 'inline-block'
        })

        if(that.dir=='x'){
            var len=that.item.length,
                menuWidth= $('.dropDownCont .menu ', this.parent).width()+20;
            $('.dropDownCont', this.parent).css('left',-len*menuWidth+20)
            $('.dropDownCont', this.parent).css({
                'width': menuWidth*len+20,
            })
            $('.dropDownCont .menu ', this.parent).css({
                'float':'left',
                'border-bottom':'',
                'border-right':'1px solid #ddd',
                'margin':'0 10px'
            })
            $('.dropDownCont .menu:last ', this.parent).css('border-right','')
        }
    }
    Menu.prototype.bindEvent = function () {
        var that = this,
            prevColor = this.parent.css('backgroundColor');
        this.parent.on('mouseenter', function () {
            $('.dropDownCont', that.parent).show();
            that.parent.css('backgroundColor', '#fff');
        })
        $('.dropDownCont', that.parent).add(this.parent).on('mouseleave', function () {
            $('.dropDownCont', that.parent).hide();
            that.parent.css('backgroundColor', prevColor);
        })
    }

    $.fn.extend({
        pullDownMenu: function (option) {
            option.parent = this;
            new Menu(option);
            return this;
        }
    })
}())