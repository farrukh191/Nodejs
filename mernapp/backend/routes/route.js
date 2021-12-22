let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
const Student = require('../models/student');


router.route('/get').post((req, res, next) => {
    try {
        const add = Student.create(req.body);
    } catch (error) {
        res.status(578).send(error);
    }
    console.log(req.body);
    res.send(req.body);
});

router.get("/list", async (req, res) => {
    const finds = await Student.find();
    console.log(finds);
    res.send(finds);
});

// get single data

// Get Single Student
router.route('/edit/:id').get((req, res) => {
    Student.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })


  // Update Student
router.route('/update-student/:id').put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    })
  })

router.delete('/delete/:id', (req, res, next) => {
    Student.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

module.exports = router;



