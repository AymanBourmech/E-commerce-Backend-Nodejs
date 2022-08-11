import mongoose from "mongoose";
import Categorie from "./category.js";
import Scategorie from "./scategory.js";
const articleSchema = mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  designation: { type: String, required: true, unique: true },
  prixAchat: { type: Number, required: true },
  prixVente: { type: Number, required: true },
  marque: { type: String, required: true },
  qtestock: { type: Number, required: true },
  caracteristiques: { type: String, required: false },
  imageartpetitf: { type: String, required: true },
  imageartgrandf: { type: Array, required: false },
  categorieID: { type: mongoose.Schema.Types.ObjectId, ref: Categorie },
  scategorieID: { type: mongoose.Schema.Types.ObjectId, ref: Scategorie },
});
const Article = mongoose.model("Article", articleSchema);
export default Article;
