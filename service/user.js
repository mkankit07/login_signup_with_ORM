const Users=require('../modal/user')
module.exports=class UserService{
    async create (details){ 
     var dataa=await Users.query().where('email',details.email)
     if(!dataa[0]){
         return await Users.query().insert(details)

     }
     return ({'email':'already use'})
}}

