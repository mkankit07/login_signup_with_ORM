const express=require('express');
const router=express.Router();

const UserService=require('../service/user');
const service =new UserService()

router.get('/homepage',(req,res)=>{
    console.log({"success":"welcome on the home page !"})
    res.send({"success":"welcome on the home page !"}).status(201)
})

router.post('/signup',async(req,res)=>{
    service.create(req.body).then((data)=>{
        console.log({"success":"successfully signed up"});
        res.send(data)
    }).catch((err)=>{
        console.log(err);
        res.send(err)

    })

})

router.get('/login', (req, res) => {
    service.loginById(req.body).then((data) => { 
        console.log('successfull login')
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})


module.exports=router
