require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000   

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("<h1>This is my twitter id<h1>")
})
app.get('/login', (req, res) => {
    res.send("<h1>I am logged in<h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`)
})
