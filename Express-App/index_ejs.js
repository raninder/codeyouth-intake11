const express = require('express')
const app = express();
const data = require('./data')
console.log("data",data)

app.set("view engine","ejs")
app.get('/',(req,res)=>
res.render('index',{user:{id:2,name:'Alex',address:'Canada'}})
// res.render('index',{users:data})
)

app.get('/users',(req,res)=>
res.render('test',{users:data})
)

// app.get('/users/:id',(req,res)=>{
// 	const id = Number(req.params.id);
// 	let user = data.find((ele)=>ele.id==id)
// 	res.json(user)
// }
// )
console.log("uname")
app.get('/users/:id',(req,res)=>{
	const uname = req.params.id;
	let user1 = data.find((ele)=>ele.name==uname)
	res.send(user1)
}
)

app.get('/list',(req,res)=>
res.render('test'))

app.listen(3000,()=>console.log("server running"))