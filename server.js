const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')

const connectDB = require('./config/db')

// we need to read config files
dotenv.config({path: './config/config.env'})

// then we should require app 
const app = require('./app')

// connect to the Database
connectDB()

const PORT = process.env.PORT || 3000


const server = app.listen(PORT, console.log(`Server is running on the ${process.env.NODE_ENV} mode on the ${process.env.PORT}`.bold.yellow))

// handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // close the server
    server.close(() => {
        process.exit(1)
    })
})
