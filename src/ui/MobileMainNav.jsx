import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';

function MobileMainNav() {
  const location = useLocation();

  const navLinks = [
    { to: '/dashboard', icon: <HiOutlineHome />, label: 'Home' },
    { to: '/bookings', icon: <HiOutlineHome />, label: 'Bookings' },
      { to: '/cabins', icon: <HiOutlineHome />, label: 'Cabins' },
      { to: '/users', icon: <HiOutlineHome />, label: 'Users' },
      { to: '/settings', icon: <HiOutlineHome />, label: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-yellow-500 shadow-lg z-10">
      <ul className="flex justify-around py-3">
        {navLinks.map((link, index) => (
          <li key={index} className="text-center text-4xl">
            <NavLink
              to={link.to}
              className={`flex flex-col items-center gap-1 p-2 text-gray-500 transition duration-500 hover:text-white hover:bg-gray-500 rounded-lg ${
                location.pathname === link.to ? 'text-gray-800 bg-red-500' : ''
              }`}
            >
              {link.icon}
              <span className="text-lg">{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileMainNav;
