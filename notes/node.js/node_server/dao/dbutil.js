var mysql = require('mysql');

function createConnection() {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'mytheart',
        database: 'sclooh'
    })
    return connection;
}
// var queryStr = 'select * from student'
// connection.connect();
// connection.query(queryStr, function (error, result) {
//     if (!error) {
//         console.log(result)
//     }
// })
// connection.end()
module.exports.createConnection=createConnection;