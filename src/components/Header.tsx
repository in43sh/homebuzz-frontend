import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-dark text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          {/* Logo */}
          <img src={logo} alt="Logo" className="inline h-9 max-h-12 w-auto" />
        </a>

        {/* Desktop Menu - Centered */}
        <nav className="hidden flex-1 justify-center space-x-6 md:flex">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/store" className="hover:text-gray-300">
            Store
          </a>
          <a href="/tutorials" className="hover:text-gray-300">
            Tutorials
          </a>
          <a href="/help" className="hover:text-gray-300">
            Help
          </a>
        </nav>

        {/* Cart and Sign in - Right Side */}
        <div className="hidden items-center space-x-6 md:flex">
          <a href="/cart" className="hover:text-gray-300">
            <ShoppingCartIcon className="h-6 w-6" />
          </a>
          <a href="/signin" className="hover:text-gray-300">
            Sign in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="bg-gray-dark space-y-4 p-4 md:hidden">
          <a href="/" className="block hover:text-gray-300">
            Home
          </a>
          <a href="/store" className="block hover:text-gray-300">
            Store
          </a>
          <a href="/tutorials" className="block hover:text-gray-300">
            Tutorials
          </a>
          <a href="/help" className="block hover:text-gray-300">
            Help
          </a>
          <a
            href="/cart"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart</span>
          </a>
          <a href="/signin" className="block hover:text-gray-300">
            Sign In
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
