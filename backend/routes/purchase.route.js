import express from "express";

import {
  getPurchases,
  getPurchaseByID,
  createPurchase,
  deletePurchase,
} from "../controllers/purchase.controllers.js";
const router = express.Router();
router.get("/", getPurchases);
router.post("/", createPurchase);
router.get("/:id", getPurchaseByID);
router.delete("/:id", deletePurchase);
export default router;
