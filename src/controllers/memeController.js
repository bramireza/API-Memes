import { getRandomMemeUrl } from "../services/memeService.js";

export const getRandomMeme = async (req, res) => {
  try {
    const imageUrl = await getRandomMemeUrl();
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
