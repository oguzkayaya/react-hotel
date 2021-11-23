const router = require("express").Router();
const verify = require("../verifyToken");
const Hotel = require("../models/Hotel");

router.get("/", verify, async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        res.json(hotels);
    } catch (error) {
        return res.status(400).send(error);
    }
})

router.post("/", verify, async (req, res) => {
    try {
        const newPost = new Hotel({
            name: req.body.hotelName,
        });
        const savedHotel = await newPost.save();
        return res.json({ savedHotel });
    } catch (error) {
        return res.status(400).send(error);

    }
})


module.exports = router;