const User = require('../../models/User/User')
const Status = require('../../models/Status/Status')
const StatusID = require('../../models/Status/StatusIDs')

const createNewStatus = async (req, res, next) => {
    const {body, createdBy} = req.body
    let newStatus = new Status({
        body, createdBy
    })
    let fetchStatusId  
    try{
        fetchStatusId = await StatusID.findOne({createdBy})
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    }
    if(fetchStatusId) {
        fetchStatusId.statusIds = [...fetchStatusId.statusIds, newStatus._id]
    } else {
        fetchStatusId = new StatusID({createdBy, statusIds : [newStatus._id]})
    }
    try{
        await fetchStatusId.save()
        await newStatus.save()
    } catch (error){
        console.log(error)
        next(error)
        return res.status(500).json({error : 'Internal Server Error'})
    } 
}