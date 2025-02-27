import { Link } from 'react-router-dom';

const CategoriesList = () => {
  const categories = [
    'Bath & Faucets',
    'Decor & Furniture',
    'Paint & building materials',
    'Doors & Windows',
    'Electrical',
    'Flooring',
    'Hardware',
    'Heating & Cooling',
    'Ceiling Fans',
    'Plumbing',
    'Lawn & Garden',
    'Seasonal & Outdoor living',
    'Kitchenware',
    'Appliances',
    'Storage',
  ];

  return (
    <div className="mx-auto mt-8 max-w-screen-lg">
      <div className="grid grid-cols-5 gap-4 text-gray-700">
        {categories.map((category) => (
          <Link key={category} to="/" className="underline hover:text-gray-900">
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
