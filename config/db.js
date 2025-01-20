const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://gourishchouhan338:Gourish1009@cluster0.vrhhp.mongodb.net/");
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("MongoDB connection failed");
    }
};

module.exports = connectDB;