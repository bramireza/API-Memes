import { getRandomMemeUrl } from "../services/memeService.js";
import Axios from "../utils/axios.js";

export const getRandomMemeImage = async (_, res) => {
  try {
    const imageUrl = await getRandomMemeUrl();
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
