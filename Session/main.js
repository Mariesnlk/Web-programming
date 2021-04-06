let express = require('express');
let fs=require("fs");

let server=express();
server.listen(7777);
console.log('Server is running on port 7777');
const fName="counter.txt";
let fSession = true;

server.use(express.static(__dirname));

server.get('/', function(req, res){
    console.log("Client connected");
    let c=fs.readFileSync(fName);
    if (fSession) {
        c++;
        fSession = false;
    }
    console.log("There were "+c+" connections from dear clients");
    fs.writeFileSync(fName,c);
    res.send("This page has been visited "+c+" times");
});