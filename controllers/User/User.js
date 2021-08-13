const User = require('../../models/User/User')

const register = async (req, res, next) => {
    const {username, email, password} = req.body
    let isUserNameExist, isEmailExist

    try {
        isUserNameExist = await User.findOne({username})
        isEmailExist = await User.findOne({email})
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }

    if(isUserNameExist){
        return res.status(409).json({error : 'User already exists with the entered Username'}) 
    }
    if(isEmailExist){
        return res.status(409).json({error : 'User already exists with the entered Email'}) 
    }

    let newUser = new User({
        username, email, password
    })
    try{
        await newUser.save()
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }
    res.status(200).json({message : 'User Created Successfully', user: newUser })
}

const login = async (req, res, next) => {
    const {email, password} = req.body
    let isUserExist 
    try{
        isUserExist = await User.findOne({email})
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }
    if(!isUserExist){
        return res.status(404).json({error : 'User not found with the entered Email'})
    } 
    if(isUserExist.password !== password){
        return res.status(409).json({error : 'Entered Password is Incorrect'})
    }  
    res.status(201).json({message : 'User Logged In', user : isUserExist})
}


exports.register = register
exports.login = login