const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')

// Route File
const blogs = require('./routes/blogs')

// initialize the express variable
const app = express()

// body parser
app.use(express.json())

// loggin middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Mount Routers
app.use('/api/v1/blogs/', blogs)


module.exports = app