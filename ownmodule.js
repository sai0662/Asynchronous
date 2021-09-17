var http = require('http')

var dt = require('./creatingownmodule');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write("the current date and time :" +dt.myDateTime());
    res.end();
}).listen(8081);