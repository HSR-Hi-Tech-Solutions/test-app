const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    email:{
        required: true,
        unique: true,
        type: String
    },
    mobile:{
        required: true,
        type: String,
    },
    password:{
        required: true,
        type: String
    },
    age:{
        required: false,
        type: Number
    }
})

module.exports = mongoose.model('User', dataSchema);