const Mongoose = require("mongoose");

// connection creation and create a new db

Mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection successfully"))
    .catch((err) => console.log(err));

// schema
// A mongooes schema defines the structure of the document
// default values, validators, etc.
// create object/ instance

const playlistSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        uppercase:true,
        trim:true
    },
    type: String,
    video: String,
    actiive: Boolean
})


// collection creation class
// by default we create farrukh name collection this is singular form but mongo db convert 
// plural form remember
const Playlist = new Mongoose.model("farrukh", playlistSchema);


// create and insert document

const createdocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "        hassan      khan      ",
            type: "software developer",
            video: "10",
            actiive: false
        })

        // await reactPlaylist.save() this line mean insert one data

        // await Playlist.insertMany([reactPlaylist0,reactPlaylist1,reactPlaylist2]) this line mean insert multiple data

        const result = await reactPlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

createdocument();

// read document code

const getData = async () => {

    // this below code means selective data call e.g name:"ali" and how many attribute call from this data
    // use select({name:1}) function name :1 means one data fetch
    //  const result = await Playlist.find({name:"farrukh"}).select({name:1}).limit(1);
    const result = await Playlist.find();
    console.log(result);
}

// getData();

// update data

const updateDocument = async (_id) => {
    try {
        // write updateOne / findByIdAndUpdate
        const upd = await Playlist.findByIdAndUpdate({ _id }, {
            $set: {
                name: "Asad Raza",
                type: "labour",
                video: "05",
                actiive: false
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(upd);
    } catch (err) {
        console.log(err);
    }
}

// updateDocument("60f45ad2e51b3d07243dfbd3");

// delete code below

const deleteDocs = async (_id)=>{
    try {
        const dltdocs = await Playlist.findByIdAndDelete( {_id} );
        // const dltdocs = await Playlist.deleteOne( {_id} );
        console.log(dltdocs);
    } catch (err) {
        console.log(err);
    }
}

//deleteDocs("60f1b82022e7f51610952ece");