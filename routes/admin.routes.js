import express from 'express'
import {openDashboard, allUsers, userDetail} from '../controllers/admin.controllers.js'
import Blog from '../models/blogs.models.js'
import Subject from '../models/subjects.models.js'
const router = express.Router()

// to open dashboard
router.get('/', openDashboard);

// show all user's information

router.get('/allUsers', allUsers);

// show user's detail
router.get('/detail/:id', userDetail)



export default router;