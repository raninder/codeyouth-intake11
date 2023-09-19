
const express= require('express')
const app = express()
const {userrouter,adminrouter} = require('./routes/routes')

app.use('/user',userrouter)
app.use('/admin',adminrouter)

app.listen(3000)