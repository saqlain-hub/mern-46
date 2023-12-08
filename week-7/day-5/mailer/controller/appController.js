const signup = (req, res) => {
  res.status(201).json("Signup Successful...!");
};

const getBill = (req, res) => {
  res.status(201).json("getBill Successful...!");
};

module.exports = {
  signup,
  getBill,
};
