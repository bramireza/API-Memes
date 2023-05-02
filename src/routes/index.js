const memeRouter = require("../controllers");

const routes = [["meme", memeRouter]];

const router = (app) => {
  routes.forEach(([path, controller]) => {
    app.use(`/api/v1/${path}`, controller);
  });
};

module.exports = router;
