let http = require('http');
let express = require('express');

const PORT=7777;

let server=express();
server.listen(PORT);
console.log(`Server is running on port ${PORT}`);


server.use(express.static(__dirname));

server.get('/', function(req, res){
    res.send("Ready to serve");
});

