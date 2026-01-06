import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { requestTimer } from "../middlewares/timer.js";

const router = express.Router();

router.get("/dashboard", authenticate, requestTimer, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to dashboard",
    user: req.user
  });
});

export default router;
