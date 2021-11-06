const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send({ id: user._id, name: user.name, email: user.email });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/login", async (req, res) => {

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email is not found");

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) return res.status(400).send("Invalid password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.header("auth-token", token).send(token);
})

module.exports = router;

