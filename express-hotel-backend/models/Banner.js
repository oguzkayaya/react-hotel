const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true
    }
});

module.exports = mongoose.model("Banners", bannerSchema);