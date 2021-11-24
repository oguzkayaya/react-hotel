const router = require("express").Router();
const verify = require("../verifyToken");
const bannerRoute = require("./contents/banner");

router.use("/banner", verify, bannerRoute);

module.exports = router;