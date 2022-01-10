var fs = require('fs')

// creating a file

fs.appendFile('new_file.txt',"hello",function(err){
    if (err) throw err;
    console.log("saved")
})

// deleting a file

fs.unlink('new_file.txt',function(){
    console.log("deleted successfully")
})


// creating a folder

fs.mkdir('new folder',function(){
    console.log("created successfully")
});

// deleting a folder

fs.rmdir('new folder',function(){
    console.log("deleted successfully")
});