import express from "express";

import {
  getOrderItems,
  getOrderItemByID,
  createOrderItem,
  deleteOrderItem,
  updateOrderItem,
  getOrderItemByOrder,
} from "../controllers/orderItem.controllers.js";
const router = express.Router();
router.get("/", getOrderItems);
router.get("/:id", getOrderItemByID);
router.get("/cat/:categorieID", getOrderItemByOrder);

router.post("/", createOrderItem);
router.put("/:id", updateOrderItem);
router.delete("/:id", deleteOrderItem);
export default router;
