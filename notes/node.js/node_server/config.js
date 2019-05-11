var fs=require('fs');
var globalConfig={};
var configArr= fs.readFileSync('./server.conf').toString().split('\r\n');
for(var i=0;i<configArr.length;i++){
    var temp=configArr[i].split('=');
    globalConfig[temp[0]]=temp[1]
}

if(globalConfig.static_file_type){
    globalConfig.static_file_type=globalConfig.static_file_type.split('|')
}else{
    throw new Error('配置文件异常，缺少:static_file_type')
}



module.exports=globalConfig;
