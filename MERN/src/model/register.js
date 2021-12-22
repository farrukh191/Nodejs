const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        require:true
    },
    work:{
        type:String,
        require:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
})

const createCol = new mongoose.model("merndata",registerSchema);
module.exports = createCol;