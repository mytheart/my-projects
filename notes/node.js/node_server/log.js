var fs=require('fs');
var globalConfig=require('./config.js');
var fileName=globalConfig.log_path+globalConfig.log_name;
function log(data){
    fs.appendFile(fileName,data+'\n',function(){})
}

module.exports=log;