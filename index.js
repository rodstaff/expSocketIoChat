// codeDirectory:  "expSocketIOChatW"
// versions node@4.4.3
//          express@4.10.2
//          socket.io@1.2.0
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var appPort = 8001;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(appPort, function(){
    console.log('listening on ' + appPort);
});