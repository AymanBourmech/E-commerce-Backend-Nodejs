import mongoose from "mongoose";
import Purchase from "../models/purchase.js";

export const getPurchases = async (req, res) => {
  try {
    const purchase = await Purchase.find()
      .populate("order")
      .populate("user")
      .populate("shippingAddress")
      .populate("billingAddress")
      .populate("orderItems")
      .exec();
    res.status(200).json(purchase);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPurchaseByID = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    res.status(200).json(purchase);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPurchase = async (req, res) => {
  const { order, user, shippingAddress, billingAddress, orderItems } = req.body;
  const newPurchase = new Purchase({
    order: order,
    user: user,
    shippingAddress: shippingAddress,
    billingAddress: billingAddress,
    orderItems: orderItems,
  });
  try {
    await newPurchase.save();
    res.status(201).json(newPurchase);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deletePurchase = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas dePurchase avec l'ID: ${id}`);
  const purchase = await Purchase.findByIdAndDelete(id);
  res.json({ message: `${purchase.reference} est supprimé` });
};
