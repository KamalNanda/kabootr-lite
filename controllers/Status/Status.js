const User = require('../../models/User/User')
const Status = require('../../models/Status/Status') 
const fetchStatusesByCreatorId = require('../../utils/statusUtils')

const createNewStatus = async (req, res, next) => {
    const {body, createdBy} = req.body 
    let creator 
    try{
        creator = await User.findById(createdBy)
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }   
    let newStatus = new Status({
        body, createdBy : creator._id, creatorName: creator.username
    }) 
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
    let myStatusList = [] 
    try{
        user = await User.findById(userId)
        myStatusList = await Status.find({createdBy : userId})
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    } 
    let followingList = user.followings
    if(followingList.length > 0){
        let statusList = await fetchStatusesByCreatorId(followingList)
        return res.status(201).json({statuses : [...myStatusList, ...statusList]})
    }
    else res.status(201).json({statuses : myStatusList})
}

exports.createNewStatus = createNewStatus
exports.fetchStatusByFollowingList = fetchStatusByFollowingList