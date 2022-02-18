const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middlewares/errorMiddleware')

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen (port, () => console.log(`Server is started at ${port}`))