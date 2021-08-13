const express= require('express')  
const userControllers = require('../controllers/User/User') 
const statusControllers = require('../controllers/Status/Status') 
const router = express.Router() 


router.get('/' , (req , res , next)=> {
    res.json("Blogging System Made with ❤ By Kamal Nanda")
}) 

// USER ROUTES
router.post('/user/register', userControllers.register)
router.post('/user/login', userControllers.login)
router.put('/user/follow', userControllers.followUser)

// STATUS ROUTES
router.post('/status/create', statusControllers.createNewStatus)
router.get('/status/fetchStatus/:userId', statusControllers.fetchStatusByFollowingList)

module.exports = router