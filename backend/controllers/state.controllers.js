import state from "../models/state.js";

export const getState = async (req, res) => {
  try {
    const sta = await state.find().populate("countryID").exec();
    res.status(200).json(sta);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getStateByCountry = async (req, res) => {
  try {
    var sta = await state
      .find({
        code: req.params.countryID.code,
      })
      .exec();
    res.status(200).json(sta);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
