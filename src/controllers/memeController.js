import {
  getRandomMemeUrl,
  getRandomMemeUrlByTag,
} from "../services/memeService.js";
import Axios from "../utils/axios.js";

const getMemeImage = async (imageUrl, res) => {
  try {
    const imageResponse = await Axios.get(imageUrl, {
      responseType: "arraybuffer",
    });
    res
      .status(200)
      .contentType("image/jpeg")
      .send(Buffer.from(imageResponse.data));
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getRandomMemeImage = async (_, res) => {
  const imageUrl = await getRandomMemeUrl();
  await getMemeImage(imageUrl, res);
};

export const getRandomMemeImageByTag = async (req, res) => {
  const { tag } = req.params;
  const imageUrl = await getRandomMemeUrlByTag(tag);
  await getMemeImage(imageUrl, res);
};
