const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://guptarudra901:NE39W7ERvc9jxLFY@cluster0.d9tigig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = () => {
    mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectToMongo;
// NE39W7ERvc9jxLFY