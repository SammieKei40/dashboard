import LoginForm from "../features/auth/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen grid items-center p-5 text-center grid-cols-0  md:grid-cols-[48rem] md:place-content-center  bg-gray-50">

        <h1 className="font-bold mb-5 text-4xl md:text-6xl ">Log into your account</h1>
        <LoginForm />
    </main>
  )
}
