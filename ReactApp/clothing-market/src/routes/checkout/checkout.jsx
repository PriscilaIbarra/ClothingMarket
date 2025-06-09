import "./checkout.scss";
import { useContext,Fragment } from "react";
import { CartContext } from "../../contexts/cart.jsx"
import CheckoutItem from "../../components/checkout-item/checkout-item.jsx";



const Checkout = ()=>{
 const { cartItems, addItemToCart,removeItemFromCart,cartTotal } = useContext(CartContext);

 const increment = (item)=>{
   addItemToCart(item)
 }
 const decrement = (item)=>{
   removeItemFromCart(item)
 }
 return(
    <div className="container">
      <div className="row">
        <div className="col">
        Product
        </div>
        <div className="col">
         Quantity
        </div>
        <div className="col">
        Price
        </div>
        <div className="col">
        Remove
        </div>
      </div>
      <hr/>
      {cartItems && cartItems.map((item)=><CheckoutItem key={item.id} cartItem={item}/>)}
      <div className="row">
        <div className="col">
        </div>
        <div className="col">
        </div>
        <div className="col">
        </div>
        <div className="col">
           <span className="total"><strong>Total:</strong> ${cartTotal}</span>
        </div>
      </div>    
    </div>
 )
}

export default Checkout;
