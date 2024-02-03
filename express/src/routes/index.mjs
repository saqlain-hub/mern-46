import { Router } from "express";
import usersRouter from "./users.mjs";
import productsRouter from "./products.mjs";
import prodsRouter from "./prods.mjs";
const router = Router();

router.use(usersRouter);
router.use(productsRouter);
router.use(prodsRouter);

export default router;
