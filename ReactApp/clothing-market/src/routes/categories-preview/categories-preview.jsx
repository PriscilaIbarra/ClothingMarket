import { useContext,Fragment } from "react"
import { CategoriesContext } from "../../contexts/categories.jsx"
import CategoryPreview from "../../components/category-preview/category-preview.jsx";
import "./categories-preview.scss";


const CategoriesPreview = ()=>{

 const { categoriesMap } = useContext(CategoriesContext)

 return(
 <Fragment>
     {
      Object.keys(categoriesMap).map((title)=>{
      const products = categoriesMap[title];
      return <CategoryPreview key={title} title={title} products={products}/>       
      })      
     }    
  </Fragment>
 )
}

export default CategoriesPreview;
