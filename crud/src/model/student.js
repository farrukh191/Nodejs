const mongoose = require('mongoose');

const createSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    password1:{
        type: String,
        require: true
    },
    password2:{
        type: String,
        require: true
    }
})


const register = new mongoose.model("register", createSchema);

module.exports = register;