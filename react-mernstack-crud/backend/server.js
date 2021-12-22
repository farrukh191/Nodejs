let express = require('express');
const app = express();
let mongoose = require('mongoose');
let cors = require('cors');
app.use(cors({origin:"http://localhost:3000", credentials:true}));
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Express Route
const studentRoute = require('../backend/routes/student.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)


app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.use('/students', studentRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
