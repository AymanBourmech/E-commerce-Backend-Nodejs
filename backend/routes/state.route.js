import express from "express";
import {
  getState,
  getStateByCountry,
} from "../controllers/state.controllers.js";
const router = express.Router();
router.get("/", getState);
router.get("/count/:countryID", getStateByCountry);
export default router;
