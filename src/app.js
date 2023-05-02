import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/index.js";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (_, res) => {
  res.send(`API is Sacraping to ${process.env.MEME_URL}!`);
});
router(app);

export default app;
