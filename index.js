const express = require('express')
const app = express()
const port = 5000

const path = require("path")
const casa = require('./casa')
const casa2 = require('./casa2')

const basepath = path.join(__dirname)

app.use('/casa', casa)
app.use('/casa2', casa2)


app.get('/', (req, res) => {
    res.sendFile(`${basepath}/casa/casa.html`)
})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  