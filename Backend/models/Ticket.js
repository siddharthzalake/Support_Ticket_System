import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  message: { type: String, required: true },
  priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
  status: {
    type: String,
    enum: ["NEW", "INVESTIGATING", "RESOLVED"],
    default: "NEW"
  }
}, { timestamps: true });

export default mongoose.model("Ticket", ticketSchema);