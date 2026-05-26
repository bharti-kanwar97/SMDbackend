import User from '../models/users.models.js'

// TO OPEN DASHBOARD
export const openDashboard = (req, res) => {
    res.render('dashboard')
}

// TO SHOW ALL USERS INFORMATION
export const allUsers = async (req,res) => {
     try{
       const users = await User.find();
        res.json(users)
    }
    catch(error) {
  res.status(500).json({message: error.message})
    }
}

// TO SHOW USER'S DETAIL
export const userDetail = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}