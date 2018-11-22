// 根据性别筛选
function filterArrBySex(data, sex) {
    if (sex == 'a') {
        return data;
    }
    return data.filter(function (ele, index, self) {
        return ele.sex == sex;
    })
}
