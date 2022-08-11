import express from "express";
import { auth } from "../middleware/auth.js";
import {
  getArticles,
  getArticleByID,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/articles.controllers.js";
const router = express.Router();
router.get("/", auth, getArticles);
router.post("/", createArticle);
router.get("/:id", getArticleByID);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);
export default router;
