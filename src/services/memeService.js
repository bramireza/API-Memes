import Axios from "../utils/axios.js";
import { regexImageUrls } from "../utils/regex.js";
import { getRandomInt } from "../utils/random.js";
import { load } from "cheerio";

async function getRandomImageUrl(url) {
  const response = await Axios.get(url);
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

export async function getRandomMemeUrl() {
  const url = process.env.MEME_URL + "memes/random";
  return await getRandomImageUrl(url);
}

export async function getRandomMemeUrlByTag(tag) {
  const url = process.env.MEME_URL + `memes/tag/${tag}`;
  return await getRandomImageUrl(url);
}
