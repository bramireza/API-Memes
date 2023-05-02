import { Router } from "express";
import { getRandomMeme } from "./memeController.js";

const memeRouter = Router();

memeRouter.get("/", getRandomMeme);

export default memeRouter;
