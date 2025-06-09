import {useState } from "react"
import { 
         createUserDocumentFromAuth,
         createAuthUserWithEmailAndPassword
       } from "../../utils/firebase/firebase.js" 
       
import FormInput from "../form-input/form-input.jsx"
import Button from "../button/button.jsx";
import "./sign-up-form.scss";


const SignUpForm = ()=>{

 const [user,setUser] = useState({
   displayName:'',
   email:'',
   password:'',
   confirmPassword:''
 })
 
 const handleOnChange = (e)=>{
    setUser({
       ...user,
      [e.target.name]:e.target.value
     })
 }

 const clearForm = ()=>{
   setUser({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
   })
 }

 const handleSubmit = async (e)=>{
     e.preventDefault();
     if(user.password !== user.confirmPassword){
       alert("Passwords do not match")
       return 
     }
     try{
      const {email, password, displayName } = user;
      const {newUser} = await createAuthUserWithEmailAndPassword(email,password)
      await createUserDocumentFromAuth(newUser,{displayName})
      clearForm();
     }
     catch(e){
      if(e.code==="auth/email-already-in-use") {
         alert('Cannot create user,email already in use')
      }
      else {
           console.log("user creation encountered an error",e);
       }
     }
 
 }

 return (
   <div className="mr-1" >
      <h2>Don't have an account</h2> 
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
         <FormInput
         label={"Display Name"}
         inputProps={ 
                     {
                     value:user.displayName,
                     required:true,
                     type:"text",
                     name:"displayName",
                     onChange:handleOnChange 
                     }
         }
         />
         <FormInput
         label={"Email"}
         inputProps={
          {type:"email",
          name:"email",
          required:true,
          value:user.email,
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
            value:user.password,
            onChange:handleOnChange
           }
          }
         />
        <FormInput
         label={"Confirm Password"}
         inputProps={{
         type:"password",
         name:"confirmPassword",
         onChange:handleOnChange,
         value:user.confirmPassword,
         }}
         /> 
         <Button 
         type="submit"
         >
         Sign Up
         </Button>
      </form>
   </div>
 )
}

export default SignUpForm;
