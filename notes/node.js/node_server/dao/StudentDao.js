var dbutil=require('./dbutil');

function queryAllFromStudent(success){
    var connection=dbutil.createConnection();
    var queryStr='select * from student'
    connection.connect();
    connection.query(queryStr,function(error,result){
        
        if(!error){
            // console.log(result)
            success(result)
        }else{
            console.log(error)
        }
    })
    connection.end()
}

function queryUsernameAndPasswordFromStudent(username,success){
    var connection=dbutil.createConnection();
    var queryStr='select username,password from student where username = ?';

    connection.connect();
    connection.query(queryStr,username,function(error,result){
        if(error==null){
            // console.log(result)
            success(result)
        }else{
            console.log(error)
        }
    })
}


function queryStudentByAge(age,stu_num,success){
    var connection=dbutil.createConnection();
    var queryStr='select * from student where age = ? or stu_num=?'

    connection.connect();
    connection.query(queryStr,[age,stu_num],function(error,result){
        if(error==null){
            console.log(result)
        }else{
            console.log(error)
        }
    });
    connection.end();
}

module.exports={
    queryAllFromStudent,
    queryUsernameAndPasswordFromStudent,
    queryStudentByAge
}

