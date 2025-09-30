const mongoose = require('mongoose');
const { data: sampleListings } = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

async function main(){
    await mongoose.connect(MONGO_URL)
};

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(sampleListings);
    console.log("DB Initialized with sample data");
};

initDB();