const express = require('express');
let fs = require('fs');
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

//path for views
let path = './views/';

//listen for requests
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

//static
//app.use(express.static('public'));

//morgan logs
app.use(morgan('dev'));

//respond
app.get('/', (req, res) => {
    // res.render('index', {title: 'Home Page'});
    // console.log(path);
    fs.readFile(path + 'index.html', function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
        }
        res.end();
    });
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
// app.use(notFoundRoute);

