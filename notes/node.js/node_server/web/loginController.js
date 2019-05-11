var studentServer = require('../service/studentServer.js')
var url = require('url');
var path = new Map();
path.set('/getData', getData);
path.set('/login', login);

function getData(request, response) {
    studentServer.queryAllFromStudent(function (result) {
        var resultArr = [];
        for (var i = 0; i < result.length; i++) {
            resultArr.push(result[i].name)
        }
        console.log(resultArr)
        response.writeHeader(200, {
            'Content-Type': 'text/html;charset=UTF-8'
        });
        response.write(resultArr.toString());
        response.end();
    })
}

// get请求
// function login(request, response) {
//     var params = url.parse(request.url, true).query;
//     studentServer.queryUsernameAndPasswordFromStudent(params.username, function (result) {
//         var res;
//         if (result.length == 1 && params.password == result[0].password) {
//             res = 'ok';
//         } else {
//             res = 'fail'
//         }
//         response.write(res);
//         response.end();
//     })
// }


// post请求
function login(request, response) {
    request.on('data', function (data) {
        var parmObj = {};
        var temp = data.toString().split('&')
        for (var i = 0; i < temp.length; i++) {
            parmObj[temp[i].split('=')[0]] = temp[i].split('=')[1]
        };
        studentServer.queryUsernameAndPasswordFromStudent(parmObj.username, function (result) {
            var res;
            if (result.length == 1 && parmObj.password == result[0].password) {
               
                res = 'ok';
                // ajax方式
                response.writeHeader(200,{'Set-Cookie':'username='+parmObj.username})

                // form表单方式
                // response.writeHeader(302,{'location':'/main.html','Set-Cookie':'username='+parmObj.username});

            } else {
                res = 'fail'
                // form表单方式
                // response.writeHeader(302,{'location':'/error.html'})
            }
            response.write(res);
            response.end();
        })
    })
}




module.exports.path = path;