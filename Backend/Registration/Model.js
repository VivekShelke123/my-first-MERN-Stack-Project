const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    mobile:Number,
    pass:String
})

module.exports = mongoose.model("UserCollection",userModel);