const { json } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));




const users_index = async function (req, res) {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const options = {
        method: 'GET'
    }

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }

};

const user_details = async function (req, res) {
    let id = req.params.id;
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    const options = {
        method: 'GET'
    }

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }

};


module.exports = {
    users_index,
    user_details
    
}