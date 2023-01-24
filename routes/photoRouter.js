const express = require('express');

const photosController = require('../controllers/photosController');

const router = express.Router();

router.get('/photos', photosController.photo_index);
router.get('/photos/:photo_id', photosController.photo_details);
router.get('/photo_create_get', photosController.photo_create_get);
// router.get('/comment_create/:post_id', commentsController.comment_create_comment);
// router.get('/update_comments/:comment_id/', commentsController.comment_update_comment);
// router.get('/patch_comments/:comment_id/', commentsController.comment_patch_comment);
// router.get('/delete_comments/:comment_id', commentsController.comment_delete_comment);
// router.get('/post_comments/:post_id', commentsController.comment_filter_comment);

module.exports = router;
