const router = require("express").Router();
const verify = require("../verifyToken");

router.get("/", verify, (req,res) => {
    res.send("hotel list");

})


module.exports = router;