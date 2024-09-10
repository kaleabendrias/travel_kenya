import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import SignOut from "./SignOut";
import { isAuthenticated } from "./auth.helper";
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">Travel Kenya</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            {isAuthenticated() && (
              <>
                <NavLink to="/map">Map</NavLink>
                <NavLink to="/weather">Weather</NavLink>
                <NavLink to="/info">Info</NavLink>
              </>
            )}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {!isAuthenticated() ? (
              <Link 
                to="/signin" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </Link>
            ) : (
              <SignOut />
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/about">About</MobileNavLink>
          <MobileNavLink to="/contactus">Contact Us</MobileNavLink>
          {isAuthenticated() && (
            <>
              <MobileNavLink to="/map">Map</MobileNavLink>
              <MobileNavLink to="/weather">Weather</MobileNavLink>
              <MobileNavLink to="/info">Info</MobileNavLink>
            </>
          )}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="mt-3 space-y-1">
            {!isAuthenticated() ? (
              <Link
                to="/signin"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sign In
              </Link>
            ) : (
              <div className="px-4">
                <SignOut />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
  >
    {children}
  </Link>
);

export default NavBar;