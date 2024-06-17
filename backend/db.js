const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI; // Use environment variable for MongoDB URI

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, // Optional: to suppress deprecation warning
    })
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectToMongo;
