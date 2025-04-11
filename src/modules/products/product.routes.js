import { Router } from "express";
import { addProduct, deleteProduct, getAllProduts, getProduts, updateProduct } from "./product.controller.js";


const productRouter = Router()

productRouter.route('/').get(getAllProduts).post(addProduct)
productRouter.put('/:id',updateProduct)
productRouter.delete('/:id',deleteProduct)
productRouter.get('/:slug',getProduts)



export default productRouter


