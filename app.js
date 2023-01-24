const express = require('express');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');
const { comment } = require('postcss');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//static
app.use(express.static('public'));

//morgan logs
app.use(morgan('dev'));

//respond
app.get('/', (req, res) => {
    res.render('index', {title: 'Home Page'});
});


//user routes
app.use(userRoutes);

//post routes
app.use(postRoutes);

