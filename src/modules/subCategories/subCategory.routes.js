import { Router } from "express";
import { addSubCategory, deleteSubCategory, getAllSubCategory, getSubCategory, updateSubCategory } from "./subCategory.controller.js";


const subCategoryRouter = Router()


subCategoryRouter.route('/').get(getAllSubCategory).post(addSubCategory)

subCategoryRouter.route('/:id').get(getSubCategory).put(updateSubCategory).delete(deleteSubCategory)



export default subCategoryRouter