const express = require('express');

const photosController = require('../controllers/photosController');

const router = express.Router();

router.get('/photos', photosController.photo_index);
router.get('/photos/:photo_id', photosController.photo_details);
router.get('/photo_create_get', photosController.photo_create_get);
router.get('/photo_create', photosController.photo_create_photo);
router.get('/update_photos/:photo_id/', photosController.photo_update_photo);
router.get('/patch_photos/:photo_id/', photosController.photo_patch_photo);
router.get('/delete_photos/:comment_id', photosController.photo_delete_photo);
router.get('/album_photos/:album_id', photosController.photo_filter_photo);

module.exports = router;
