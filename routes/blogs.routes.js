import express from 'express'
import Blog from '../models/blogs.models.js'
import {allBlogs, blogDetail, createBlog,updateBlog, deleteBlog} from '../controllers/blogs.controllers.js'
import { upload } from '../middleware/imageMulter.js'

const router = express.Router()

// show all blogs
router.get('/', allBlogs);

// create blog
router.post('/addblog',upload.single("image"), createBlog);


// UPDATE A BLOG
router.put('/updateblog/:id',upload.single("image"),updateBlog)

// show blog detail
router.get('/:id', blogDetail);

// delete a blog
router.delete('/deleteBlog/:id',deleteBlog)

 export default router;