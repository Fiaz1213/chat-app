import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    //Get Cookie
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });
    }

    //Verify Token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    //Get User from DB without password
    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    //Need this user ID in other APIs - That's why we set it here
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in middleware : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
