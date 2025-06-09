import "./product-card.scss"
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.jsx";
 
const ProductCard = ({product})=>{

 const {name, price, imageUrl} = product ;

 const { addItemToCart } = useContext(CartContext) 
  
 const addProductToCart = ()=>{
  addItemToCart(product);
 } 
 
 return(
  <div className="col-md-3 mb-4">
   <div 
   className="product-card-container"
   >
     <img src={imageUrl} alt={`${name}`}/>
      <div
      className="footer"
      >
        <span 
        className="name"
        >
         {name}
        </span>
        <span 
        className="price"
        >
        {price}
        </span>
      </div>
      <Button 
      buttonType={BUTTON_TYPE_CLASSES.inverted}
      onClick={addProductToCart}
      >
       Add to cart
      </Button>
   </div>
   </div>
 )
}

export default ProductCard;
