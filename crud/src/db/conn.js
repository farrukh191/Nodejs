const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/crud",{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("database connection sucessfull");
}).catch((err)=>{
    console.log(err);
})