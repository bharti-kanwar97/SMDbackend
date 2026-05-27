// import multer from "multer";

// // image upload config
// const storage = multer.diskStorage({
//     destination: (req,file, cb) => {
//         cb(null, 'public/uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname)
//     }
// })
// const upload = multer({storage})
// export {upload}




import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blogs",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

export { upload };