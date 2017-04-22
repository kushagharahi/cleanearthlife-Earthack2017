var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors());


app.get('/', function (req, res) {
    var username = {
        username: 'helloworld'
    }
  res.send(username)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})