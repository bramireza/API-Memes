const Axios = require("../utils/axios");
const regex = require("../utils/regex");
const random = require("../utils/random");
const cheerio = require("cheerio");

exports.getRandomMemeUrl = async () => {
  const response = await Axios.get(process.env.MEME_URL);
  const html = response.data;
  const $ = cheerio.load(html);
  const itemDivs = $("div.item-aux-container");
  const imageUrls = itemDivs
    .map((i, div) => $(div).find("img").attr("src"))
    .filter((i, url) => regex.imageUrls.test(url))
    .get();
  const randomIndex = random.getRandomInt(0, imageUrls.length - 1);
  const randomImageUrl = imageUrls[randomIndex];
  return randomImageUrl;
};
