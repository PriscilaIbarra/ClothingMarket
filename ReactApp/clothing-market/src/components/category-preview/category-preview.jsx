import "./category-preview.scss"
import ProductCard from "../product-card/product-card.jsx"
import { Link } from "react-router-dom"
import {Fragment} from "react";

const CategoryPreview = ({title,products})=>{
 return(
  <Fragment>
  <div className="container text-left">
    <div className="row">
       <h2>
          <Link className="title" to={title}>
             {title.toUpperCase()}
          </Link>
       </h2>
    </div>
    <div className="row">
       {
        products && products.filter((_,idx)=>idx<4).map((product)=>
          <ProductCard key={product.id} product={product}/>       
        )
       }
    </div>
  </div>
  </Fragment>
 )
}

export default CategoryPreview;
