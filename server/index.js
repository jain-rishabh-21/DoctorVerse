
require('./db/mongoose.js')
const express=require('express')
const app=express()
const port=process.env.PORT || 4000
app.use(express.json())
 

const userRoute=require('./routes/user')
const doctorRoute=require('./routes/doctor')
app.use(userRoute);
app.use(doctorRoute);


app.listen(port,()=>{
    console.log("Backend server is listening on port 4000")
})