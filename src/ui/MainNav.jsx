import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';

function MainNav() {
    const location = useLocation();

    const navLinks = [
      { to: '/dashboard', icon: <HiOutlineHome />, label: 'Home' },
      { to: '/bookings', icon: <HiOutlineHome />, label: 'Bookings' },
      { to: '/cabins', icon: <HiOutlineHome />, label: 'Cabins' },
      { to: '/users', icon: <HiOutlineHome />, label: 'Users' },
      { to: '/settings', icon: <HiOutlineHome />, label: 'Settings' },
    ];
  
    return (
      <nav>
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <li key={index} className='text-4xl'>
              <NavLink
                to={link.to}
                className={`flex items-center  gap-5 text-gray-600 font-medium  py-3 px-6 transition duration-500 hover:text-white hover:bg-gray-500 rounded-lg ${
                  location.pathname === link.to ? 'text-gray-800 bg-red-500 rounded-sm' : ''
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default MainNav;


