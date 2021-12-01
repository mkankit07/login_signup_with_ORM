const express=require('express')
const app =express();

const users=require('./routes/user')

app.use(express.json())

app.use('/',users)

const PORT =process.env.db_port||8000;
app.listen(PORT,()=>{
    console.log(`server is runing on PORT ${PORT}`)
});
