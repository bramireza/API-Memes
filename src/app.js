const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes");

dotenv.config();

const app = express();
app.use(cors());
router(app);

module.exports = app;
