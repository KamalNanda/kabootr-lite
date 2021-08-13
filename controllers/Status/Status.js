const User = require('../../models/User/User')
const Status = require('../../models/Status/Status') 
const {fetchStatusesByCreatorId} = require('../../utils/utils')

const createNewStatus = async (req, res, next) => {
    const {body, createdBy} = req.body
    let newStatus = new Status({
        body, createdBy
    }) 
    let creator 
    try{
        creator = await User.findById(createdBy)
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    } 
    if(creator) {
        return res.status(404).json({error : 'User not found'})
    }
    creator.createdStatus.push(newStatus._id)  
    try{ 
        await newStatus.save()
        await creator.save()
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    } 
    res.status(200).json({message : 'Status Created', status : newStatus})
}

const fetchStatusByFollowingList = async (req, res, next) => {
    const {userId} = req.params
    let user 
    try{
        user = await User.findById(userId)
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    } 
    let followingList = user.followings
    let statusList = await fetchStatusesByCreatorId(followingList)
    res.status(201).json({statuses : statusList})
}

exports.createNewStatus = createNewStatus
exports.fetchStatusByFollowingList = fetchStatusByFollowingList