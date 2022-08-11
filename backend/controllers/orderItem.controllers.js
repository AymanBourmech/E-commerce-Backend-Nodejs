import OrderItem from "../models/orderItem.js";
import mongoose from "mongoose";

export const getOrderItems = async (req, res) => {
  try {
    const scat = await OrderItem.find().populate("order").exec();
    res.status(200).json(scat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getOrderItemByID = async (req, res) => {
  try {
    const scat = await OrderItem.findById(req.params.id);
    res.status(200).json(scat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOrderItemByOrder = async (req, res) => {
  try {
    var scat = await OrderItem.find({
      order: req.params.order,
    }).exec();
    res.status(200).json(scat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOrderItem = async (req, res) => {
  const { imageUrl, unitPrice, quantity, productId, order } = req.body;
  const newOrderItem = new OrderItem({
    imageUrl: imageUrl,
    unitPrice: unitPrice,
    quantity: quantity,
    productId: productId,
    order: order,
  });
  try {
    await newOrderItem.save();
    res.status(201).json(newOrderItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateOrderItem = async (req, res) => {
  const { id } = req.params;
  const { imageUrl, unitPrice, quantity, productId, order } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de sous categorie avec un id: ${id}`);
  const orderItem = {
    imageUrl: imageUrl,
    unitPrice: unitPrice,
    quantity: quantity,
    productId: productId,
    order: order,
    _id: id,
  };
  await OrderItem.findByIdAndUpdate(id, orderItem);
  res.json(orderItem);
};
export const deleteOrderItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de sous categorie avec l'ID: ${id}`);
  await OrderItem.findByIdAndDelete(id);
  res.json({ message: "sous categorie deleted successfully." });
};
