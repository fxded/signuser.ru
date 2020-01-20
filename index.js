var port = process.env.PORT || 3002,
    socket = require('socket.io'),
    express = require('express'),
    fs = require('fs');


var app = express(),mp
    io = socket.listen(app.listen(port));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendfile('index.html');
});

