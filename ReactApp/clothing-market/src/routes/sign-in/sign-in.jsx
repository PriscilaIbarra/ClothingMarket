import SignUpForm from "../../components/sign-up-form/sign-up-form.jsx" 
import SignInForm from  "../../components/sign-in-form/sign-in-form.jsx"
import "./sign-in.scss" 
import { Link } from "react-router-dom";

const SignIn = ()=> {
  
 return(
   <div className="container">
     <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <SignInForm/>
          <sub>
           <a href="/sign-up">
             Don't have an account? Sing Up.
           </a>
          </sub>
        </div>
        <div className="col-md-4">
        </div>
     </div>
   </div>   
 )
}

export default SignIn;
