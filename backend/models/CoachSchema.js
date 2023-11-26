import mongoose from "mongoose";
import {Int32} from "mongodb";

const CoachSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String },

  ticketPrice: { type: Number },
  role: { type: String },

  //Fields only for Coach
  specialization: { type: String },
  qualification: { type: Array },
  experience: { type: Array },

  bio: { type: String },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: { type: mongoose.Types.ObjectId, ref: "Review" },
  averageRating: { type: Number, default: 0 },
  totalRating: { type: Number, default: 0 },
  isApproved: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  appointment: { type: mongoose.Types.ObjectId, ref: "Appointment" },
});

export default mongoose.model("Coach", CoachSchema);
