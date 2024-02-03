import { Router } from "express";
import { products } from "../utils/constants.mjs";
import { resolveIndexByProds } from "../utils/resolveIndex.mjs";

const router = Router();

router.get("/api/products", (req, res) => {
  console.log(req.headers.cookie);
  console.log(req.cookies);
  console.log(req.signedCookies);
  if (req.signedCookies.hello && req.signedCookies.hello === "world")
    return res.send([{ id: 123, name: "chicken breast", price: 240 }]);

  return res.send({ msg: "Sorry. You need the correct cookie" });
});

export default router;
