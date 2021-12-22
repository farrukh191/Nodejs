const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose= require('mongoose');


let cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./db/conn');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// connect mongo db with database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

//-----------------------------------------------

const stdSch = require('./models/student');

const stdRoute = require('../backend/routes/route');
app.use('/students', stdRoute);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors);
const port = process.env.port || 5000;




app.listen(port, () => {
    console.log("this app is running on port number " + port);
})


