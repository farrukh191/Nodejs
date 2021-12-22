const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: Number
  },
  password: {
    type: Number
  }
})

  studentSchema.pre("save", async function(next){
    if(this.isModified("password")){
        console.log(`before hasing password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`after hasing password is ${this.password}`);
    }
    next();
  })


  module.exports = new mongoose.model("Student",studentSchema);
