import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categorieRouter from "./routes/categorie.route.js";
import scategorieRouter from "./routes/scategorie.route.js";
import articleRouter from "./routes/article.route.js";
import userRouter from "./routes/user.route.js";
import countryRouter from "./routes/country.route.js";
import stateRouter from "./routes/state.route.js";
import orderRouter from "./routes/order.route.js";
import addressRouter from "./routes/address.route.js";
import orderItemRouter from "./routes/orderItem.route.js";
import purchaseRouter from "./routes/purchase.route.js";
import paymentRouter from "./routes/payment.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données réussie");
  })
  .catch((err) => {
    console.log("Impossible de se connecter à la base de données", err);
    process.exit();
  });
app.use("/api/categories", categorieRouter);
app.use("/api/scategories", scategorieRouter);
app.use("/api/articles", articleRouter);
app.use("/api/users", userRouter);
app.use("/api/countries", countryRouter);
app.use("/api/states", stateRouter);
app.use("/api/orders", orderRouter);
app.use("/api/address", addressRouter);
app.use("/api/orderItem", orderItemRouter);
app.use("/api/purchase", purchaseRouter);
app.use("/api/payment", paymentRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
