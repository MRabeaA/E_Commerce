import slugify from "slugify";
import Product from "../../../database/models/product.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utilites/ErrorInhertance.js";



export const addProduct = catchError(async (req,res)=>{
    req.body.slug = slugify(req.body.title)
    let discount = req.body.price * 0.15
    req.body.priceAfterDiscount=  req.body.price - discount
    const addedProduct = new Product(req.body) 
    await addedProduct.save()
    res.status(200).json({message : "successfully added ....." , addedProduct })
})



export const getAllProduts = catchError(async (req,res, next)=>{
    const products = await Product.find()
    if(!products || products.length ===0)
    {
        return next(new AppError("no Products in Stock" , 404))
    }
    res.status(200).json({message : "Products : " ,products })
})

export const getProduts = catchError(async (req,res, next)=>{
    const product = await Product.findById(req.params.id)
    if(!product || product.length ===0)
    {
        return next(new AppError("product not found ..." , 404))
    }
    res.status(200).json({message : "Product : " ,product })
})


export const updateProduct = catchError(async (req,res, next)=>{
    if(req.body.title)
    {
        req.body.slug = slugify(req.body.title)
    }
    if(req.body.price)
    {
        let discount = req.body.price * 0.15
        req.body.priceAfterDiscount=  req.body.price - discount
    }

    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body , {new : true})
    if(!updateProduct || updateProduct.length ===0)
    {
        return next(new AppError("product not found ..." , 404))
    }
    res.status(200).json({message : "Product updated Succesfully ..... " ,updateProduct })
})


export const deleteProduct = catchError(async (req,res, next)=>{
   
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    if(!deleteProduct || deleteProduct.length ===0)
    {
        return next(new AppError("product not found ..." , 404))
    }
    res.status(200).json({message : "Product deleted Successfully ..... " ,deleteProduct })
})


