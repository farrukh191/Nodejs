const { Router } = require("express");
const express = require("express");
const app = express();
require("./db/conn");
// const Student = require("./models/students");
const StudentRouter= require("./router/router.js");
const port = process.env.port || 3000;
app.use(express.json());

app.use(StudentRouter);




// ---------------------------------------------create Router----------------------------
// // create new router
// const router=new express.Router();

// // we need to define router

// router.get("/home", (req, res)=>{
//     res.send('hy whatsup guys');
// });

// // we need to register our router
// app.use(router);





// given app.post function to add data but this is not a better way we use another way to add datat

// app.post("/student",(req, res)=>{
//     console.log(req.body);
//     const usr = new Student(req.body);
//     usr.save().then(()=>{
//         res.status(201).send(usr);
//     })
//     .catch((err)=>{
//        res.status(400).send(err);
//     })
//     // res.send("hello from the other side.");
// })


// we use this way to add data not use promise method

// app.post("/student", async (req, res) => {
//     try {
//         const usr = new Student(req.body);
//         const createUsr = await usr.save();
//         res.status(201).send(createUsr);
//     } catch (err) {
//         res.status(400).send(err);
//     }


// })

// // read the data of register student

// app.get("/student", async (req, res) => {
//     try {
//         const studentData = await Student.find();
//         res.status(201).send(studentData);
//     } catch (e) {
//         res.status(404).send(e);
//     }

// })

// // get individual person data

// app.get("/student/:id", async (req, res) => {

//     try {
//         const _id = req.params.id;
//         const individualData = await Student.findById(_id);
//         console.log(individualData);
//         if (!individualData) {
//             return res.status(404).send();
//         }
//         else {
//             res.send(individualData);
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// })

// //delete student by it id

// app.delete("/student/:id", async (req, res) => {

//     try {
//         const dltStd = await Student.findByIdAndDelete(req.params.id);
//         if (!req.params.id){
//             return res.status(404).send();
//         }
//         else {
//             res.send(dltStd);
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// })

// // update student by id

// app.patch("/student/:id", async (req, res) => {
    
//   try {
//     const _id = req.params.id;
//     const updStd = await Student.findByIdAndUpdate(_id, req.body, {
//         new : true
//     });
//     res.send(updStd);
// } catch (err) {
//     res.status(400).send(err);
// }
// })


app.listen(port, () => {
    console.log(`connection is successfull ${port}`);
});


