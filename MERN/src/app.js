const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const createCol = require('./model/register');
const { create } = require('hbs');
const { O_DIRECTORY } = require('constants');
require('./db/conn');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', async (req, res) => {
  try {
    res.send("this is node js code");
    const addReg = new createCol(req.body);
    const add = await addReg.save();
    console.log(add);
  } catch (err) {
    res.send(err)
  }


});



app.get("/list", async (req, res) => {
  try {
    const getath = await createCol.find({});
    // console.log(getath);
    res.status(201).send(getath);
  } catch (err) {
    res.send(err);
  }
})



app.delete('/delete/:id',(req, res, next) => {
  createCol.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});

const updateDocument = async (_id) => {
  try {
      // write updateOne / findByIdAndUpdate
      const upd = await createCol.findByIdAndUpdate({ _id }, {
          $set: {
              name: "Asad Raza",
              work: "test",
          }
      }, {
          new: true,
      });
      console.log(upd);
  } catch (err) {
      console.log(err);
  }
}

updateDocument("612cb0983211ff1b08cbc3");

// delete code below



// Update Student
app.put('/update').put((req, res, next) => {
  console.log(req.params.id);
  createCol.findByIdAndUpdate({_id:"612cb0983211ff1b08cbc36c"},{$set :{name:"asad Raza"}});
  // createCol.findByIdAndUpdate(req.params.id, {
  //   $set: req.body
  // }, (error, data) => {
  //   if (error) {
  //     return next(error);
  //     console.log(error)
  //   } else {
  //     res.json(data)
  //     console.log('Student updated successfully !')
  //   }
  // })
})
// Update Student

// app.put('/update/:id',(req, res, next) => {
//   createCol.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student updated successfully !')
//     }
//   })
// });

app.listen(port, () => console.log(`Listening on port ${port}`));