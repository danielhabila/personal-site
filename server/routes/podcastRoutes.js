import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
// import Redis from "redis";

const router = express.Router();
dotenv.config();
const app = express();
app.use(cors());
// const redis = Redis.createClient({
//   port: 6379,
//   host: "localhost",
// });
// await redis.connect();

// const CACHE_EXPIRATION = 3600; // 1 hour

router.get("/podcast-list", async (req, res) => {
  try {
    // let cacheEntry = await redis.get("podcastlist");

    // if (cacheEntry && cacheEntry != null) {
    //   console.log("source: Cache");
    //   cacheEntry = JSON.parse(cacheEntry);
    //   return res.json(cacheEntry);
    // }

    const results = await axios.get(process.env.YOUTUBE_API_URL);

    console.log("source: API");
    // redis.setEx("podcastlist", CACHE_EXPIRATION, JSON.stringify(results.data));
    res.send(results.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/podcast-post/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    // let cacheEntry = await redis.get(`podSlug:${slug}`);

    // if (cacheEntry && cacheEntry != null) {
    //   console.log("source: Cache");
    //   cacheEntry = JSON.parse(cacheEntry);
    //   return res.json(cacheEntry);
    // }

    const results = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${slug}&key=${process.env.YOUTUBE_APIKEY}`
    );

    console.log("source: API");
    // redis.setEx(
    //   `podSlug:${slug}`,
    //   CACHE_EXPIRATION,
    //   JSON.stringify(results.data)
    // );
    res.send(results.data);
  } catch (error) {
    console.log(error);
  }
});

export default router;
