import { Router } from "express";

const router = Router();

router.get("/api/products", (req, res) => {
  console.log(req.cookies);
  res.send([{ id: 123, name: "chicken breast", price: 240 }]);
});

export default router;
