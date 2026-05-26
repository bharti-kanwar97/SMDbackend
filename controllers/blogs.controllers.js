import Blog from '../models/blogs.models.js'
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
export const createBlog = async (req, res) => {
    try{
        console.log(req.body)
        console.log(req.file) 
        
        const {title, content} = req.body
        const blog = await Blog.create({title, content,image: req.file.filename})
        res.json(blog)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

}

// TO UPDATE A BLOG
export const updateBlog = async (req, res) => {
    try{
       const updatedData = {...req.body};
       if (req.file) {
      updatedData.image =
        req.file.filename;
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