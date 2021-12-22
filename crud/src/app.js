const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
require('./db/conn');
const Register = require('./model/student');
app.use(express.urlencoded({ extended: false }));


// app.get("/", (req, res)=>{
//     res.send("hy this is crus application");
// });


// for hbs page run

const path = require('path');
const viewpath = path.join(__dirname, "template/view");
app.set("view engine", "hbs");
app.set("views", viewpath);

// end hbs  

// app.get("/", (req, res) => {
//     res.render("index");
// })
app.get("/", (req, res) => {
    res.render("register", {
        viewTitle: "this registered page",
    });
})
app.post("/", async (req, res) => {

    const data = await req.body;

    if (req.body._id == "") {
        if (data.password1 === data.password2) {
            const registerStd = new Register({
                name: data.name,
                email: data.email,
                password1: data.password1,
                password2: data.password2
            })

            const registered = await registerStd.save();
            console.log(registered);
            res.render("register");
        } else {
            console.log("data is not pass");
        }

    } else {
        Register.findOneAndUpdate({_id: req.body._id}, req.body, {new :true},()=>{
            res.render("register",{
                viewTitle:"update",
                updEmp:req.body
            });
        });
    }


});
// get data from mongo db

app.get("/list", (req, res) => {
    //    const fetch = Register.find({});
    //     console.log(fetch);
    //     res.json(fetch);

    // res.render("list");
    Register.find((err, docs) => {
        res.render("list", {
            list: docs
        });
    })
});

// get data from mongo db

app.get("/:id", (req, res) => {
    Register.findById(req.params.id, (err, doc) => {

        res.render("register", {
            updEmp: doc
        })

    })
});

// delete data through get id

app.get("/delete/:id",async(req, res)=>{
   try {
    const delt = await Register.findByIdAndRemove(req.params.id);
    res.render("/list");
   } catch (error) {
       res.render(error);
   }
});

app.listen(port, () => {
    console.log(`this website run on this port number: ${port}`);
})