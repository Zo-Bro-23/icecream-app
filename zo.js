const express = require('express')
const menu = require('./api/menu')
const customer = require('./api/customer')
const message = require('./api/message')
const app = express()
const port = 5210

app.get('/menu', menu)
app.post('/customer', customer)
app.get('/message', message)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))