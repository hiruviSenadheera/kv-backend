import express from "express"
import { addProduct } from "../controllers/productControllers.js";

const productRouter = express.Router();

productRouter.post("/",addProduct)

export default productRouter;