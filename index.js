require("dotenv").config()
const express = require("express")
const app = express()
// const port = 3000 //It should be in .env file 

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/twitter', (req, res) => {
    res.send("saadArfin")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at chai aur code</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})