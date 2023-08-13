import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[26rem,1fr] grid-rows-[auto,1fr] md:h-screen">
        <Header />
        <Sidebar/>

        <main className="bg-gray-50 p-6 md:p-8 mx-auto flex flex-col gap-8">
                <Outlet />
                <div className="h-20 md:h-0 lg:h-0" />
        </main>
    </div>
  )
}
