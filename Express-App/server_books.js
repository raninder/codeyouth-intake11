const express = require("express");
const app = express();
const port = 1234;
const allBooks = require("./books_data.js");

console.log(allBooks)
// app.use(express.static(__dirname + '/public'));
app.set("view engine", 'ejs');

app.get("/",(req, res)=>{
    // res.render("index")
		res.json(allBooks)
})

//Searching single
app.get("/title/:title", (req, res)=>{
    let query = req.params.title.toLowerCase();
    console.log(query)
    const book = allBooks.find(element => element.title.toLowerCase() == query);
    if(book){
        res.json(book)
    }else{
        res.send("WRONG")
    }
})

//Searching multiple
app.get("/author/:author",(req, res)=>{
    let query = req.params.author.toLowerCase();
    let results = [];
    for(let i = 0; i < allBooks.length; i++){
        if(allBooks[i].author.toLowerCase() == query){
            results.push(allBooks[i]);
        }
    }
    if(results.length > 0){
        res.json(results)
    }else{
        res.send("WRONG")
    }
})




app.listen(port, function(){
    console.log("Server live at " + port)
})