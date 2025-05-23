import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true }, //ClerkID
    receiverId: { type: String, required: true },
    constent: { type: String, required: true },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
