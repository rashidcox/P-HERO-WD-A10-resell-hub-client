// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  condition: { type: String, enum: ['Used', 'Like New', 'Refurbished'] },
  price: Number,
  images: [String],
  description: String,
  sellerInfo: {
    userId: String,
    name: String,
    email: String,
    phone: String,
  },
  status: { type: String, default: 'available' },
  stock: { type: Number, default: 1 },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', productSchema);