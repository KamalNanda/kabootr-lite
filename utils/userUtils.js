const User = require('../models/User/User')

const fetchUsers = async (usersList) => {
    let users = []
    for(let i = 0; i< usersList.length; i++){
        let user 
        try{
            user = User.findById(usersList[i])
        } catch (error){
            console.log(error) 
            return res.status(500).json({error : 'Internal Server Error'})
        }  
        users = [...users, user]
    }
    return users
}
module.exports = fetchUsers