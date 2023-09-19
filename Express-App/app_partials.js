const express = require('express')  //import
const app = express()  //creating an instance of express for server application

app.set('view engine', 'ejs')
app.get('/',(req,res)=>{   //method to handle request
	res.render('main')
})

app.listen(8080,()=>console.log("server running at port 8080"))  //listening to port 8080