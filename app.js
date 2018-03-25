const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


var app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//bodyParser stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3000, () => {
    console.log('server started on port 3000');
});
