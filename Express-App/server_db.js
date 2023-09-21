const express = require('express')
const app = express()

const Pool = require('pg').Pool
const pool = new Pool({
  // user: 'me',
  host: 'localhost',
  database: 'db11',
  // password: 'password',
  port: 5432,
})

// pool.connect((err, client, release) => {
// 	if (err) {
// 			return console.error(
// 					'Error acquiring client', err.stack)
// 	}
// 	client.query('SELECT NOW()', (err, result) => {
// 			release()
// 			if (err) {
// 					return console.error(
// 							'Error executing query', err.stack)
// 			}
// 			console.log("Connected to Database !")
// 	})
// })

app.get('/data', (req,res)=>{
	pool.query('select * from test',(err,result)=>{
		if(err)
		throw err;
		res.json(result.rows)
	})
})

app.get('/data/:id',(req,res)=>{
	const id = req.params.id;

	pool.query('select * from test where id=$1',[id],(err,result)=>{
		if(err)
		throw err;
		res.json(result.rows)
	})
})
app.set("view engine", "ejs")
app.get('/', (req,res)=>
res.render('form_data')
// res.send(`<form method')
)

app.use(express.urlencoded())

app.post('/data',(req,res)=>{
	// const {id,name,age} = req.body;
	const id=req.body.id;
	const name=req.body.name;
	const age= parseInt(req.body.age);
	console.log('id',id)
	pool.query('insert into test(id,name,age) values($1,$2,$3)',[id,name,age],(err,result)=>{
		if(err)
		throw err;
		// res.send('data inserted')
		res.redirect('/data')
	})
})
	
app.put('/data/:id',(req,res)=>{
	const id=req.params.id;
	const name= req.body.name;
	pool.query("UPDATE test SET name=$1 where id=$2",[name,id], (err,result)=>{
	if(err)
	throw err
	res.redirect('/data')
	}
	)
})

app.delete('/data/:id',(req,res)=>{
	const id=req.params.id;

	pool.query("DELETE from test where id=$1",[id], (err,result)=>{
	if(err)
	throw err
	res.redirect('/data')
	}
	)
})

app.listen(3000,()=>console.log("server running"))

