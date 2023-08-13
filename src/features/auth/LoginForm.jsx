import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import { useState } from "react";
import Input from "../../ui/Input";

export default function LoginForm() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

//   const { login, isLoading } = useLogin();

  function handleSubmit(e) {
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
  }


  return (
    <Form  onSubmit={handleSubmit}>
            <Input 
                value={{ error, value: email }}
                // icon={<AiFillEye />}
                type="email" 
                label="Email" 
                size="medium" 
                styleType="input" 
                iconClick 
                onChange={(value) => setEmail(value)} 
                
            />
            <Input 
                value={{ error, value: password }}
                // icon={EyeClosedIcon}
                type="password" 
                label="Password" 
                size="medium" 
                styleType="input" 
                iconClick 
                onChange={(value) => setPassword(value)} 
            />
            <button type="submit">Submit</button>
    </Form>
  )
}
