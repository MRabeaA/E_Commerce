import { Router } from "express";
import { addBrand, deleteBrand, getAllBrands, getBrand, updateBrand } from "./brand.controller.js";



const brandRouter = Router()


brandRouter.route('/').get(getAllBrands).post(addBrand)

brandRouter.route('/:id').get(getBrand).put(updateBrand).delete(deleteBrand)



export default brandRouter