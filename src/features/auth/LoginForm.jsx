/* eslint-disable react/prop-types */
import Form from "../../ui/Form";
import { useState } from "react";
import Input from "../../ui/Input";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

export default function LoginForm() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {handleSubmit,   errors, control } = useForm();

  // const handleFormSubmit = (data) => {
  //   console.log(data);
  // };
// const handleFormSubmit = () => {
//   // if (!email || !password) return;
//   console.log(email, password)
//   // login(
//   //   { email, password },
//   //   {
//   //     onSettled: () => {
//   //       setEmail("");
//   //       setPassword("");
//   //     },
//   //   }
//   // );
// };
const onSubmit = ( e) => {
  e.preventDefault()
  console.log(email, password)
};


  return (
    
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
      value={email }
      type="email" 
      label="Email" 
      size="medium"
      iconclick
      styletype="input" 
      placeholder=""
      control={control}
  name="email"
  rules={{
    required: 'Username is required',
    minLength: {
      value: 3,
      message: 'Username must be at least 3 characters long',
    },
  }}
      // validationRules={{
      //   required: "Email is required",
      //   pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      // }}
      onChange={(value) => setEmail(value)} 
      // error={errors}
    />
    <Input 
      value={ password }
      type="password" 
      label="Password" 
      size="medium" 
      styletype="input" 
      iconclick 
      name="password"
      rules={{
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
      }}
      // validationRules={{
      //   required: "Password is required",
      //   minLength: 6,
      // }}
      onChange={(value) => setPassword(value)} 
      error={errors}
    />

    {/* <Spinner /> */}
    
    <Button  
        full
        disabled={false}
        loading={false} round={false} size="medium"  type="pry">Log in</Button>
              
    </Form>
  )
}
