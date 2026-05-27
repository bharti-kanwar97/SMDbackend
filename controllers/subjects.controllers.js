import Subject from "../models/subjects.models.js";
import { uploadToCloudinary } from "../utils/upload.js";
import cloudinary from "../config/cloudinary.js";

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
  try {

    const {
      name,
      shortDesc,
      duration,
      projects,
      students,
      stPackage,
      endPackage,
      content1,
      content2,
    } = req.body;

    let subLogo = "";
    let image1 = "";
    let image2 = "";

    // upload subLogo
    if (req.files?.subLogo) {

      const result = await uploadToCloudinary(
        req.files.subLogo[0].buffer
      );

      subLogo = result.secure_url;
    }

    // upload image1
    if (req.files?.image1) {

      const result = await uploadToCloudinary(
        req.files.image1[0].buffer
      );

      image1 = result.secure_url;
    }

    // upload image2
    if (req.files?.image2) {

      const result = await uploadToCloudinary(
        req.files.image2[0].buffer
      );

      image2 = result.secure_url;
    }

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
      content2,
    });

    res.status(201).json(subject);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// TO UPDATE A SUBJECT
export const updateSubject = async (req, res) => {
  try {

    const updatedData = {
      ...req.body,
    };

    // subLogo
    if (req.files?.subLogo) {

      const subLogoResult = await uploadToCloudinary(
        req.files.subLogo[0].buffer
      );

      updatedData.subLogo = subLogoResult.secure_url;
    }

    // image1
    if (req.files?.image1) {

      const image1Result = await uploadToCloudinary(
        req.files.image1[0].buffer
      );

      updatedData.image1 = image1Result.secure_url;
    }

    // image2
    if (req.files?.image2) {

      const image2Result = await uploadToCloudinary(
        req.files.image2[0].buffer
      );

      updatedData.image2 = image2Result.secure_url;
    }

    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedSubject) {
      return res.status(404).json({
        message: "Subject not found",
      });
    }

    res.status(200).json(updatedSubject);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

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