const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//respond
app.get('/', (req, res) => {
    res.render('index')
});