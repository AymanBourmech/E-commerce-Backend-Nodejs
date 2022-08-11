import express from "express";
import { auth } from "../middleware/auth.js";
import {
  getCategories,
  getCategorieByID,
  createCategorie,
  deleteCategorie,
  updateCategorie,
} from "../controllers/categories.controllers.js";
const router = express.Router();
router.get("/", auth, getCategories);
router.get("/:id", getCategorieByID);
router.post("/", createCategorie);
router.put("/:id", updateCategorie);
router.delete("/:id", deleteCategorie);

export default router;
