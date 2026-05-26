import Subject from "../models/subjects.models.js";

// GET ALL SUBJECTS
export const getAllSubjects = async (req, res) => {
    try{
       const allSubjects = await Subject.find();
       if(!allSubjects){
        return res.status(404).json({message: 'No subjects found'})
       }
       res.json(allSubjects)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

// TO GET SUBJECT'S DETAIL
export const subjectDetail = async (req, res) => {
    try{
    const detail = await Subject.findById(req.params.id);
    console.log(detail);
    // console.log(req.params.id);
    if(!detail){
        return res.status(404).json({message: 'Subject not found'})
    }
     res.status(200).json(detail)
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
}

// TO CREATE SUBJECT
export const createSubject = async (req, res) => {
    try{
       const {name, shortDesc,duration,projects,students,stPackage,endPackage, content1, content2} = req.body;
      const subLogo = req.files?.subLogo?.[0]?.filename || "";
      const image1 = req.files?.image1?.[0]?.filename || "";
      const image2 = req.files?.image2?.[0]?.filename || "";
      const subject = await Subject.create({
        name,
        subLogo,
        shortDesc,
        duration,
        projects,
        students,
        stPackage,
        endPackage,
        image1,
        content1,
        image2,
        content2
      })
      res.status(201).json(subject)
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
}

// TO UPDATE A SUBJECT
export const updateSubject = async (req, res) => {
    try{
        const updatedData = {
      ...req.body,
    };

    // subLogo
    if (req.files?.subLogo) {
      updatedData.subLogo =
        req.files.subLogo[0].filename;
    }

    // image1
    if (req.files?.image1) {
      updatedData.image1 =
        req.files.image1[0].filename;
    }

    // image2
    if (req.files?.image2) {
      updatedData.image2 =
        req.files.image2[0].filename;
    }
     const updatedSubject = await Subject.findByIdAndUpdate(req.params.id, updatedData,{new: true})
     if(!updatedSubject){
        return res.status(404).json({message: 'Subject not found'})
     }
     res.json(updatedSubject)
     console.log(updatedSubject)
    }
    catch(error){
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

// TO DELETE A SUBJECT
export const deleteSubject  = async (req, res) => {
    try{
       const deleteSubject = await Subject.findByIdAndDelete(req.params.id);
       if(!deleteSubject){
        return res.status(404).json({message: 'Subject not found'})
       }
       res.json(deleteSubject)
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
}