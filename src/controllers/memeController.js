import { load } from "cheerio";
import { MEME_URL } from "../configs/index.js";
import Axios from "../utils/axios.js";
import { getRandomNumber } from "../utils/random.js";
import { regexImageUrls } from "../utils/regex.js";

class MemeController {
  baseUrl = "";

  constructor() {
    this.baseUrl = MEME_URL;
  }

  async getScrapImageUrl(url) {
    try {
      const response = await Axios.get(url);
      const html = response.data;
      const $ = load(html);
      const itemDivs = $("div.post");
      const imageUrls = itemDivs
        .map((_, div) => $(div).find("img").attr("src"))
        .filter((_, url) => regexImageUrls.test(url))
        .get();
      const randomIndex = getRandomNumber(0, imageUrls.length - 1);
      const randomImageUrl = imageUrls[randomIndex];

      return randomImageUrl;
    } catch (error) {
      throw error;
    }
  }

  async getListCategories() {
    try {
      const response = await Axios.get(`${this.baseUrl}/random`);
      const html = response.data;
      const $ = load(html);
      const list = $("ul#memelist");

      const categories = [];
      list.find("li a").each((_, a) => {
        const href = $(a).attr("href");
        if (href) categories.push(href?.replace(/\//g, ''));
      });

      return categories.map((category) => ({
        url: `/api/v1/random-meme/tag/${category}`,
        name: category,
      }));
    } catch (error) {
      throw error;
    }
  }

  async getRandomMemeByUrl(urlPath = "") {
    try {
      const url = `${this.baseUrl}${urlPath}`;
      console.log('🚀 ~ MemeController ~ getRandomMemeByUrl ~ url:', url)
      const imageUrl = await this.getScrapImageUrl(url);

      const { data: bufferData } = await Axios.get(imageUrl, {
        responseType: "arraybuffer",
      });

      return {
        imageUrl,
        bufferData,
      };
    } catch (error) {
      throw error;
    }
  }
}

export default new MemeController();
