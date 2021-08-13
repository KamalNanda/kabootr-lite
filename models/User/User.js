const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        required : true 
    },
    password : {
        type : String,
        required : true
    },   
    followings : {
        type : Array,
        default : []
    },
    followers : {
        type : Array,
        default : []
    },
    createdStatus : {
        type : Array,
        default : []
    },
    likedStatus : {
        type : Array,
        default : []
    }, 
})

module.exports = mongoose.model("User" , userSchema)