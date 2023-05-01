const { Router } = require("express");
const { getRandomMeme } = require("./memeController");

const memeRouter = Router();

memeRouter.get("/", getRandomMeme);

module.exports = memeRouter;
