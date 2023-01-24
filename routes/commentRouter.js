const express = require('express');

const commentsController = require('../controllers/commentsController');

const router = express.Router();

router.get('/comments', commentsController.comment_index);
router.get('/comments/:id', commentsController.comment_details);
router.get('/comment_create_get/', commentsController.comment_create_get);
router.get('/comment_create/:post_id', commentsController.comment_create_comment);
router.get('/update_comments/:comment_id/', commentsController.comment_update_comment);
router.get('/patch_comments/:comment_id/', commentsController.comment_patch_comment);
router.get('/delete_comments/:comment_id', commentsController.comment_delete_comment);
router.get('/post_comments/:post_id', commentsController.comment_filter_comment);

module.exports = router;
