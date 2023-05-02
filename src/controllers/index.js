import { Router } from "express";
import { getRandomMemeImage } from "./memeController.js";

const memeRouter = Router();

memeRouter.get("/", getRandomMemeImage);

export default memeRouter;
