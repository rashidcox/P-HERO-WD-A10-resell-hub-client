// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  photo: String,
  role: { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' },
  phone: String,
  location: String,
  status: { type: String, default: 'active' },
  password: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);