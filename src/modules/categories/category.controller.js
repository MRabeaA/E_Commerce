import slugify from "slugify";
import fs from 'fs'
import path from 'path'
import { catchError } from "../../middleware/catchError.js";
import Category from "../../../database/models/category.model.js";
import { AppError } from "../../utilites/ErrorInhertance.js";


const addCategory = catchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  req.body.image = req.file.filename
  const category = new Category(req.body);
  await category.save();
  res.status(201).json({ message: "Category Added Successfully", category });
});

const getAllCategory = catchError(async (req, res, next) => {
  const categories = await Category.find();
  if (!categories || categories.length === 0) {
    return next(new AppError("No categories found", 404));
  }
  res.status(200).json({ message: "Success", count: categories.length, categories });
});

const getCategory = catchError(async (req, res, next) => {
  const category = await Category.findOne({ slug: req.params.slug });
  if (!category) {
    return next(new AppError("Category not found", 404));
  }
  res.status(200).json({ message: "Success", category });
});


const updateCategory = catchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name)

  const category = await Category.findById(req.params.id)
  if(!category) return next(new AppError('Category Not Found' ,404))

  if (req.file) 
  {
    if(category.image){

      try{
        const oldPath = path.
        join(__dirname,`../../uploads/categories/${category.image}`)

         fs.unlinkSync(oldPath)


      }catch(err){
        return next(new AppError("Old Image deleted Is Failed ...."+err.message))
      }
     
    }
    req.body.image = req.file.filename
  }
   const updatedcategory = await Category.
   findByIdAndUpdate(req.params.id, req.body ,{ new: true});

  res.status(200).
  json({ message: "Category updated successfully", updatedcategory });
});






const deletedCategory = catchError(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return next(new AppError("Category not found", 404));
  }
  res.status(200).json({ message: "Category deleted successfully" });
});

export {
  addCategory,
  getAllCategory,
  getCategory,
  updateCategory,
  deletedCategory,
};