import { useState } from "react"
import { 
         signInWithGooglePopup,
         createUserDocumentFromAuth,
         createAuthUserWithEmailAndPassword,
         signInAuthUserWithEmailAndPassword
       } from "../../utils/firebase/firebase.js" 
       
import FormInput from "../form-input/form-input.jsx"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.jsx";
import "./sign-in-form.scss";

const SignInForm = ()=>{

 const [formFields,setFormFields] = useState({
   email:'',
   password:''
 })
 
 
 const handleOnChange = (e)=>{
    setFormFields({
       ...formFields,
      [e.target.name]:e.target.value
     })
 }

 const clearForm = ()=>{
   setFormFields({
    email:'',
    password:''
   })
 }
 
 const singInWithGoogle = async ()=>{
        await signInWithGooglePopup();          
 }
 

 const handleSubmit = async (e)=>{
     e.preventDefault();
     try{
      const {email, password} = formFields;
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);
      clearForm();
     }
     catch(e){
      switch(e.code){
       case "auth/wrong-password":
                   alert('Incorrect Password or Email');
                   break;
       case "auth/user-not-found":
                   alert("User not found");
                   break;
         default:
               console.log(e)
               break;           
      }
     }
 
 }

 return (
   <div className="ml-1 mr-1">
      <h2>Already have an account?</h2> 
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
         <FormInput
         label={"Email"}
         inputProps={
          {type:"email",
          name:"email",
          required:true,
          value:formFields.email,
          onChange:handleOnChange
          }
         }
         />
         <FormInput
         label={"Password"}
         inputProps={ 
          { type:"password",
            name:"password",
            required:true,
            value:formFields.password,
            onChange:handleOnChange
           }
          }
         />      
         <div className="buttons-container">  
            <Button 
            type="submit"
            >
            Sign In
           </Button>
           <Button 
           type="button"
           buttonType={BUTTON_TYPE_CLASSES.google}
           onClick={singInWithGoogle}
           >
           Google Sign In  
           </Button>
         </div>
      </form>
   </div>
 )
}

export default SignInForm;
