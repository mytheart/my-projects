const express = require('express')
const app = express()
const { User } = require('./models')
const jwt = require('jsonwebtoken')
// 密钥，用于生成token和解密token
const SECRET = 'jwttoken'



app.use(express.json())


// 查询所有文章
app.get('/api/users', async (req, res) => {
    res.send(await User.find())
})

// 注册
app.post('/api/register', async (req, res) => {

    const result = User.create(req.body)
    res.send(result)
})

// 登陆
app.post('/api/login', async (req, res) => {

    // 验证用户名
    const result = await User.findOne({ username: req.body.username })
    if (!result) {
        res.status(422).send({ error: '用户名不存在' })
    }

    // 验证密码
    const isPassword = require('bcryptjs').compareSync(req.body.password, result.password)
    if (!isPassword) {
        res.status(422).send({ error: '密码不正确' })
    }

    // 生成token
    const token = jwt.sign({
        id: result._id
    }, SECRET)


    res.send({
        result,
        token
    })

})


// 中间键
const auth = async (req, res, next) => {
    // 获取taken
    const raw = String(req.headers.authorization).split(' ').pop()
    const { id } = jwt.verify(raw, SECRET)
    req.user = await User.findById(id)

    next()
}

// 获取个人信息（登陆操作之后）
app.get('/api/profile',auth, async (req, res) => {

    res.send(req.user)
})




app.listen(3001, () => {
    console.log('server runing in localhost:3001')
})