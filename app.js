const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require("path");

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
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Hello World");
}
);

app.get("/Listings", async (req, res) => {
    const allListings = await Listings.find({});
    res.render("/listings/index.ejs", {allListings});
    });

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "Mane Mansion",
//         description: "Near the Beach",
//         price: 1200,
//         location: "Kalaburagi, Karataka",
//         country: "India"
//     });
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("successful testing");
// });

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});