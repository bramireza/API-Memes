const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes");

dotenv.config();

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(`API is Running!${process.env.MEME_URL}`);
});
router(app);

module.exports = app;
