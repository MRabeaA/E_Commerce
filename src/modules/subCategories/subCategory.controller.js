import slugify from "slugify";
import SubCategory from "../../../database/models/subCategory.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utilites/ErrorInhertance.js";


const addSubCategory = catchError(async (req, res)=>{
    req.body.slug = slugify(req.body.name)
    const subCategory = new SubCategory(req.body)
    await subCategory.save()
    res.status(200).json({message : "Successfully Added ...." ,subCategory})
})

const getAllSubCategory = catchError(async (req, res, next)=>{

    const subCategories = await SubCategory.find()
    if (!subCategories || subCategories.length ===0)
    {
        return next(new AppError("no subcategories...." , 404))
    }

    res.status(200).json({message : "subCategories : " , subCategories})
 
    
})

const getSubCategory = catchError(async (req, res, next)=>{
    const subCategory = await SubCategory.findById(req.params.id)
    if (!subCategory || subCategory.length ===0)
        {
            return next(new AppError("no subcategory...." , 404))
        }
    
        res.status(200).json({message : "subCategory : " , subCategory})
})


const updateSubCategory = catchError(async (req, res, next)=>{
    if(req.body.name){
        req.body.slug = slugify(req.body.name)
    }
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(req.params.id,req.body, {new : true})
    if (!updatedSubCategory || updatedSubCategory.length ===0)
        {
            return next(new AppError("no subcategory...." , 404))
        }
    
        res.status(200).json({message : "updatedSubCategory : " , subCategory})
})


const deleteSubCategory = catchError(async (req, res, next)=>{
    const deleteSubCategory = await SubCategory.findByIdAndDelete(req.params.id)
    if (!deleteSubCategory || deleteSubCategory.length ===0)
        {
            return next(new AppError("no subcategory...." , 404))
        }
    
        res.status(200).json({message : "deleteSubCategory : " , deleteSubCategory})
})


export {
    addSubCategory,
    getAllSubCategory,
    getSubCategory , 
    updateSubCategory,
    deleteSubCategory
}