import brandRouter from "./modules/brands/brand.routes.js";
import categoryRouter from "./modules/categories/category.routes.js";
import productRouter from "./modules/products/product.routes.js";
import subCategoryRouter from "./modules/subCategories/subCategory.routes.js";


const bootStrap = (app) => {
  app.use('/api/categories', categoryRouter);
  app.use('/api/subcategories' ,subCategoryRouter)
  app.use('/api/brandes' ,brandRouter)
  app.use('/api/products' ,productRouter)

};

export { bootStrap };
