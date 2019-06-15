const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log('mongodb has connected')
})

const User=mongoose.model('User',new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        set(val){
            return require('bcryptjs').hashSync(val,10)
        }
    }
}))


module.exports={
    User
}