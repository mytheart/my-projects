function createStore(initialState) {
    var state = initialState,
        list = [];
    return {
        getState: function (type) {
            return state[type]
        },
        dispatch: function (action) {
            state[action.type] = action.value;
            list.forEach(function (ele, index) {
                ele();
            })
        },
        subscribe: function (func) {
            list.push(func)
        }
    }
}