import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subLogo: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    projects: {
        type: String,
        required: true
    },
    students: {
        type: String,
        required: true
    },
    stPackage: {
        type: String,
        required: true
    },
    endPackage:{
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    content1: {
        type: String,
        required: true
    },
    image2: {
        type:String,
        required:true,
    },
    content2: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)
const Subject = mongoose.model('Subject', subjectSchema)
export default Subject