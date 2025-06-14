import "./category.scss" 
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect,Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.jsx"
import ProductCard from "../../components/product-card/product-card.jsx"

const Category = ()=>{

  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products,setProducts] = useState(categoriesMap[category])
  
  useEffect(()=>{
    setProducts(categoriesMap[category])
  },[category,categoriesMap])
  
  return (
  <Fragment>
          <div className="container">
             <div className="row">
               <h2 className="category-title">{category.toUpperCase()}</h2>
             </div>
             <div className="row">
               {
               products 
               && 
               products.map((product)=><ProductCard key={product.id} product={product}/>)}
             </div>             
          </div>
   </Fragment>
  )
}

export default Category;
