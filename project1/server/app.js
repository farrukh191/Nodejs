const dotenvv = require('dotenv');
const express = require('express');
let cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const jwt = require("jsonwebtoken");
app.use(cors({origin:"http://localhost:3000", credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./router/auth'));

dotenvv.config({ path: './config.env' });
require('./db/conn');

const PORT = process.env.PORT || 5000;


// const port = process.env.PORT || 3000;



middleware = (req, res, next) => {
    console.log("here is using middleware to authenticate the user");
    next();
}


// for heroku website add this line only
if(process.env.Node_ENV == "production"){
    app.use(express.static("client/build"));
}


app.listen(PORT, () => {
    console.log(`this app is run on ${PORT} port number`);
})