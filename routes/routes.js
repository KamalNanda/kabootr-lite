const express= require('express')  
const userControllers = require('../controllers/blog') 
const router = express.Router() 


router.get('/' , (req , res , next)=> {
    res.json("Blogging System Made with ❤ By Kamal Nanda")
}) 

// USER ROUTES
router.post('/user/register', userControllers.register)
router.post('/user/login', userControllers.login)
router.get('/user/follow', userControllers.followUser)

// STATUS ROUTES
router.post('/status/create', userControllers.createNewStatus)
router.get('/user/fetchStatus', userControllers.fetchStatusByFollowingList)

