// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/loginform",{
//     useUnifiedTopology:true,
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log("connection successfull");
// }).catch((err)=>{
//     console.log(err);
// })
// // make connection


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mernstack:mernstack@cluster0.p2cee.mongodb.net/mermstack?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})
// make connection
