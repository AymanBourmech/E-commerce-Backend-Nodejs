import mongoose from "mongoose";
const categorieSchema = mongoose.Schema({
  nomcategorie: { type: String, required: true },
  imagecategorie: { type: String, required: true },
});
const Categorie = mongoose.model("Categorie", categorieSchema);
export default Categorie;
