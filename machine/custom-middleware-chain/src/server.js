import express from "express";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import protectedRoutes from "./routes/protected.routes.js";

const app = express();
app.use(express.json());

app.use(logger);
app.use("/api", protectedRoutes);

app.use((req, res, next) => {
  const err = new Error("Route Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
