const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});