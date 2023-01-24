const { json } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

//get all posts
const post_index = async function (req, res) {
    let resource = 'posts/'
    const uri = BASE_URL + resource;
    const options = {
        method: 'GET'
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }

};

//get single post
const post_details = async function (req, res) {
    let id = req.params.id;
    let resource = 'posts/'
    const uri = BASE_URL + resource + id;
    console.log(uri);
    const options = {
        method: 'GET'
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }
}

//render post form to create new post
const post_create_get = (req, res) => {
    res.render('post_form', {title: 'Create New Post'});
}

//create new post
const post_create_post = async function (req, res) {

    let resource = 'posts/'
    const uri = BASE_URL + resource;
    const options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }
}

//update a post
const post_update_post = async function (req, res) {

    let id = req.params.id;
    let resource = 'posts/'
    const uri = BASE_URL + resource + id;

    const options = {
        method: 'PUT',
        body: JSON.stringify({
            id:id,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }
}

//patch a post
const post_patch_post = async function (req, res) {
  
    let id = req.params.id;
    let resource = 'posts/'
    const uri = BASE_URL + resource + id;

    
    const options = {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }
}

const post_delete_post = async function (req, res) {

    let id = req.params.id;
    let resource = 'posts/'
    const uri = BASE_URL + resource + id;

    const options = {
        method: 'DELETE',
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }
}

//filter posts
post_filter_post = async function (req, res) {
    let id = req.params.id;
    let resource = 'posts/?userId=';
    const uri = BASE_URL + resource + id;
    const options = {
        method: 'GET'
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }
}


//List nested post comments
const post_list_nested = async function (req, res) {

    let id = req.params.id;
    let resource = 'posts/'
    const uri = BASE_URL + resource + id + '/comments';
    const options = {
        method: 'GET'
    }

    fetch(uri, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error: ' + err));

    try {
        let response = await fetch(uri, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err){
        console.log(err);
        res.status(500).json({msg: `Internal Server Error`});
    }
}


module.exports = {
    post_index,
    post_details,
    post_create_get,
    post_create_post,
    post_update_post,
    post_patch_post,
    post_filter_post,
    post_list_nested,
    post_delete_post
}