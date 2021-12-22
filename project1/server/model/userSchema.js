const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    message: [{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }],
    tokens: [{
        tokenn: {
            type: String,
            required: true
        }
    }]
})

// generate token

userSchema.methods.generateAuthToken = async function () {
    try {
        console.log(`person id ${this._id}`);
        // const token = jwt.sign({_id:this._id.toString()}, "mynameisfarrukhferoziamfullstackwebdevloper");
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ tokenn: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}


// store message wala part h ye

userSchema.methods.Addmsg = async function (name, email, phone, message) {
    try {
        this.message = this.message.concat({ name, email, phone, message });
        await this.save();
        return this.message;
    } catch (error) {
        console.log(error);
    }
}




// generate hashing for password 

// npm package first install "npm i bcryptjs"

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(`before hasing password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`after hasing password is ${this.password}`);
    }
    next();
})

const user = mongoose.model('USER', userSchema);
module.exports = user;