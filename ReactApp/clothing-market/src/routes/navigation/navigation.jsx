import { Outlet ,Link} from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./navigation.scss"
import { UserContext } from "../../contexts/user.jsx"
import { signOutUser } from "../../utils/firebase/firebase.js"
import { CartContext} from "../../contexts/cart.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.jsx"
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./style.jsx"


const Navigation = ()=>{
 const { currentUser } = useContext(UserContext);
 const { isCartOpen  } = useContext(CartContext);

 return(
   <Fragment>
      <NavigationContainer>
         <LogoContainer to="/">
           <Logo  className="logo"/>
         </LogoContainer>
         <NavLinks>
           <NavLink to="/shop">
              Shop
           </NavLink>
           {
            currentUser ? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) : (<NavLink to="/sign-in">
                                                                            Sign In
                                                                          </NavLink>)
            }
            <CartIcon/>
         </NavLinks>
         { isCartOpen && <CartDropDown/> }
      </NavigationContainer>
      <Outlet />  
   </Fragment>
 )
}

export default Navigation;
