import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[26rem,1fr] grid-rows-[auto,1fr] md:h-screen">
        <Header />
        <Sidebar />

        <main className="bg-gray-50 h-screen p-[2rem,2.4rem,3.2rem] md:p-[4rem,4.8rem,6.4rem] ">
            <div className="max-w-[120rem] mx-auto flex flex-col gap-8">
                <Outlet />
            </div>
        </main>
    </div>
  )
}
