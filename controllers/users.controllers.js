import express from 'express'
import User from '../models/users.models.js'
import {body, validationResult} from 'express-validator'


export const createUser = async (req, res) => {
    try{
     const {name, email, phone, about, msg} = req.body;
    
    
      //   return res.status(400).send({error: error.array()[0].msg})
     
     const user = await User.create({name, email, phone, about, msg})
     console.log(user)
     res.status(201).json({
        sucess: true,
        data: user
     })
    }
    catch(error) {
       res.status(500).json({message: error.message}) 
    }
}