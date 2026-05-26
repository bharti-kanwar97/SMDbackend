
import {body, validationResult} from 'express-validator'

 var validationRegistration = [
     body("name").notEmpty().withMessage("Name is required")
     .isLength({min: 3}).withMessage("Name must be at least 3 characters long")
      .matches(/^[A-Za-z\s]+$/).withMessage("Name must contain only alphabets"),
    body("email").notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Enter a valid email address")
    .normalizeEmail(),
    body("phone").notEmpty().withMessage("Phone number is required")
    .isLength({min: 10, max: 10}).withMessage("Enter a valid phone number"),
    body("about").notEmpty().withMessage("About is required"),
    body("msg").notEmpty().withMessage("Message is required")
    .isLength({min: 20}).withMessage("Message must be at least 20 characters long"),
    (req,res,next) => {
        const error = validationResult(req)
        if(!error.isEmpty())
        {
            return res.status(400).json({errors: error.array()})
        }
        next()
    }
]
export default validationRegistration;