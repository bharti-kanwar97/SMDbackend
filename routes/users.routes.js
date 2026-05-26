import express from 'express'
import {createUser} from '../controllers/users.controllers.js'
import validatonRegistration from '../middleware/validation.js'

const router = express.Router()

router.post('/',validatonRegistration, createUser)
export default router