const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Db Connected");
}).catch((err)=> {
    console.log(err, "Error connecting to Mongo");
})