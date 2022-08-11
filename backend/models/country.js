import mongoose from "mongoose";
const countrySchema = mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
});
const country = mongoose.model("country", countrySchema);
export default country;
