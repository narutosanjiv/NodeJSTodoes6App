const express = require('express')
const app = express()
const routes = require('./routes')
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', routes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

