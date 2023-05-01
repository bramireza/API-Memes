const memeRouter = require("../controllers");
const { getRandomMeme } = require("../controllers/memeController");

const routes = [["meme", memeRouter]];

const router = (app) => {
  routes.forEach(([path, controller]) => {
    app.use(`/api/v1/${path}`, controller);
  });
};

module.exports = router;
