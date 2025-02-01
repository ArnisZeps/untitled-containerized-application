import "dotenv/config";
import express from "express";
import logger from "../src/logger.js";

const router = express.Router();

router.post("/analytics/logger-service", async (req, res) => {
  try {
    const { logGroup, timestamp, data } = req.body;
    logger({
      logGroup,
      timestamp,
      data
    })
    res.status(200).send({
      message: "added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      info: "Request failed",
      trace: err.message,
    });
  }
});

export default router;
