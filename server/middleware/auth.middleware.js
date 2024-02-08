import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
    try {
        // return res.status(201).json({msg:"cookies not found", cookies:req.cookies})
        
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(400).json({ msg: "Token not found" });
        }

        const verifiedToken = await jwt.verify(token, process.env.ACCESS_JWT_SECRET);
        if (!verifiedToken?._id) {
            return res.status(400).json({ msg: "Invalid token" });
        }

        const user = await User.findById(verifiedToken._id).select("-password -confirmPassword -messages");
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(400).json({ msg: "Error verifying token", err: error.message });
    }
};
