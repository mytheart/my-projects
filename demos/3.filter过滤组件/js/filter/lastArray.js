// 合并筛选功能
function combineFilterFunc(action){
    return function(data){
        for(var prop in action){
            data=action[prop](data,store.getState(prop))
        }
        return data;
    }
}

