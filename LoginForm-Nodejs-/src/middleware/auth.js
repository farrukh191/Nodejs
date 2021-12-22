const jwt = require('jsonwebtoken');
const Register = require('../models/register');

const auth = async(req, res, next)=>{
    try {
        const token = req.cookies.jwt;
        console.log(`ueyu udyiu df uyduyidf duyfdi ${token}`);
        const verifyUsr = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyUsr);
        const user = await Register.findOne({_id:verifyUsr._id});
        console.log(user.firstname);
// for logout only 2 line code
        req.user = user;
        req.token = token;

        next();
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = auth;