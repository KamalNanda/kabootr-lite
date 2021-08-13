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
    createdOn : {
        type : Date,
        default : Date.now
    } 
})

module.exports = mongoose.model("Status" , statusSchema)