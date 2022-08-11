import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { nom, email, password, role } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const newUser = new User({
    nom: nom,
    email: email,
    password: hash,
    role: role,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getusers = async (req, res) => {
  try {
    const user = await User.find().select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
};
export const getuserBYEmailUser = async (req, res) => {
  try {
    const email = decodeURIComponent(req.body.email);
    const password = decodeURIComponent(req.body.password);
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("utilisateur non existant");
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ msg: "mot de passe incorrect" });
      return;
    }

    const accessToken = generateAccessToken(user);
    res.status(200).json({
      accessToken,
      user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
