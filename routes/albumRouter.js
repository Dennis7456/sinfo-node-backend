const express = require('express');

const albumsController = require('../controllers/albumsController');

const router = express.Router();

router.get('/albums', albumsController.album_index);
router.get('/albums/:album_id', albumsController.album_detail);
router.get('/create_album_get/', albumsController.album_create_get);
router.get('/create_album/', albumsController.album_create_album);
router.get('/update_albums/:album_id/', albumsController.album_update_album);
router.get('/patch_albums/:album_id/', albumsController.album_patch_album);
router.get('/delete_albums/:album_id', albumsController.album_delete_album);
router.get('/user_albums/:user_id', albumsController.album_filter_album);
router.get('/album_photos/:album_id', albumsController.album_list_nested);

module.exports = router;
