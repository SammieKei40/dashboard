import MainNav from "./MainNav";
import MobileMainNav from "./MobileMainNav";

export default function Sidebar() {
  return (
    <>
    <aside className="bg-gray-50 p-[3.2rem] border md:flex lg:flex flex-col hidden shadow-lg row-span-full gap-6">
        <MainNav />
    </aside>
    <aside className="flex md:hidden lg:hidden">
      <MobileMainNav/>
    </aside>
    </>
  )
}
