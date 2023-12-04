import asyncHandler from "express-async-handler"

//@desc  Auth user/set token
//@route /api/user/auth
//@access public

const authUser =  asyncHandler(async(req,res)=>{
    res.status(200).json({ message: 'Auth User'});
})


export {
    authUser
};