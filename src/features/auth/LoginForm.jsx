/* eslint-disable react/prop-types */
import Form from "../../ui/Form";
import { useState } from "react";
import Input from "../../ui/Input";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

export default function LoginForm() {
  const {handleSubmit,  control } = useForm();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

const onSubmit = ( data) => {
  console.log(data)
};


  return (
    
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
      type="email" 
      label="Email" 
      size="medium"
      iconclick
      styletype="input" 
      placeholder=""
      control={control}
  name="email"
  validationRules={{
    required: 'Email is required',
    maxLength: {
      value: 50,
      message: 'Email should not exceed 50 characters',
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Invalid email format',
    },
  }}
  value={formData.username}
        onChange={(value) => handleInputChange('username', value)}
    />
    <Input 
      type="password" 
      label="Password" 
      size="medium" 
      styletype="input" 
      iconclick 
      name="password"
      control={control}
      validationRules={{
        required: 'Password is required',
        maxLength: {
          value: 50,
          message: 'Password should not exceed 50 characters',
        },
        minLength: {
          value: 6,
          message: 'Password should be at least 6 characters long',
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&-_.#]+$/,
          message: 'Password must contain at least one uppercase letter, one lowercase letter, and one digit',
        },
      }}
      value={formData.password}
        onChange={(value) => handleInputChange('password', value)}
     />

    {/* <Spinner /> */}
    
    <Button  
        full
        disabled={false}
        loading={false} round={false} size="medium"  type="pry">Log in</Button>
              
    </Form>
  )
}
