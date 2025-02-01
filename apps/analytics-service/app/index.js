import 'dotenv/config'
import routes from "./routes/index.js"
import cors from "cors";
import express from "express";

const app = express();
const { PORT } = process.env;
app.listen(PORT);
app.use(
  cors({
    origin: ["http://localhost:3000"], 
  }),
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(routes);
  

console.log("Listening on port", PORT);

