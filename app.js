const express = require('express')
const dotenv = require('dotenv')

// we need to load env variables
dotenv.config({path: './config.env'})

// initialize the express variable
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running on the ${process.env.NODE_ENV} mode on the ${process.env.PORT}`))