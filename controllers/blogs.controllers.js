import Blog from '../models/blogs.models.js'
import cloudinary from "../config/cloudinary.js";
import { uploadToCloudinary } from "../utils/upload.js";
import fs from "fs";
// TO SHOW ALL BLOGS
export const allBlogs = async (req, res) => {
    try{
     const blogs = await Blog.find()
     if(!blogs){
        return res.status(404).json({message: 'No blogs found'})
     }
     res.json(blogs)
    }
    catch(error) {
      res.status(500).json({message: error.message})
      console.log(error)
    }

}

// TO SHOW BLOG'S DETAIL
export const blogDetail = async (req, res) => {
    try{
   const blog = await Blog.findById(req.params.id)
    if(!blog){
        return res.status(404).json({message: 'Blog not found'})
    }
    res.json(blog)
    }
    catch(error){
        res.status(500).json({message: error.message})  
    }

}

// TO CREATE A BLOG
// export const createBlog = async (req, res) => {
//     try{
//         console.log(req.body)
//         console.log(req.file) 
        
//         const {title, content} = req.body

   
//         const blog = await Blog.create({title, content,image: req.file.filename})
//         res.json(blog)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }

// }


export const createBlog = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "Image not found" });
    }

    // upload image to cloudinary
    const result = await uploadToCloudinary(req.file.buffer);

    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      image: result.secure_url, // 🔥 important
    });

    res.status(201).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};




// TO UPDATE A BLOG
export const updateBlog = async (req, res) => {
    try{
       const updatedData = {...req.body};
       // If new image is uploaded
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "blogs",
      });

      updatedData.image = result.secure_url;
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedData, {new: true})
    if(!updatedBlog) return res.status(404).json({message: "Page not found"})
        res.json(updatedBlog)

    }
    catch(error){
        res.status(500).json({message: error.message})
        console.log(error)
    }

}

// TO DELETE A BLOG
export const deleteBlog = async (req, res) => {
    try{
        const blog = await Blog.findByIdAndDelete(req.params.id)
        if(!blog){
            return res.status(404).json({message: 'Blog not found'})
        }
        res.json(blog)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}