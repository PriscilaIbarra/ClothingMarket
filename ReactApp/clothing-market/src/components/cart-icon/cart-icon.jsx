
import { useContext } from "react"
import { ShoppingIcon, CartIconContainer,ItemCount } from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.jsx";

const CartIcon = ()=>{
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  
  const showCart = ()=>{
   setIsCartOpen(!isCartOpen)
  }
  return(
   <CartIconContainer
   onClick={showCart}
   >
     <ShoppingIcon 
     className="shopping-icon"     
     />
     <ItemCount>{cartCount}</ItemCount>
   </CartIconContainer>
  )
}

export default CartIcon;
