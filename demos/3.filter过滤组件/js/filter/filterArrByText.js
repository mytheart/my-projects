// 根据文本内容筛选
function filterArrByText(data, text) {
    if (text == '') {
        return data;
    }
    return data.filter(function (ele, index, self) {
        return ele.name.indexOf(text) != -1;
    })
}