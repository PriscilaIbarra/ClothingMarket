import Home from "./routes/home/home.jsx"
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.jsx"
import SignIn from "./routes/sign-in/sign-in.jsx" 
import Shop from "./routes/shop/shop.jsx"
import Checkout from "./routes/checkout/checkout.jsx"
import SignUp from "./routes/sign-up/sign-up.jsx"

const App = ()=>{

 return(
     <Routes>
       <Route path="/" element={ <Navigation/> }>
      	    <Route index element={<Home/>} />   
      	    <Route path="shop/*" element={<Shop/>} />        	    
      	    <Route path="sign-in" element={<SignIn/>} />      
      	    <Route path="sign-up" element={<SignUp/>} />	    
      	    <Route path="checkout" element={<Checkout/>}/>
       </Route>       
     </Routes> 
   )
}



export default App;
