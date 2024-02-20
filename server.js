const express = require('express')
const userRoute = require('./user')


const app = express()
app.use(express.json())
app.use('/user', userRoute)

app.listen(8080,'0.0.0.0',()=>{
    console.log("server started on port 8080")
})


