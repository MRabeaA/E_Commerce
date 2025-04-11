import slugify from "slugify";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utilites/ErrorInhertance.js";
import Brand from "../../../database/models/brand.model.js";


const addBrand = catchError(async (req, res)=>{
    req.body.slug = slugify(req.body.name)
    const brand = new Brand(req.body)
    await brand.save()
    res.status(200).json({message : "Successfully Added ...." ,brand})
})

const getAllBrands = catchError(async (req, res, next)=>{

    const brands = await Brand.find()
    if (!brands || brands.length ===0)
    {
        return next(new AppError("no brands...." , 404))
    }

    res.status(200).json({message : "brands : " , brands})
 
    
})

const getBrand = catchError(async (req, res, next)=>{
    const brand = await Brand.findById(req.params.id)
    if (!brand || brand.length ===0)
        {
            return next(new AppError("no brand...." , 404))
        }
    
        res.status(200).json({message : "brand : " , brand})
})


const updateBrand = catchError(async (req, res, next)=>{
    if(req.body.name){
        req.body.slug = slugify(req.body.name)
    }
    const updatedbrand = await Brand.findByIdAndUpdate(req.params.id,req.body, {new : true})
    if (!updatedbrand || updatedbrand.length ===0)
        {
            return next(new AppError("no brand...." , 404))
        }
    
        res.status(200).json({message : "updatedbrand : " , updatedbrand})
})


const deleteBrand = catchError(async (req, res, next)=>{
    const deletebrand = await Brand.findByIdAndDelete(req.params.id)
    if (!deletebrand || deletebrand.length ===0)
        {
            return next(new AppError("no brand...." , 404))
        }
    
        res.status(200).json({message : "deletebrand : " , deletebrand})
})


export {
    addBrand,
    getAllBrands,
    getBrand , 
    updateBrand,
    deleteBrand
}