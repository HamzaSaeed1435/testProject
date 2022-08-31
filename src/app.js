const express = require('express')
const path = require('path');
const dotenv = require('dotenv').config();
const userRouter = require('./routers/user')
const category =require('./routers/category')
const carRouter = require('./routers/car')
require('./db/mongoose')

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(category)
app.use(carRouter)


app.listen(port, () => {
    console.log('server listening on port ' + port)
})