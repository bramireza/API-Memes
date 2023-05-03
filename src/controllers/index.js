import { Router } from "express";
import {
  getRandomMemeImage,
  getRandomMemeImageByTag,
} from "./memeController.js";

const memeRouter = Router();

memeRouter.get("/", getRandomMemeImage);
memeRouter.get("/tag/:tag", getRandomMemeImageByTag);

export default memeRouter;
