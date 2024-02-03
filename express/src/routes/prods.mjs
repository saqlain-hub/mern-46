import { Router } from "express";
import { products } from "../utils/constants.mjs";
const router = Router();

router.get("/api/prods", (req, res) => {
  if (products.length === 0) {
    return res.status(404).send({ msg: "No products" });
  }
  return res.status(200).send(products);
});
router.get("/api/prods/:id", (req, res) => {
  console.log("Product with id");
});
router.post("/api/prods", (req, res) => {
  const { name, price } = req.body;

  if (name && price) {
    const newProd = {
      id: products[products.length - 1].id + 1,
      name,
      price,
    };
    products.push(newProd);
    return res.status(201).send("product added");
  }
  return res.status(400).send({ msg: "Please enter all fields" });
});

export default router;
