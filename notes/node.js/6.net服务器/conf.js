// globalConf={
//     port:12345,
//     base_path:'web'
// }

var fs=require('fs');
var conf=fs.readFileSync('./server.conf').toString().split('\r\n');
var globalConf={}
for(var i=0;i<conf.length;i++){
    var temp=conf[i].split('=');
    globalConf[temp[0]]=temp[1];
}
// console.log(globalConf)

module.exports=globalConf;