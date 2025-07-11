import "./cart-item.scss"

const CartItem = ({cartItem})=>{
 const {name, imageUrl, price,quantity} = cartItem;
 
 return(
   <div className="cart-item-container">
     <img src={imageUrl} />
     <div 
     className="item-details"
     >
       <span
        className="name"
        >
        {name}
        </span>
       <span
        className="price"
        >
        {quantity} x $ {price}
        </span>
     </div>
   </div>
 )
}

export default CartItem;
