import "dotenv/config";
import express from "express";

const router = express.Router();

router.post("/analytics/page-view", async (req, res) => {
  try {
    console.log("req.body", req.body)
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
