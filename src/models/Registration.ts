import mongoose, { Schema, models } from "mongoose";

const RegistrationSchema = new Schema({
  college: { type: String, required: true },
  members: { type: [String], required: true },
  event: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
