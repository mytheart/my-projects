var net = require('net');
var fs = require('fs')
var globalConf = require('./conf.js');

var server = net.createServer();
server.listen(globalConf.port, '127.0.0.1');
server.on('listening', function () {
    console.log('Server running at http://127.0.0.1:' + globalConf.port + '/')
})
server.on('connection', function (socket) {
    console.log('Client is connected');
    socket.on('data', function (data) {
        // console.log(data.toString())
        var url = data.toString().split('\r\n')[0].split(' ')[1];
        console.log(globalConf.base_path + url)
        try {
            var fileData = fs.readFileSync(globalConf.base_path + url);
            socket.write("HTTP 200OK\r\n\r\n");
            socket.write(fileData)
        } catch (e) {
            var file404=fs.readFileSync('web/404.html')
            socket.write("HTTP 404Not Found\r\nContent-Type:text/html\r\n\r\n"+file404.toString());
        }
        socket.end()
    })
})