import { CartDropdownContainer ,
         CartItems,
         EmptyMessage } from "./cart-dropdown.styles.jsx"
import Button from "../button/button.jsx"
import CartItem from "../cart-item/cart-item.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.jsx";
import { useNavigate } from "react-router-dom";

const CartDropDown = ()=>{
 const { cartItems } = useContext(CartContext)
 
 const navigate = useNavigate();
 
 const goToCheckout = ()=>{
   navigate("/checkout") 
 }
 
 return (
   <CartDropdownContainer>
     <CartItems>
     {
       cartItems.length  ?  (cartItems.map((item)=><CartItem cartItem={item}/>)) : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)
     }
     </CartItems>
     <Button onClick={goToCheckout}>Checkout</Button>
   </CartDropdownContainer>
 )
}

export default CartDropDown;
