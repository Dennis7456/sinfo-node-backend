const { json } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

//get all album
const album_index = async function (req, res) {
    let resource = 'albums/'
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

//get single album
const album_detail = async function (req, res) {
    let album_id = req.params.album_id;
    let resource = 'albums/'
    const uri = BASE_URL + resource + album_id;
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

//render album form to create new album
const album_create_get = (req, res) => {
    res.render('album_form', {title: 'Create New Album'});
}

//create new album
const album_create_album = async function (req, res) {

    let resource = 'albums/'
    const uri = BASE_URL + resource;
    const options = {
        method: 'POST',
        body: JSON.stringify({
            userId: '1',
            title: 'foo'
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

//update a album
const album_update_album = async function (req, res) {

    let album_id = req.params.album_id;
    let resource = 'albums/'
    const uri = BASE_URL + resource + album_id;

    const options = {
        method: 'PUT',
        body: JSON.stringify({
            id:album_id,
            title: 'foo',
            userId: 1
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

//patch an album
const album_patch_album = async function (req, res) {
  
    let album_id = req.params.album_id;
    let resource = 'albums/'
    const uri = BASE_URL + resource + album_id;

    
    const options = {
        method: 'PATCH',
        body: JSON.stringify({
            userId: 1,
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

//delete album
const album_delete_album = async function (req, res) {

    let album_id = req.params.album_id;
    let resource = 'albums/'
    const uri = BASE_URL + resource + album_id;

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

//filter albums
const album_filter_album = async function (req, res) {
    let user_id = req.params.user_id;
    let resource = 'albums/?userId=';
    const uri = BASE_URL + resource + user_id;
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


//List nested album photos
const album_list_nested = async function (req, res) {

    let album_id = req.params.album_id;
    let resource = 'albums/'
    const uri = BASE_URL + resource + album_id + '/photos';
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
    album_index,
    album_detail,
    album_create_get,
    album_create_album,
    album_update_album,
    album_patch_album,
    album_delete_album,
    album_filter_album,
    album_list_nested
}