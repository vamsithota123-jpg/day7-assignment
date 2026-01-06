export function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token || token !== "Bearer secret123") {
    const err = new Error("Unauthorized");
    err.status = 401;
    return next(err);
  }

  req.user = { id: 1, role: "admin" };
  next();
}
