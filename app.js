const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRouter');
const albumRoutes = require('./routes/albumRouter');
const photoRoutes = require('./routes/photoRouter');
const notFoundRoute = require('./routes/404Router');

const morgan = require('morgan');
const { comment } = require('postcss');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//configure port
const PORT = process.env.PORT || 5050;

//listen for requests
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

//static
//app.use(express.static('public'));

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

//comment routes
app.use(commentRoutes);

//album routes
app.use(albumRoutes);

//photo routes
app.use(photoRoutes);

//404 route
app.use(notFoundRoute);

