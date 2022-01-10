var http = require('http');
var fs = require('fs')


http.createServer(function(req,res){
    if(req.url == '/home'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('HOME');
    }
    if(req.url == '/index'){
        res.writeHead(200,{'Content-Type':'text/html'});
        var readStream = fs.createReadStream(__dirname + '/index.html');
        readStream.pipe(res);
    }
    else{
        res.writeHead(400,{'Content-Type':'text/html'});
        res.end('Page not found!');
    }
    
}).listen(3000,'127.0.0.1');