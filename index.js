var port = process.env.PORT || 3002,
    socket = require('socket.io'),
    express = require('express'),
    fs = require('fs');


var app = express();
//    io = socket.listen(app.listen(port));
app.listen(port);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendfile('index.html');
});

app.post ('/', function(req,res){
    req.on('data', function(data){
        console.log('requset: ', data.toString());   
        res.write('Write: '+ data.toString());
    });
    req.on('end', function(){
        console.log('the end ');
        res.end();
    });
});


console.log('Listen on ' + port + ' dir ' + __dirname);
