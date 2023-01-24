const { json } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

//get all posts
const post_index = async function (req, res) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
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

//get single post
const post_details = async function (req, res) {
    let id = req.params.id;
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
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
}

//render post form to create new post
const post_create_get = (req, res) => {
    res.render('post_form', {title: 'Create New Post'});
}

//create new post
const post_create_post = async function (req, res) {

    const url = 'https://jsonplaceholder.typicode.com/posts';
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
}

//update a post
const post_update_post = async function (req, res) {
    let id = req.params.id;
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
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
}

//patch a post
const post_patch_post = async function (req, res) {
    let id = req.params.id;
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    const options = {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
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
}

const post_delete_post = async function (req, res) {
    let id = req.params.id;
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    const options = {
        method: 'DELETE',
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
}

//filter posts
post_filter_post = async function (req, res) {
    let user_id = req.params.id;
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=' + user_id;
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
}


//List nested post comments
const post_list_nested = async function (req, res) {
    let id = req.params.id;
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
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