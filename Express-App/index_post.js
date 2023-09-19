const express = require('express')
const app = express()

app.set("view engine","ejs")
app.get('/',(req,res)=>
// res.send("Hello world")
res.render('form'))

app.use(express.urlencoded())//middleware to parse request body
app.post('/register',(req,res)=>{
	// const data = req.body;
	const name = req.body.uname;
	const email = req.body.email;
	res.send(`Name:${name}, Email: ${email}`)
})


app.listen(8080,()=>console.log("server running"))