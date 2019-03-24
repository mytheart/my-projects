// 切换索引
// 1.prev上一曲 2.next下一曲 3.getIndex()获取索引，供prev和next使用 
// 算法：curIndex=[当前索引值+数据长度值+（+-1）] % 数据长度值 
(function ($, root) {
    function Control(len){
        this.index = 0;
        this.len = len;
    }
    Control.prototype = {
        prev: function () {
            // if (this.index == 0) {
            //     this.index = len - 1;
            // } else {
            //     this.index --;
            // }
            return this.getIndex(-1);
        },
        next: function () {
            // if (this.index == len - 1) {
            //     this.index = 0;
            // } else {
            //     this.index ++;
            // }
            return this.getIndex(1);
        },
        // 计算改变后的索引
        getIndex: function(val) {
            // 当前对应索引
            var index = this.index;
            // 数据总长度
            var len = this.len;
            this.index = (index + val + len) % len;
            // 改变后的索引
            return this.index;
        }
    }
    root.controlIndex = Control;
})(window.Zepto, window.player || (window.player = {}))