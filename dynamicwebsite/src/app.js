const express =  require('express');
require('./db/conn');

const Users = require('./models/usermsg');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

const path =  require('path');
 const staticpath = path.join(__dirname,"../public");
//for bootstrap
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist/")));
//----- end bootstrap ---

// for json

app.use(express.urlencoded({extended: false}));

const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partial");
app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);


// for html
// app.get("/",(req, res)=>{
//     res.send("hy this is me farrukh feroz");
// });

// for HBS

app.get("/",(req, res)=>{
    res.render("index");
});
// app.get("/contact",(req, res)=>{
//     res.render("contact");
// });

app.post("/contact", async(req, res)=>{
    try {
       console.log(req.body);
        const usrData = new Users(req.body);
        await usrData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`sever is running on port number at ${port}`);
})
