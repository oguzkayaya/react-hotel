const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const hotelsRoute = require("./routes/hotels");


dotenv.config();

app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/hotels", hotelsRoute);

mongoose.connect(
    process.env.DB_CONNECT,
    () => {
        console.log("connected to db");
    }
)

app.listen(3000, () => {
    console.log("Server up and running");
})