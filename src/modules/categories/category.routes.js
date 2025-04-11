import { Router } from "express"
import { addCategory, deletedCategory, getAllCategory, getCategory, updateCategory } from "./category.controller.js"
import { uploadSingle } from "../../uploadFile/uploadfunctionetting.js"


const categoryRouter = Router()

categoryRouter.route('/').get(getAllCategory).
post(uploadSingle('categories' ,'image'),addCategory)
categoryRouter.put('/:id',uploadSingle('categories' ,'image'),
updateCategory)
categoryRouter.delete('/:id',deletedCategory)
categoryRouter.get('/:slug',getCategory)


export default categoryRouter