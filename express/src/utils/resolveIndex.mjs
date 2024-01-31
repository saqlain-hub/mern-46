import { mockUsers } from "./constants.mjs";
import { products } from "./constants.mjs";
export const resolveIndexByUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
  req.findUserIndex = findUserIndex;
  next();
};

export const resolveIndexByProds = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findProdIndex = products.findIndex((prod) => prod.id === parsedId);
  if (findProdIndex === -1) return res.sendStatus(404);
  req.findProdIndex = findProdIndex;
  next();
};
