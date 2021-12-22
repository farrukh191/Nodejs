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
    phone: {
        type: Number,
        min: 10,
        unique: true,
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
