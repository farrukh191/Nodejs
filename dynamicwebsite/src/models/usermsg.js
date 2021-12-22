const mongoose = require('mongoose');
const validator = require('validators');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id");
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:11
    },
    message:{
        type:String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

// we need to create a collection

const Users = mongoose.model("Usermsg", userSchema);
module.exports = Users;
