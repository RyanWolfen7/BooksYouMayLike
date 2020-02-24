const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3005

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
var cors = require('cors');
app.use(cors())

// Routes
require('./app/routes/books.routes')(app)

app.listen(port, () => {
    console.log('Server is live on port 3005')
})