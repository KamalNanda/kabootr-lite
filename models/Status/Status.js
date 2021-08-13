const mongoose = require('mongoose')

const Schema = mongoose.Schema

const statusSchema = new Schema({
    body : {
        type : String,
        required : true
    },  
    createdBy : {
        type : String,
        required : true
    },   
    creatorName : {
        type : String, 
    },
    createdOn : {
        type : Number,
        default : Date.now()
    } 
})

module.exports = mongoose.model("Status" , statusSchema)