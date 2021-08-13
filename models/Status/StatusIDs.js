const mongoose = require('mongoose')

const Schema = mongoose.Schema

const statusIdsSchema = new Schema({
    statusIds : {
        type : Array,
        required : []
    },  
    createdBy : {
        type : Object,
        required : true
    },    
})

module.exports = mongoose.model("StatusID" , statusIdsSchema)