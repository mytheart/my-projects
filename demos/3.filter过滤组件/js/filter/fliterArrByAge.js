function flterArrByAge(data, ageArr) {
    return data.filter(function (ele, index) {
        return ele.age > ageArr[0] && ele.age <= ageArr[1];
    })
}