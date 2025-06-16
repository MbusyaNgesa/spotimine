import { User } from "../models/userModel.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const currentUserId = req.auth.userId;
    const users = await User.find({ clerkId: { $ne: currentUserId } }); //finding user that is available without seeing yourself as current one : $ne means not equal to
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
