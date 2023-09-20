const express = require('express')
const app = express();
const {data,message} = require('./data')
console.log("data",data)

message()
app.set("view engine","ejs")
app.get('/',(req,res)=>
// res.render('index',{user:{id:2,name:'Alex',address:'Canada'}})
res.render('form_data')
)

app.get('/users',(req,res)=>
res.render('test',{users:data})
)

app.get('/alldata',(req,res)=>{
res.json(data)

}
)

app.use(express.urlencoded())
app.post("/post",(req,res)=>{
	const newdata = req.body;
	// res.send(newdata)
	data.push(newdata)
	res.redirect('/alldata')
})


// app.get('/users/:id',(req,res)=>{
// 	const id = Number(req.params.id);
// 	let user = data.find((ele)=>ele.id==id)
// 	res.json(user)
// }
// )
console.log("uname")
app.get('/users/:name',(req,res)=>{
	const uname = req.params.name;
	// res.send(`name:${uname} `)
	let user1 = data.find((ele)=>ele.name==uname)
	res.send(user1)
}
)

app.get('/list',(req,res)=>
res.render('test'))

app.listen(3000,()=>console.log("server running"))