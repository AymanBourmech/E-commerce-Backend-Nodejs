import express from "express";
import {
  createUser,
  getuserBYEmailUser,
  getusers,
} from "../controllers/users.controllers.js";
const router = express.Router();
router.get("/", getusers);
router.post("/", createUser);
router.post("/login", getuserBYEmailUser);
export default router;
