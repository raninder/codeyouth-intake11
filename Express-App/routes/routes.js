const express= require('express')

const userrouter = express.Router()
const adminrouter = express.Router()

userrouter.get('/',(req,res)=>  ///user/
res.send("home Page user"))

userrouter.get('/about',(req,res)=>  // /user/about
res.send("about us page user"))

adminrouter.get('/',(req,res)=>   // /admin/
res.send("home Page admin"))

adminrouter.get('/about',(req,res)=>  //  /admin/about
res.send("about us page admin"))

module.exports={userrouter,adminrouter}