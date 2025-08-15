import jwt from "jsonwebtoken";
export const genrateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // for cross-site cookies in production
    secure: process.env.NODE_ENV === "production", // only HTTPS in prod
  });
  return token
};
