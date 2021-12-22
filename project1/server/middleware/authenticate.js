// const jwt = require('jsonwebtoken');
// const { Error } = require('mongoose');
// const userSchema = require('../model/userSchema');

// const authenticate = async(req, res, next)=>{
//     try {
//         const token = req.cookies.jwt;
//         console.log(token);
//         console.log(res._id);
//         res.json(token);
//         const verifyUsr = jwt.verify(token, process.env.SECRET_KEY);
//         console.log(verifyUsr);
//         const rootuser = await userSchema.findOne({_id:verifyUsr._id, "tokens.tokenn": token});
//         console.log(rootuser.firstname);

//         if(!user){
//             throw new Error('User Not Found');
//         }
// // for logout only 2 line code
//         req.rootuser = rootuser;
//         req.token = token;
//         req.userId = user._id;

//         next();
//     } catch (err) {
//         res.status(400).send(err);
//     }
// }

//module.exports = authenticate;

const jwt = require('jsonwebtoken');
const { Error } = require('mongoose');
const userSchema = require('../model/userSchema');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        // console.log(token);
        // if (!token) {
        //     console.log('kam nhi krha h');
        // } else {
        //     console.log('kam krha h');
        // }
        const verifyUsr = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(verifyUsr);
        const rootuser = await userSchema.findOne({ _id: verifyUsr._id });
        console.log(rootuser);
        // for logout only 2 line code
        req.rootuser = rootuser;
        req.token = token;
        req.id = rootuser._id;

        next();
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = auth;
