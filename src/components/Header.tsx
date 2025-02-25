import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#353b3e] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Logo
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

        {/* Cart and Login - Right Side */}
        <div className="hidden items-center space-x-6 md:flex">
          <a href="/cart" className="hover:text-gray-300">
            <ShoppingCartIcon className="h-6 w-6" />
          </a>
          <a href="/login" className="hover:text-gray-300">
            Login
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
        <nav className="space-y-4 bg-[#353b3e] p-4 md:hidden">
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
            className="block flex items-center space-x-2 hover:text-gray-300"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart</span>
          </a>
          <a href="/login" className="block hover:text-gray-300">
            Login
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
