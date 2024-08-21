import { Router } from "express";
import { ErrorResponse } from "../services/responseService.js";
import memeController from "../controllers/memeController.js";

const memeRouter = Router();

memeRouter.get("/", async (_, res) => {
  try {
    const { bufferData } = await memeController.getRandomMemeByUrl('/random')

    res
      .status(200)
      .contentType("image/jpeg")
      .send(Buffer.from(bufferData));
  } catch (error) {
    console.log(error)
    ErrorResponse(res, 500, error?.message);
  }
});

memeRouter.get("/tag/:tag", async (req, res) => {
  try {
    const { tag } = req.params
    const { bufferData } = await memeController.getRandomMemeByUrl(`/${tag}`)

    res
      .status(200)
      .contentType("image/jpeg")
      .send(Buffer.from(bufferData));
  } catch (error) {
    console.log(error)
    ErrorResponse(res, 500, error?.message);
  }
});

memeRouter.get("/listCategories", async (req, res) => {
  try {
    const { tag } = req.params
    const list = await memeController.getListCategories()

    res
      .status(200)
      .json({ data: list, success: true, error: null })
  } catch (error) {
    console.log(error)
    ErrorResponse(res, 500, error?.message);
  }
});
export default memeRouter;
