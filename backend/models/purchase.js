import mongoose from "mongoose";
import Order from "./order.js";
import OrderItem from "./orderItem.js";
import User from "./user.js";
import Address from "./address.js";
const purchaseSchema = mongoose.Schema({
  order: { type: mongoose.Schema.Types.Array, ref: Order },
  user: { type: mongoose.Schema.Types.Array, ref: User },
  shippingAddress: { type: mongoose.Schema.Types.Array, ref: Address },
  billingAddress: { type: mongoose.Schema.Types.Array, ref: Address },
  orderItems: { type: mongoose.Schema.Types.Array, ref: OrderItem },
});
const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase;
