'use strict'

const express = require('express');
const app = express();
const morgan = require('morgan');
const spiral = require('./spiral_matrix');


// register view engine default folder is views folder
app.set('view engine', 'ejs');
// app.set('views', 'anotherFolder')

// listen for requests
app.listen(3000);
//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true }));

app.use(morgan('dev'));

app.get('/', (req, res) =>{
    let dim = 'N/A';
    res.render('index', {title: 'Home', matrix: '<p>matrix shown here</p>', dim});
});

// get the dimmension
// compute
// render the result
app.post('/',(req, res, next) =>{
    console.log(req.body);
    let dim = req.body.dim;
    let matrix = spiral.spiralDisplay(dim);
    console.log(matrix);
    // reformat the result to be able to render in ejs view
    matrix = spiral.toHtmlTable(matrix);

    res.render('index', {title: 'Home', matrix, dim});
})


app.get('/about', (req, res) =>{
    res.render('about', {title: 'about'});
});

//redirects
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});
// 404 page

app.use((req, res) =>{
    res.status(404).render('404', {title: '404'});
});
//const dbURI = 'mongodb+srv://cgryanx:1994129921UPenn@webdev.rasxz.mongodb.net/<dbname>?retryWrites=true&w=majority';
