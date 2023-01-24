const { json } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

//get all comments
const comment_index = async function (req, res) {
    let resource = 'comments/'
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

//get single comment
const comment_details = async function (req, res) {
    let id = req.params.id;
    let resource = 'comments/'
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

//render comment form to create new comment
const comment_create_get = (req, res) => {
    res.render('comment_form', {title: 'Create New Comment'});
}

//create new comment
const comment_create_comment = async function (req, res) {
    let post_id = req.params.post_id;
    let resource = 'posts/'
    const uri = BASE_URL + resource + post_id + '/comments';
    const options = {
        method: 'POST',
        body: JSON.stringify({
            postId: post_id,
            name: 'foo',
            email: 'test@test.com',
            body: 'bar',
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

//update a comment
const comment_update_comment = async function (req, res) {

    let comment_id = req.params.comment_id;
    let resource = 'posts/'
    const uri = BASE_URL + resource + comment_id;

    const options = {
        method: 'PUT',
        body: JSON.stringify({
            id: comment_id,
            name: 'foo',
            email: 'test@test.com',
            body: 'bar',
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

//patch a comment
const comment_patch_comment = async function (req, res) {
  
    let comment_id = req.params.comment_id;
    let resource = 'comments/'
    const uri = BASE_URL + resource + comment_id;

    
    const options = {
        method: 'PATCH',
        body: JSON.stringify({
            id: comment_id,
            name: 'foo',
            email: 'test@test.net',
            body: 'bar'
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

//delete comment
const comment_delete_comment = async function (req, res) {

    let comment_id = req.params.comment_id;
    let resource = 'comments/'
    const uri = BASE_URL + resource + comment_id;

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

//filter comments
const comment_filter_comment = async function (req, res) {
    let post_id = req.params.post_id;
    let resource = 'comments/?postId=';
    const uri = BASE_URL + resource + post_id;
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
    comment_index,
    comment_details,
    comment_create_get,
    comment_create_comment,
    comment_update_comment,
    comment_patch_comment,
    comment_delete_comment,
    comment_filter_comment
    
}