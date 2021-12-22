const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/student", async (req, res) => {
    try {
        const usr = new Student(req.body);
        const createUsr = await usr.save();
        res.status(201).send(createUsr);
    } catch (err) {
        res.status(400).send(err);
    }


})

// read the data of register student

router.get("/student", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.status(201).send(studentData);
    } catch (e) {
        res.status(404).send(e);
    }

})

// get individual person data

router.get("/student/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const individualData = await Student.findById(_id);
        console.log(individualData);
        if (!individualData) {
            return res.status(404).send();
        }
        else {
            res.send(individualData);
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

//delete student by it id

router.delete("/student/:id", async (req, res) => {

    try {
        const dltStd = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id){
            return res.status(404).send();
        }
        else {
            res.send(dltStd);
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

// update student by id

router.patch("/student/:id", async (req, res) => {
    
  try {
    const _id = req.params.id;
    const updStd = await Student.findByIdAndUpdate(_id, req.body, {
        new : true
    });
    res.send(updStd);
} catch (err) {
    res.status(400).send(err);
}
})


module.exports = router;