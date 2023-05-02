import Axios from "../utils/axios.js";
import { regexImageUrls } from "../utils/regex.js";
import { getRandomInt } from "../utils/random.js";
import { load } from "cheerio";

export async function getRandomMemeUrl() {
  const response = await Axios.get(process.env.MEME_URL);
  const html = response.data;
  const $ = load(html);
  const itemDivs = $("div.item-aux-container");
  const imageUrls = itemDivs
    .map((i, div) => $(div).find("img").attr("src"))
    .filter((i, url) => regexImageUrls.test(url))
    .get();
  const randomIndex = getRandomInt(0, imageUrls.length - 1);
  const randomImageUrl = imageUrls[randomIndex];
  return randomImageUrl;
}
