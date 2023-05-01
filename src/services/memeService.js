const axios = require("../utils/axios");
const regex = require("../utils/regex");
const random = require("../utils/random");

exports.getRandomMemeUrl = async () => {
  const response = await axios.get(process.env.MEME_URL);
  const html = response.data;

  const imageUrls = html.match(regex.imageUrls);
  const randomIndex = random.getRandomInt(0, imageUrls.length - 1);
  const randomImageUrl = imageUrls[randomIndex];
  return randomImageUrl;
};
