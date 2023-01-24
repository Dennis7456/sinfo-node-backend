const { json } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args));

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

//get all photos
const photo_index = async function (req, res) {
    let resource = 'photos/'
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

//get single photo
const photo_details = async function (req, res) {
    let photo_id = req.params.photo_id;
    let resource = 'photos/'
    const uri = BASE_URL + resource + photo_id;
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

//render photo form to create new photo
const photo_create_get = (req, res) => {
    res.render('photo_form', {title: 'Create New Photo'});
}

//create new photo
const photo_create_photo = async function (req, res) {
    let resource = 'photos/'
    const uri = BASE_URL + resource;
    const options = {
        method: 'POST',
        body: JSON.stringify({
            albumId: 1,
            title: 'foo',
            url: 'bar',
            thumbnailUrl: 'test.png',
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

//update a photo
const photo_update_photo = async function (req, res) {

    let photo_id = req.params.photo_id;
    let resource = 'photos/'
    const uri = BASE_URL + resource + photo_id;

    const options = {
        method: 'PUT',
        body: JSON.stringify({
            albumId: 1,
            title: 'foo',
            url: 'test@test.net',
            thumbnailUrl: 'test.png'
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

//patch a photo
const photo_patch_photo = async function (req, res) {
  
    let photo_id = req.params.photo_id;
    let resource = 'photos/'
    const uri = BASE_URL + resource + photo_id;

    
    const options = {
        method: 'PATCH',
        body: JSON.stringify({
            id: photo_id,
            albumId:2,
            title: 'foo',
            url: 'bar',
            thumbnailUrl: 'testchanged.png'
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

//delete a photo
const photo_delete_photo = async function (req, res) {

    let photo_id = req.params.photo_id;
    let resource = 'photos/'
    const uri = BASE_URL + resource + photo_id;

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

//filter photo
const photo_filter_photo = async function (req, res) {
    let album_id = req.params.album_id;
    let resource = 'photos/?albumId=';
    const uri = BASE_URL + resource + album_id;
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
    photo_index,
    photo_details,
    photo_create_get,
    photo_create_photo,
    photo_update_photo,
    photo_patch_photo,
    photo_delete_photo,
    photo_filter_photo
    
}