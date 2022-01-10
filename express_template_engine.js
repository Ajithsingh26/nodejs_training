var express = require('express')

app = express();
app.set('view engine','ejs');

// post
app.get('/post/:id',function(request,response){
    response.render('blog',{'blog_id':request.params.id});
});

// aboutus
app.get('/aboutus',function(request,response){
    response.send('This is aboutus page');
});

// home
app.get('/home',function(request,response){
    response.send('This is home page');
});

app.listen(3000);