const Users=require('../modal/user')
module.exports=class UserService{
    async create (details){ 
     var dataa=await Users.query().where('email',details.email)
     if(!dataa[0]){
         return await Users.query().insert(details)

     }
     return ({'email':'already use'})
    }
    async loginById(loged) {
        const { email, password } = loged;
        if (!email || !password) {
            return ({ "Sorry": "user email or password not found" })
        }
        const logg = await Users.query().where('email', loged.email)
        console.log(logg);
        if (!logg[0]) {

            return ({ "user": "email not correct" })
        }
        if (logg[0].password===password) {
            return ({ "user": "successful login" })
        } return ({ "message": 'incorrect password' })
    }

}

