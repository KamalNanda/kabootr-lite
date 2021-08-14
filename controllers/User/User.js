const User = require('../../models/User/User')
const fetchUsers = require('../../utils/statusUtils')

const register = async (req, res, next) => {
    const {username, password} = req.body
    console.log(req.body)
    let isUserNameExist  
    try {
        isUserNameExist = await User.findOne({username}) 
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }
    console.log(isUerNameExist)
    if(isUserNameExist){
        return res.status(409).json({error : 'User already exists with the entered Username'}) 
    } 
    let newUser = new User({
        username, password
    })
    console.log(newUser)
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
    const {username, password} = req.body
    console.log(res.body)
    let isUserExist 
    try{
        isUserExist = await User.findOne({username})
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }
    console.log(isUserExist)
    if(!isUserExist){
        return res.status(404).json({error : 'User not found with the entered User Name'})
    } 
    if(isUserExist.password !== password){
        return res.status(409).json({error : 'Entered Password is Incorrect'})
    }  
    res.status(201).json({message : 'User Logged In', user : isUserExist})
}

const followUser = async (req,res,next) => {
    const {followerId, userId} = req.body 
    let follower, user
    try{
        follower = await User.findById(followerId)
        user = await User.findById(userId)
    }
    catch(error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }  
    let followingsList = user.followings
    let followersList = follower.followers
    if(followingsList.indexOf(followerId) === -1 ){                   // User not following the follower yet
        followingsList.push(followerId)                                 // User following the follower
        followersList.push(userId)
    }
    else{                                                             // User already following the follower   
        followingsList.splice(followingsList.indexOf(followerId), 1)    // User unfollowing the follower
        followersList.splice(followersList.indexOf(userId), 1)      
    }
    user.followings = followingsList
    follower.followers = followersList
    try{
        await user.save()
        await follower.save()
    }
    catch(error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }  
    res.status(200).json({user, message: "User Followed"}) 
} 
const fetchAllUsers = async () => {
    let users = []
    try{
        users = await User.find({})
    } catch(error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }  
    return res.status(200).json({users})
}

const fetchFollowings = async () => {
    const {userId} = req.body.params
    let user  
    let followings = []
    try{
        user = await User.findById(userId)
    } catch(error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }  
    followings = await fetchUsers(user.followings)
    res.status(200).json({followings})
}

const fetchFollowers = async () => {
    const {userId} = req.body.params
    let user  
    let followers = []
    try{
        user = await User.findById(userId)
    } catch(error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }  
    followers = await fetchUsers(user.followers)
    res.status(200).json({followers})
}


exports.register = register
exports.login = login
exports.fetchAllUsers = fetchAllUsers
exports.followUser = followUser
exports.fetchFollowers = fetchFollowers
exports.fetchFollowings = fetchFollowings