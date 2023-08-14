/* eslint-disable react/prop-types */
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import { useState } from "react";
import Input from "../../ui/Input";
import { FormProvider, useForm } from "react-hook-form";

export default function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {handleSubmit,   errors, register } = useForm();

  // const handleFormSubmit = (data) => {
  //   onSubmit(data);
  // };
const handleFormSubmit = () => {
  if (!email || !password) return;
  console.log(email, password)
  // login(
  //   { email, password },
  //   {
  //     onSettled: () => {
  //       setEmail("");
  //       setPassword("");
  //     },
  //   }
  // );
};


  return (
    <Form >
        <Input 
      value={email }
      type="email" 
      label="Email" 
      size="medium"
      iconclick
      styletype="input" 
      placeholder=""
      // validationRules={{
      //   required: "Email is required",
      //   pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      // }}
      onChange={(value) => setEmail(value)} 
      error={errors}
    />

    <Input 
      value={ password }
      type="password" 
      label="Password" 
      size="medium" 
      styletype="input" 
      iconclick 
      // validationRules={{
      //   required: "Password is required",
      //   minLength: 6,
      // }}
      onChange={(value) => setPassword(value)} 
      error={errors}
    />
                <button type="submit" onClick={handleSubmit(handleFormSubmit)}>Submit</button>
    </Form>
  )
}
