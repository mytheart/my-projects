const express=require('express')
const request=require('request')
const app=express()

// 静态文件托管
app.use('/',express.static('page'))
// 允许跨域
app.use(require('cors')())

const data=  {
	"reqType":0,
    "perception": {
        "inputText": {
            "text": "附近的酒店"
        },
        "inputImage": {
            "url": "imageUrl"
        },
        "selfInfo": {
            "location": {
                "city": "北京",
                "province": "北京",
                "street": "信息路"
            }
        }
    },
    "userInfo": {
        "apiKey": "b77a4801e870415abbbb1b3510f273f6",
        "userId": "2131edas"
    }
}




app.get('/getText',(req,res)=>{

    request({
        url: 'http://openapi.tuling123.com/openapi/api/v2',
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body) // 请求成功的处理逻辑
            // res=body;
            res.send(body)
        }
    });

})

app.get('/robot',(req,res)=>{
    res.send(res)
})
app.get('test',(req,res)=>{
    res.send('test')
})

app.listen(8888,function(){
    console.log('robot server runing in localhost:8888')
})