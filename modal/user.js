const {Model}=require('objection')
const knex=require('../config/config')
Model.knex(knex)

class Users extends Model{
    static get tableName(){
        return 'users'
    }
    static get jsonSchema(){
        return {type:Object,
        require:['email'],
    properties:{
        id:{type:'integer'},
    name:{type:'string'},
email:{type:'string'},
passwors:{type:'string'}
}
    }
}
    }

module.exports=Users;
