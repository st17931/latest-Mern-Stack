import asyncHandler from "express-async-handler"

//@desc  Auth user/set token
//@route POST /api/users/auth
//@access public

const authUser =  asyncHandler(async(req,res)=>{
    res.status(200).json({ message: 'Auth User'});
})

//@desc  Register a new user
//@route POST /api/users
//@access Public

const registerUser =  asyncHandler(async(req,res)=>{
    res.status(200).json({ message: 'Register User'});
})

//@desc  Logout user
//@route POST /api/user/logout
//@access public

const logoutUser =  asyncHandler(async(req,res)=>{
    res.status(200).json({ message: 'Logout User'});
})

//@desc  get user profile
//@route POST /api/users/profile
//@access private
const getUserProfile =  asyncHandler(async(req,res)=>{
    res.status(200).json({ message: 'Get User Profile'});
})

//@desc  update user profile
//@route PUT /api/user/profile
//@access public

const updateUserProfile =  asyncHandler(async(req,res)=>{
    res.status(200).json({ message: 'Update User Profile'});
})


export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}

