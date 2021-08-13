const express= require('express')  
const router = express.Router() 


router.get('/' , (req , res , next)=> {
    res.json("Blogging System Made with ❤ By Kamal Nanda")
}) 
 
module.exports = router