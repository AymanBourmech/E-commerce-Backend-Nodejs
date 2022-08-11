import mongoose from "mongoose";
import country from "./country.js";
const stateSchema = mongoose.Schema({
  name: { type: String, required: true },
  countryID: { type: mongoose.Schema.Types.ObjectId, ref: country },
});
const state = mongoose.model("state", stateSchema);
export default state;
