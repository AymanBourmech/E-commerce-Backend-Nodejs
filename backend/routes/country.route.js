import express from "express";
import { getCountry } from "../controllers/country.controllers.js";
const router = express.Router();
router.get("/", getCountry);
export default router;
