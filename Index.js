const express=require('express')
const app=express()
const mongoose=require('mongoose')
const db='mongodb+srv://rahul009:Accurate@cluster0.xux6xnw.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db).then(res=>console.log("Database connected"))
.catch(e=>console.log(e.message))
const port=5000
app.get('/',(req,res)=>{
    res.send("app is runninng correctly")
})
app.listen(port,()=>{
    console.log(`App is listing on the ${port}`)
})





 