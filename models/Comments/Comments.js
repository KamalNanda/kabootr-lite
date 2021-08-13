const mongoose = require('mongoose')

const Schema = mongoose.Schema

const statusSchema = new Schema({
    body : {
        type : String,
        required : true
    },  
    createdBy : {
        type : Object,
        required : true
    },   
    statusId : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    },
    likedBy : {
        type : Array, 
        default : []
    }, 
})

module.exports = mongoose.model("Status" , statusSchema)