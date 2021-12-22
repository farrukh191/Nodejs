const mongoose = require("mongoose");
const validator = require("validator");

// create new schema and validate all attributes as a following

const stdSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email address");
            }
        }
    },
    age:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    cpassword:{
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        min: 10,
        unique: true,
        require: true,
    },
    work:{
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    }
})

// we will create a new collection

const Student= new mongoose.model('Student',stdSchema);

module.exports = Student;
