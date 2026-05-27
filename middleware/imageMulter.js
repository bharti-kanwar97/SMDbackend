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

const storage = multer.diskStorage({});

const upload = multer({ storage });

export { upload };