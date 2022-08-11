import country from "../models/country.js";

export const getCountry = async (req, res) => {
  try {
    const count = await country.find();
    res.status(200).json(count);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
