const express = require('express')
const app = express()

app.get('/main', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
  res.send('Hello home')
})

app.get('/contact', function (req, res) {
  res.send('Hello contact')
})

app.get('/about', function (req, res) {
  res.send('Hello about')
})


app.listen(3000,()=>{
  console.log("Server running at 3000")
})