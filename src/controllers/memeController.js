const memeService = require("../services/memeService");

exports.getRandomMeme = async (req, res) => {
  try {
    const imageUrl = await memeService.getRandomMemeUrl();
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
