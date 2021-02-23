const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000


//Template Engine loading
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.get('/', function(req, res){
    res.render('index')
})

app.listen(3000, function(){
    console.log('Server listening to port 3000')
})