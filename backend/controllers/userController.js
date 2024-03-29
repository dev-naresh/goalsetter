const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

//Register user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Checking the existance
    const userExists = await User.findOne({email})

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: genTkn(user._id),         
        })
    }else{
        res.status(400)
        throw new Error('Invalid user')
    }

    if(userExists){
        res.status(400)
        throw new Error('User exist')
    }

})

//Login user
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body

    //Check for user
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: genTkn(user.id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user login')
    }

    res.json ({message:'Login user'})
})

//Get user
const getUser = asyncHandler( async(req, res) => {
    
    res.status(200).json(req.user)
})

//Generte JWT token
const genTkn = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getUser,
}