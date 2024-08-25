import { Router } from "express";

import productRoutes from "./product.js";
import userRoutes from "./user.js";
import brandRoutes from "./brand.js";
import receiptRoutes from "./receipt.js";
import dataRoutes from "./data.js";

const router = Router();

router.use(receiptRoutes);
router.use(productRoutes);
router.use(userRoutes);
router.use(brandRoutes);
router.use(dataRoutes);

export default router;
