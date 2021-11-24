const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const hotelsRoute = require("./routes/hotels");
const contentRoute = require("./routes/content");
const cors = require("cors");

dotenv.config();

app.use(cors());

app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/content", contentRoute);

mongoose.connect(
    process.env.DB_CONNECT,
    () => {
        console.log("connected to db");
    }
)

app.listen(8080, () => {
    console.log("Server up and running");
})