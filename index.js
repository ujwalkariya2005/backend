// import the dotenv package to load environment variables from the .env file
require('dotenv').config()

// import the express package to create our web server application
const express = require('express')  // or you may use `import express from 'express'` which is a modern standard

// create an express application instance (our core server engine)
const app = express()

// define the port number our server will listen on, pulled securely from environment variables
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hi')
})

app.get('/ujwal', (req, res) => {
    res.send('ujwal.com')
})

// start the server on the designated port and execute the callback function once it is online
app.listen(process.env.PORT, () => {
  // print a confirmation message in the terminal once the server is successfully running
  console.log(`example app listening on port ${port}`)
})