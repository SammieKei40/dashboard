import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import { useState } from "react";
import Input from "../../ui/Input";
import { FormProvider, useForm } from "react-hook-form";

export default function LoginForm() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {   errors } = useForm();

const handleFormSubmit = (e) => {
  e.preventDefault();
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
    <Form>
        <Input 
      value={email }
      type="email" 
      label="Email" 
      size="medium" 
      styleType="input" 
      validationRules={{
        required: "Email is required",
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      }}
      onChange={(value) => setEmail(value)} 
      error={errors}
    />

    <Input 
      value={ password }
      type="password" 
      label="Password" 
      size="medium" 
      styleType="input" 
      iconClick 
      validationRules={{
        required: "Password is required",
        minLength: 6,
      }}
      onChange={(value) => setPassword(value)} 
      error={errors}
    />
                <button type="submit" onClick={handleFormSubmit}>Submit</button>
    </Form>
  )
}
