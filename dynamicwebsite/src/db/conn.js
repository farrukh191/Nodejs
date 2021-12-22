const mongoose = require('mongoose');

// creating database

mongoose.connect("mongodb://localhost:27017/website",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successull");
}).catch(()=>{
    console.log("connection falied");
})