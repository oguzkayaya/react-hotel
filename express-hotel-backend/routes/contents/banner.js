const router = require("express").Router();
const Banner = require("../../models/Banner");


router.get("/", async (req, res) => {
    try {
        const banners = await Banner.find({
            hotelId: req.query.currentHotel
        });
        return res.json({ banners });
    } catch (error) {
        return res.status(400).send(error);
    }
})


router.post("/", async (req, res) => {
    const bannerList = req.body.bannerList;
    console.log(bannerList);
    const currentHotel = req.body.currentHotel;

    const newBannerList = await bannerList.map(async (banner) => {
        console.log(banner);
        if (banner._id < 0) {
            try {
                const newBanner = new Banner({
                    text: banner.text,
                    image: banner.image,
                    hotelId: currentHotel
                });
                const savedBanner = await newBanner.save();
                console.log(savedBanner)
                return savedBanner;
            } catch (error) {
                // return res.status(400).send(error);
            }
        }
        else {
            try {
                const updatingBanner = await Banner.findOne({ _id: banner._id });
                const updatedBanner = await updatingBanner.updateOne({
                    text: banner.text,
                    image: banner.image
                });
                console.log(updatedBanner)
                return updatedBanner;
            } catch (error) {
                console.log(error)
                // return res.status(400).send(error);
            }
        }
    });
    // console.log("newBannerList", newBannerList)

    return res.json({ newBannerList });
});

router.delete("/:bannerId", async (req, res) => {
    try {
        const deletingBanner = await Banner.findOne({_id : req.params.bannerId});
        const deletedBanner = await deletingBanner.deleteOne();
        return res.json({ deletedBanner });
    } catch (error) {
        return res.status(400).send(error);
    }
})



module.exports = router;
