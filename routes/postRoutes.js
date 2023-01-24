const express = require('express');

const postController = require('../controllers/postsController');

const router = express.Router();

router.get('/posts', postController.post_index);
router.get('/posts/:id', postController.post_details);
router.get('/create_post_get/', postController.post_create_get);
router.get('/create_post/', postController.post_create_post);
router.get('/update_posts/:id/', postController.post_update_post);
router.get('/patch_posts/:id/', postController.post_patch_post);
router.get('/delete_posts/:id', postController.post_delete_post);
router.get('/user_posts/:id', postController.post_filter_post);
router.get('/post_comments/:id', postController.post_list_nested);

module.exports = router;
