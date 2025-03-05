import { Link } from 'react-router-dom';
import categories from '../components/constants/categories';

const CategoriesList = () => {
  return (
    <div className="mx-auto my-8 max-w-screen-lg">
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
