const mongoose = require("mongoose");



const connectDataBase = () => {
    
    mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
    .then(() => {
        console.log("MongoDB Connection Successfull");
    })
    .catch((err) => {
        console.log(err);
    })
}


module.exports = connectDataBase;