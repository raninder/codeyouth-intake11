const express = require('express')  //import
const app = express()  //creating an instance of express for server application

// app.get('/',(req,res)=>{   //method to handle request
// 	res.send('Hello World')
// })
app.get('/profile',(req,res)=>
res.send("Profile page")
)
app.get('/about',(req,res)=>
res.send("<h1>About us page<h1>")
)
const data= [
		{id:1,
		title:'watch',
		price:200
		},
		{id:2,
			title:'iphone',
			price:1200
		},
		{id:3,
			title:'laptop',
			price:800
		}
	];
	// app.get('/move',(req,res)=>{
	// 	res.redirect('htpps://google.com')
	// })
	app.use(express.static('public'))  //middleware function to dispaly static data
app.get('/user',(req,res)=>{
	res.json(data);
	// res.json([
	// 	{id:1,
	// 	title:'watch',
	// 	price:200
	// 	},
	// 	{id:2,
	// 		title:'iphone',
	// 		price:1200
	// 	},
	// 	{id:3,
	// 		title:'laptop',
	// 		price:800
	// 	}
	// ])
})
app.listen(8080,()=>console.log("server running at port 8080"))  //listening to port 8080