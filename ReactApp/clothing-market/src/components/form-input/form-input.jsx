import { FormInputLabel, Input, Group } from  "./form-input.styles.jsx";

const FormInput = ({label,inputProps})=>{

 return(
   <Group>
           {
            label && (           
           	     <FormInputLabel 
           	     shrink={inputProps.value.length}
                     className={`${inputProps.value.length ?'shrink':''} form-input-label`}
                     >
                     {label}
                     </FormInputLabel>
                   )
           }
           <Input
            { ...inputProps }
           />
  </Group>        
 )
}

export default FormInput;
