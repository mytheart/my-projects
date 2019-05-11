var http = require('http');
var url = require('url');
var fs = require('fs');
var globalConfig = require('./config.js');
var pathMap = require('./loader.js');
var log=require('./log.js');
var filterSet = require("./filterLoader");

http.createServer(function (request, response) {
    var curUrl = url.parse(request.url, true);
    var pathName = curUrl.pathname;
    var params = curUrl.query;
    // console.log(pathName)
    log(pathName)

    // filter
    for (var i = 0 ; i < filterSet.length ; i ++) {
        var flag = filterSet[i](request, response);
        if (!flag) {
            return;
        }
    }

    if (isStatic(pathName)) {
        // 静态请求
        try {
            var data = fs.readFileSync(globalConfig.page_path + pathName)
            response.writeHead(200);
            response.write(data)
            response.end()
        } catch (e) {
            response.writeHead(404)
            response.write('<html><body>404 Not Found</body></html>')
            response.end()
        }

    } else {
        // 请求动态的数据
        if (pathMap.get(pathName)) {
            try {
                pathMap.get(pathName)(request, response)
            } catch (e) {
                response.writeHead(500);
                response.write("<html><body><h1>500 BadServer</h1></body></html>");
                response.end();
            }
        }else{
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }
    }


}).listen(globalConfig.port)

log('Server running at http://127.0.0.1:7777/')

function isStatic(pathName) {
    for (var i = 0; i < globalConfig.static_file_type.length; i++) {
        var temp = globalConfig.static_file_type[i];
        if (pathName.indexOf(temp) == pathName.length - temp.length) {
            return true;
        }
    }
    return false;
}

console.log('Server running at http://127.0.0.1:7777/');