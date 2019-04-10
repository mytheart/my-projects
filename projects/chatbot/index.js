var robot = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        document.onkeyup = this.keyup;
        $('.footer .btn').click(this.click.bind(this));
    },
    click: function () {
        var val = $('.footer .ipt').val();
        if (val) {
            this.addDom(val, 'my');
            this.getData(val);
            $('.footer .ipt').val('');
        }
    },
    keyup: function (e) {
        if (e.keyCode === 13) {
            $('.footer .btn').trigger('click');
        }
    },
    getData: function (val) {
        $.ajax({
            url: 'http://api.duyiedu.com/api/chat/sendMsg?appkey=mytheart_1554172107474',
            type: 'GET',
            data: {
                msg: val
            },
            success: this.addDom,
            error: function () {
                console.log('error')
            },
            complete: function () {
                $('.content').scrollTop($('.content')[0].scrollHeight)
            }
        })
    },
    addDom: function (data, who) {
        console.log(data)
        var str = '';
        if (who === 'my') {
            str = '<p class="talk my">\
            <span class="user"></span>\
            <span class="text">' + data + '</span>\
        </p>'
        } else {
            var domJson = JSON.parse(data);
            str = `<p class="talk robot">
            <span class="user"></span>
            <span class="text">${domJson.data.text}</span>
        </p>`
        }
        $('.inner').append(str);
    }
}
robot.init();