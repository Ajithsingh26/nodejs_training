var http = require('http');
var fs = require('fs')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);
}).listen(3000,'127.0.0.1');