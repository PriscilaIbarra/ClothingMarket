import "./checkout-item.scss"
import { useContext, Fragment } from "react"
import { CartContext } from "../../contexts/cart.jsx"


const CheckoutItem = ({cartItem})=>{

 const {name,imageUrl,price,quantity} = cartItem;
 
 const { clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
 
 const clearItem = (item)=>{
  clearItemFromCart(item)
 } 
 
 const increment = (item)=>{
    addItemToCart(item)
 }
 
 const decrement = (item)=>{
    removeItemFromCart(item)
 }
 
 return(
  <Fragment>
    <div
   className="checkout-item-container"
   >
     <div className="image-container">
       <img src={imageUrl} alt={`${name}`}/>   
       {name}    
     </div>
      <span 
     className="quantity"
     style={{marginLeft:"4.5%"}}
     >
       <div className="arrow"
       onClick={()=>decrement(cartItem)}
       >
       &#10094;
       </div>
       {quantity}
       <div className="arrow"
       onClick={()=>increment(cartItem)}
       >
        &#10095;
       </div>
     </span>
     <span 
     className="price"
     style={{marginLeft:"1%"}}
     >
     {price}
     </span>
     <div 
     style={{marginLeft:"1%"}}
     className="remove-button"
     onClick={()=>clearItem(cartItem)}
     >
      &#10005;  
     </div>
   </div>
   
   </Fragment>
 )
}

export default CheckoutItem;
