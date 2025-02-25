import { useState } from 'react';

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-white p-2 shadow-sm">
      <div className="mx-auto flex max-w-full items-center justify-center space-x-4">
        {/* Links Section */}
        <nav className="flex space-x-2 overflow-auto">
          {[
            'Doors',
            'Furniture',
            'Decor',
            'Building material',
            'Lawn',
            'Ceiling Fans',
            'Garden',
            'Bath & Faucets',
          ].map((item) => (
            <span
              key={item}
              className="cursor-pointer rounded-full bg-gray-200 px-4 py-1 text-sm text-gray-700 transition hover:bg-gray-300"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Search Section */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-1 text-sm text-black outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default NavigationBar;
