import Address from "../models/address.js";
import mongoose from "mongoose";

export const getAddress = async (req, res) => {
  try {
    const add = await Address.find();
    res.status(200).json(add);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAddressByID = async (req, res) => {
  try {
    const add = await Address.findById(req.params.id);
    res.status(200).json(add);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAddress = async (req, res) => {
  const newAddress = new Address(req.body);
  try {
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAddress = async (req, res) => {
  const { id } = req.params;

  const { street, city, state, country, zipCode } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de Address avec un id: ${id}`);

  const add = {
    street: street,
    city: city,
    state: state,
    country: country,
    zipCode: zipCode,
  };

  await Address.findByIdAndUpdate(req.params.id, add);

  res.json(add);
};

export const deleteAddress = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas de Address avec l'ID: ${id}`);
  await Address.findByIdAndDelete(id);
  res.json({ message: "Address deleted successfully." });
};
