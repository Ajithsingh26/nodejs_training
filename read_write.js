var r = require('fs');

var file = r.readFileSync('demo.txt','utf8'); // synchronous
var fileasyn = r.readFile('demo.txt','utf8',function(err,data){
    console.log(data);
}) // Asynchronous

console.log(file);


r.writeFileSync('demo.txt',"hellooo")

var file = r.readFileSync('demo.txt','utf8');

console.log(file);