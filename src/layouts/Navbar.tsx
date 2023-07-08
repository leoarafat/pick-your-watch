import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';
import Cart from '../components/Cart';
import logo from '../assets/images/technet-logo.png';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeDrawer = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full max-w-7xl h-full mx-auto px-4">
          <Link to="/" className="flex items-center">
            <img className="h-8" src={logo} alt="log" />
          </Link>
          <div className="flex items-center">
            <Input
              type="checkbox"
              id="menu-toggle"
              className="hidden"
              checked={menuOpen}
              onChange={toggleMenu}
            />
            <label
              htmlFor="menu-toggle"
              className="block cursor-pointer md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <div
              className={`fixed top-0 right-0 h-full w-64  z-20 ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
              } md:hidden transition-transform duration-300 ease-in-out`}
            >
              <Button
                className="absolute top-2 right-2 p-2 text-gray-600"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </Button>
              <ul className="flex flex-col h-full p-4">
                <li className="mb-4">
                  <Link
                    to="/"
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/products"
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/checkout"
                    className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    Checkout
                  </Link>
                </li>
                <li className="mb-4">
                  <Button className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    <HiOutlineSearch size="25" />
                  </Button>
                </li>
                <li className="mb-4">
                  <Cart />
                </li>
              </ul>
            </div>
            <ul className="hidden md:flex items-center">
              <li className="ml-4 md:ml-0">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="ml-4 md:ml-0">
                <Link
                  to="/products"
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li className="ml-4 md:ml-0">
                <Link
                  to="/checkout"
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  Checkout
                </Link>
              </li>
              <li className="ml-4 md:ml-0">
                <Button className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li className="ml-4 md:ml-0">
                <Cart />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
