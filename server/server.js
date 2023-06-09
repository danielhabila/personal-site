import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import blogRoute from "./routes/blogRoutes.js";
import podcastRoutes from "./routes/podcastRoutes.js";

const port = 4040;
dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/v1", blogRoute);
app.use("/api/v2", podcastRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
