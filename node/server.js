const express = require('express')
const responsify = require('./responsify.js')
const app = express()

app.use("*", (req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.get('/', (req, res) => {

})
app.post('/', (req, res) => {
    let json = responsify({'message':'Hello World from NODEjs!'})
    res.send(json)
})

let server = app.listen(8002, () => console.log('Example app listening on port 3000!'))

process.on('exit', () => {
    server.close()
})