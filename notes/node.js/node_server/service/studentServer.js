var studentDao=require('../dao/StudentDao.js');

function queryAllFromStudent(success){
    studentDao.queryAllFromStudent(success);
}

function queryStudentByAge(age,stu_num,success){
    studentDao.queryStudentByAge(age,stu_num,success)
}

function queryUsernameAndPasswordFromStudent(username,success){
    studentDao.queryUsernameAndPasswordFromStudent(username,success)
}


module.exports={
    queryAllFromStudent,
    queryUsernameAndPasswordFromStudent,
    queryStudentByAge
}