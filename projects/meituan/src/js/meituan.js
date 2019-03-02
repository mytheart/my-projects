import '../css/reset.css';
import '../plug/css/swiper.min.css';
import '../webfont/iconfont.css';
import '../css/meituanIndex.css';

getData();

function getData(){
    $.ajax({
        url:'http://localhost:4040/api/list.json',
        type:'Get',
        dataType:'json',
        success:addDom,
        error:function(){
            throw 'Failed to obtain information';
        }   
    })
}

function addDom(data){
    var dataList=data.list;
    // console.log(dataList)
    var str='';
    dataList.forEach(function(ele){
        str+=` <li class="foodspic">
        <a href="http://localhost:4040/meituan-detail.html?id=${ele.id}" class="clearfix">
            <img src="${ele.info.imgurl}" alt="">
            <dl>
                <dt>${ele.info.name}</dt>
                <dd>
                    <p class="foodtitle">${ele.info.adderess}</p>
                    <p class="price">
                        <span><strong>${ele.info.price}</strong><i>元</i></span>
                        <span>${ele.info.newUser}</span>
                        <span>${ele.info.sale}</span>
                    </p>
                </dd>
            </dl>
        </a>
    </li> `
    
    })
    $('.guess-foodlist .list').html(str);
}

$(window).scroll(function(){
    // console.log($(this).scrollTop())
    if($(this).scrollTop()>500){
        $('#gotop').slideDown()
    }else{
        $('#gotop').slideUp();
    }
})
$('#gotop').on('click',function(){
    $(window).scrollTop(0)
})

