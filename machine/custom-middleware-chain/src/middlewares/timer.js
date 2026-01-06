export function requestTimer(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    console.log(`Request took ${Date.now() - start}ms`);
  });

  next();
}
