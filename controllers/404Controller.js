const express = require('express');

const index = (req, res) => {
    res.render('404', {title: 'Resource Not Found'});
}

module.exports = {
    index
}