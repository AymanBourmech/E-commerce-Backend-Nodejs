import express from "express";

import {
  getAddress,
  getAddressByID,
  createAddress,
  deleteAddress,
  updateAddress,
} from "../controllers/address.controllers.js";
const router = express.Router();
router.get("/", getAddress);
router.get("/:id", getAddressByID);
router.post("/", createAddress);
router.put("/:id", updateAddress);
router.delete("/:id", deleteAddress);

export default router;
