var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('completed',function(message){
    console.log(message)
});

emitter.emit('completed',"the task is completed");