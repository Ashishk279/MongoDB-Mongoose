const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect("mongodb://localhost/mydb");
    console.log("Connected DB Successfully.")
}
connectDB()


module.exports = mongoose;


