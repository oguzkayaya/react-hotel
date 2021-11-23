const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Hotels", hotelSchema);