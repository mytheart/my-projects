var fs = require('fs');
var globalConfig = require('./config.js');
var pathMap = new Map();
var files = fs.readdirSync(globalConfig.web_path);
// console.log(files)
for (var i = 0; i < files.length; i++) {
    var temp = require('./' + globalConfig.web_path + '/' + files[i]);
    if (temp.path) {
        for (var [key, value] of temp.path) {
            if (!pathMap.get(key)) {
                pathMap.set(key, value)
            }else{
                throw new Error("url path异常，url:" + key)
            }
        }
    }

}
module.exports = pathMap;