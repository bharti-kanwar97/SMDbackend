import express from 'express'
import Subject from '../models/subjects.models.js'
import {getAllSubjects, subjectDetail,createSubject, updateSubject, deleteSubject} from '../controllers/subjects.controllers.js'
import { upload } from '../middleware/imageMulter.js'

const router = express.Router()




// show all subjects
router.get('/', getAllSubjects);


// show Subject detail
router.get('/:id', subjectDetail);


// create a subject
router.post(
  '/addSubject',
  upload.fields([
    {name: 'subLogo', maxCount: 1},
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 }
  ]),
 createSubject
);

// updat a subject
router.put('/updateSubject/:id',
   upload.fields([
    {name: 'subLogo', maxCount: 1},
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 }
  ]),
  updateSubject)

// delete a subject
router.delete('/deleteSubject/:id', deleteSubject)
export default router;