const User = require('../models/User/User')

const fetchUsers = async (usersList) => {
    let users = [] 
    for(let i = 0; i< usersList.length; i++){
        let user 
        try{
            user = await User.findById(usersList[i]) 
        } catch (error){
            console.log(error)  
        }  
        users = [...users, {username: user.username, id : user._id, followers: user.followers.length}]
    }
    return users
}
module.exports = fetchUsers