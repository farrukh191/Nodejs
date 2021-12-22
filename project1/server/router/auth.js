const express = require('express');
const app = express();
const router = express.Router();
const USER = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/authenticate');
app.use(cookieParser());

router.get('/', (req, res) => {
    console.log('hy these is router page');
    res.send('hy these is router page');
});



router.post("/register", async (req, res) => {

    try {
        const { name, email, phone, work, password, cpassword } = req.body;
        if (password === cpassword) {
            const registerEmployee = new USER({ name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword })

            // this is middle ware part
            const token = await registerEmployee.generateAuthToken();
            console.log(`this is token generator part ${token}`);
            // middle ware part end

            //save cookies in our chrome browser check user login or not
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 3000),
                httpOnly: true
            });
            //console.log(cookie);
            // end cookie part

            const registered = await registerEmployee.save();
            console.log(registered);
            res.status(201);

        } else {
            console.log("not matching");
        }
    } catch (err) {
        // res.status(400).send(err);
        console.log(err)
    }
})




router.post("/contact", async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res.json("please fill data");
        }

        const userLogin = await USER.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token);

            if (isMatch) {
                res.json('ok');
            }
            else {
                res.json('invalid credentials');
            }
        }
        else {
            res.json('invalid credentials');
        }
    } catch (err) {
        // res.status(400).send(err);
        console.log(err)
    }
})






router.get('/about', auth, (req, res) => {

    console.log(`this is secret page cookie ${req.cookies.jwtoken}`);
    res.send(req.rootuser);

})


// contact us page

router.get('/getdata', auth, (req, res) => {

    console.log(`this is secret page cookie ${req.cookies.jwtoken}`);
    // res.send function k undr jo req.rootuser h ye authentication wale page se arha h
    res.send(req.rootuser);

})

router.post('/contac', auth, async (req, res) => {

    try {
        const { name, email, phone, message } = req.body;
        console.log(req.body.message);
        // findone function k undr jo req.id h ye authentication wale page se arha h
        const userContact = await USER.findOne({ _id: req.id });
        if (userContact) {
            const usermsg = await userContact.Addmsg(name, email, phone, message);

            await userContact.save();
            res.status(201).json({ message: "user contact successfully" });
        }
    } catch (error) {
        console.log(error);
    }


})


// for logout code is here

router.get('/logout', (req, res) => {

    console.log(`hy my logout page`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('user logout');

})




module.exports = router;