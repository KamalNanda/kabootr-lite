const Status = require('../models/Status/Status') 

const statusControllers = async (followingList) => {
    let statusList = [] 
    for(let i = 0; i< followingList.length; i++){
        let statuses 
        try{
            statuses = await Status.find({createdBy :   followingList[i]})
        } catch (error){
            console.log(error) 
            return res.status(500).json({error : 'Internal Server Error'})
        }  
        statusList = [...statusList, ...statuses]
    }  
    return statusList
}
module.exports = statusControllers