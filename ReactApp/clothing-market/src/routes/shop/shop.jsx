import { Routes, Route } from "react-router-dom" 
import CategoriesPreview from "../categories-preview/categories-preview.jsx" 
import Category from "../category/category.jsx"

const Shop = ()=>{

 return(
   <Routes>
     <Route index element={<CategoriesPreview/>} />
     <Route path=":category" element={<Category/>} />
   </Routes>
 )
}

export default Shop;
