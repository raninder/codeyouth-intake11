const express = require('express')
const app = express();

app.set("view engine","ejs")
app.get('/',(req,res)=>
res.render('index',{user:{id:2,name:'Alex',address:'Canada'}})
// res.render('index',{user:'Bobby'})
)
const data=[
	{

	},
	{

	}
]
app.get('/users',(req,res)=>
res.render('index',)
// res.render('index',{user:'Bobby'})
)
app.get('/list',(req,res)=>
res.render('test'))

app.listen(3000,()=>console.log("server running"))