$(function () {

    // 轮播图插件
    $('#swiper').sliderImg({
        img: ['./image/lunbotu/lunbo1.jpg', './image/lunbotu/lunbo2.jpg', './image/lunbotu/lunbo3.jpg', './image/lunbotu/lunbo4.jpg', './image/lunbotu/lunbo5.jpg', './image/lunbotu/lunbo6.jpg', './image/lunbotu/lunbo7.jpg', './image/lunbotu/lunbo8.jpg', ],
    });


    // location插件
    $('#location').location({
        img: './image/local.png',
        nowLocation: '上海',
        items: [{
            name: '北京',
            href: '#'
        }, {
            name: '上海',
            href: '#'
        }, {
            name: '天津',
            href: '#'
        }, {
            name: '重庆',
            href: '#'
        }, {
            name: '河北',
            href: '#'
        }, {
            name: '山西',
            href: '#'
        }, {
            name: '河南',
            href: '#'
        }, {
            name: '辽宁',
            href: '#'
        }, {
            name: '吉林',
            href: '#'
        }, {
            name: '黑龙江',
            href: '#'
        }, {
            name: '内蒙古',
            href: '#'
        }, {
            name: '江苏',
            href: '#'
        }, {
            name: '山东',
            href: '#'
        }, {
            name: '安徽',
            href: '#'
        }, {
            name: '浙江',
            href: '#'
        }, {
            name: '福建',
            href: '#'
        }, {
            name: '湖北',
            href: '#'
        }, {
            name: '湖南',
            href: '#'
        }, {
            name: '广东',
            href: '#'
        }, {
            name: '广西',
            href: '#'
        }, {
            name: '江西',
            href: '#'
        }, {
            name: '四川',
            href: '#'
        }, {
            name: '海南',
            href: '#'
        }, {
            name: '贵州',
            href: '#'
        }, {
            name: '云南',
            href: '#'
        }, {
            name: '西藏',
            href: '#'
        }, {
            name: '陕西',
            href: '#'
        }, {
            name: '甘肃',
            href: '#'
        }, {
            name: '青海',
            href: '#'
        }, {
            name: '宁夏',
            href: '#'
        }, {
            name: '新疆',
            href: '#'
        }, {
            name: '港澳',
            href: '#'
        }, {
            name: '台湾',
            href: '#'
        }, {
            name: '钓鱼岛',
            href: '#'
        }, {
            name: '海外',
            href: '#'
        }],
        colNum: 5,
    })

    $('#customerServer').pullDownMenu({
        dir: 'y',
        colNum: 2,
        item: [{
                title: '客户',
                itemLists: [{
                    href: '#',
                    name: '帮助中心'
                }, {
                    href: '#',
                    name: '售后服务'
                }, {
                    href: '#',
                    name: '在线客服'
                }, {
                    href: '#',
                    name: '意见建议'
                }, {
                    href: '#',
                    name: '电话客服'
                }, {
                    href: '#',
                    name: '客服邮箱'
                }, {
                    href: '#',
                    name: '金融咨询'
                }, {
                    href: '#',
                    name: '全球售客服'
                }]
            },
            {
                title: '商户',
                itemLists: [{
                    href: '#',
                    name: '合作招商'
                }, {
                    href: '#',
                    name: '学习中心'
                }, {
                    href: '#',
                    name: '商家后台'
                }, {
                    href: '#',
                    name: '京麦工作台'
                }, {
                    href: '#',
                    name: '商家帮助'
                }, {
                    href: '#',
                    name: '规则平台'
                }]
            }
        ]
    })
    $('#enterprisePurchase').pullDownMenu({
        dir: 'y',
        colNum: 2,
        item: [{
            title: '',
            itemLists: [{
                href: '#',
                name: '企业购'
            }, {
                href: '#',
                name: '企业场景馆'
            }, {
                href: '#',
                name: '工业品'
            }, {
                href: '#',
                name: '礼品卡'
            }]
        }]
    })

    $('#sitsNavigation').pullDownMenu({
        dir: 'x',
        colNum: 3,
        item: [{
                title: '特色主题',
                itemLists: [{
                    href: '#',
                    name: '京东试用'
                }, {
                    href: '#',
                    name: '京东金融'
                }, {
                    href: '#',
                    name: '全球售'
                }, {
                    href: '#',
                    name: '国际站'
                }, {
                    href: '#',
                    name: '京东会员'
                }, {
                    href: '#',
                    name: '京东预售'
                }, {
                    href: '#',
                    name: '买什么'
                }, {
                    href: '#',
                    name: '俄语站'
                }, {
                    href: '#',
                    name: '装机大师'
                }, {
                    href: '#',
                    name: '0元评测'
                }, {
                    href: '#',
                    name: '定期送'
                }, {
                    href: '#',
                    name: '港澳售'
                }, {
                    href: '#',
                    name: '优惠券'
                }, {
                    href: '#',
                    name: '秒杀'
                }, {
                    href: '#',
                    name: '闪购'
                }, {
                    href: '#',
                    name: '印尼站'
                }, {
                    href: '#',
                    name: '陪伴计划'
                }, {
                    href: '#',
                    name: '出海招商'
                }]
            },
            {
                title: '行业频道',
                itemLists: [{
                    href: '#',
                    name: '手机'
                }, {
                    href: '#',
                    name: '智能数码'
                }, {
                    href: '#',
                    name: '玩3C'
                }, {
                    href: '#',
                    name: '电脑办公'
                }, {
                    href: '#',
                    name: '家用电器'
                }, {
                    href: '#',
                    name: '京东智能'
                }, {
                    href: '#',
                    name: '服装城'
                }, {
                    href: '#',
                    name: '京东生鲜'
                }, {
                    href: '#',
                    name: '家装城'
                }, {
                    href: '#',
                    name: '母婴'
                }, {
                    href: '#',
                    name: '食品'
                }, {
                    href: '#',
                    name: '农资频道'
                }, {
                    href: '#',
                    name: '整车'
                }, {
                    href: '#',
                    name: '图书'
                }, {
                    href: '#',
                    name: '京东元器件'
                }]
            },
            {
                title: '生活服务',
                itemLists: [{
                    href: '#',
                    name: '京东众筹'
                }, {
                    href: '#',
                    name: '白条'
                }, {
                    href: '#',
                    name: '京东金融App'
                }, {
                    href: '#',
                    name: '京东小金库'
                }, {
                    href: '#',
                    name: '理财'
                }, {
                    href: '#',
                    name: '话费'
                }, {
                    href: '#',
                    name: '水电煤'
                }, {
                    href: '#',
                    name: '彩票'
                }, {
                    href: '#',
                    name: '旅行'
                }, {
                    href: '#',
                    name: '机票酒店'
                }, {
                    href: '#',
                    name: '电影票'
                }, {
                    href: '#',
                    name: '京东到家'
                }, {
                    href: '#',
                    name: '游戏'
                }]
            },
            {
                title: '更多精彩',
                itemLists: [{
                    href: '#',
                    name: '合作招商'
                }, {
                    href: '#',
                    name: '京东通信'
                }, {
                    href: '#',
                    name: '京东E卡'
                }, {
                    href: '#',
                    name: '企业采购'
                }, {
                    href: '#',
                    name: '服务市场'
                }, {
                    href: '#',
                    name: '办公生活馆'
                }, {
                    href: '#',
                    name: '乡村招募'
                }, {
                    href: '#',
                    name: '校园加盟'
                }, {
                    href: '#',
                    name: '京友邦'
                }, {
                    href: '#',
                    name: '京东社区',
                }, {
                    href: '#',
                    name: '游戏社区'
                }, {
                    href: '#',
                    name: '知识产权维权'
                }]
            }

        ]
    })

    // 菜单栏显示隐藏切换
    var index;
    $('.fs .fs_cols1 .goodsList li').hover(function () {
        index = $(this).index();
        $('.fs .fs_cols1 .details').show();
        $('.fs .fs_cols1 .details li').eq(index).show();
    }, function () {
        index = $(this).index();
        $('.fs .fs_cols1 .details').hide();
        $('.fs .fs_cols1 .details li').eq(index).hide();
    })
    $('.fs .fs_cols1 .details').on('mouseenter', function () {
        $('.fs .fs_cols1 .details li').eq(index).show();
        $(this).show();
    })
    $('.fs .fs_cols1 .details').on('mouseleave', function () {
        $('.fs .fs_cols1 .details li').eq(index).hide();
        $(this).hide();
    })


    // 促销、广告栏切换
    $('.wrapper .fs .fs_cols4 .proclamation .pro_head').on('mouseenter', '.title', function () {
        var index = $(this).index();
        $('.wrapper .fs .fs_cols4 .proclamation .pro_head .baseLine').css('transform', 'translateX(' + index * 55 + 'px)')
        $('.wrapper .fs .fs_cols4 .proclamation .pro_content ul').eq(index).show().siblings('ul').hide()
    })


    // 服务列表切换
    var nowIndex;
    $('.fs .fs_cols4 .servers .row1').hover(function () {
        nowIndex = $(this).index()
        $('.fs .fs_cols4 .serverLists').slideUp();
        $('.fs .fs_cols4 .serversDetails').slideDown();
        // $('.fs .fs_cols4 .serversDetails .navServers li.nowactive').removeClass('nowactive');
        $('.fs .fs_cols4 .serversDetails .navServers li').eq(nowIndex).addClass('nowactive').siblings().removeClass('nowactive');
        $('.fs .fs_cols4 .serversDetails .contentServer li').eq(nowIndex).show().siblings().hide();
    })

    $('.fs .fs_cols4 .serversDetails .navServers li').hover(function () {
        nowIndex = $(this).index();
        $(this).addClass('nowactive').siblings().removeClass('nowactive');
        $('.fs .fs_cols4 .serversDetails .contentServer li').eq(nowIndex).show().siblings().hide();
    })
    $('.fs .fs_cols4 .serversDetails .closeBtn').on('click', function () {
        $('.fs .fs_cols4 .serverLists').slideDown();
        $('.fs .fs_cols4 .serversDetails').slideUp();
    })

    // https://suggest.taobao.com/sug?code=utf-8&q=i&callback=jsonp703
    // input搜索框
    // function addLists(data) {
    //     console.log(data)
    // }
    window.addLists=function(data){
        $('.dropMenus').show();
        var str = '';
        data.result.forEach(function (ele, index) {
            str += '<li>' + ele[0] + '</li>'
        });
        $('.dropMenus').html(str)
    }

    $('.wrapper .header .w .input').on('mouseleave',function(){
        setTimeout(function(){
            $('.dropMenus').hide();
        },1000)
    })
   

    $('#inputSearch').on('input', function () {
        var val = $(this).val();
        $.ajax({
            url: 'https://suggest.taobao.com/sug',
            type: 'GET',
            // success:addLists,
            data: 'code=utf-8&q=' + val,
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'addLists'
        })
    })

})