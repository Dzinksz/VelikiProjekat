var express = require('express');
var app = express()
var port = 3200;
    

app.use('public', express.static('public'));

app.use('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

});
app.listen(port);

console.log('Server started at http://localhost:%s/', port);