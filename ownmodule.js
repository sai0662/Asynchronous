var http = require('http')

var add = require('./creatingownmodule');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write("sum of 2 numbers :" +add.add(5,5));
    res.end();
}).listen(8081);

/*const add = require('./creatingownmodule.js');

console.log(add(4,5));*/