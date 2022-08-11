import mongoose from "mongoose";
import Order from "./order.js";
const orderItemSchema = mongoose.Schema({
  imageUrl: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  productId: { type: Object, required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: Order },
});
const OrderItem = mongoose.model("OrderItem", orderItemSchema);
export default OrderItem;
