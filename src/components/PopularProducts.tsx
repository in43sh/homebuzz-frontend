import React from 'react';
import drill from '../assets/images/products/drill.png';
import paint from '../assets/images/products/paint.png';
import screwdrivers from '../assets/images/products/screwdrivers.png';
import toolkit from '../assets/images/products/toolkit.png';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  unit: string;
  rating: number;
  buttonText: string;
  buttonStyle: string;
}

const popularProducts: Product[] = [
  {
    id: 1,
    name: 'Ryobi Lithium-Ion Cordless Drill + Charger',
    image: drill,
    price: '49.99',
    unit: '/ piece',
    rating: 4,
    buttonText: 'Add to Cart',
    buttonStyle: 'bg-primary hover:bg-primary-dark text-white',
  },
  {
    id: 2,
    name: 'Stanley Screwdriver Set Philips 6pcs',
    image: screwdrivers,
    price: '29.99',
    unit: '/ set',
    rating: 4,
    buttonText: 'Added',
    buttonStyle: 'bg-black text-white cursor-not-allowed',
  },
  {
    id: 3,
    name: 'Dewalt 20V Cordless Super Drill Kit',
    image: toolkit,
    price: '29.99',
    unit: '/ gal',
    rating: 4,
    buttonText: 'Add to Cart',
    buttonStyle: 'bg-primary hover:bg-primary-dark text-white',
  },
  {
    id: 4,
    name: 'Glidden Fur Interior Antique Matte Finish',
    image: paint,
    price: '29.99',
    unit: '/ gal',
    rating: 4,
    buttonText: 'Add to Cart',
    buttonStyle: 'bg-primary hover:bg-primary-dark text-white',
  },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Create a simple star rating by repeating '★'
  const stars = '★'.repeat(product.rating);
  const emptyStars = '☆'.repeat(5 - product.rating); // for a 5-star system

  return (
    <div className="flex flex-col items-center rounded bg-white p-4 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="mb-3 h-32 w-32 object-cover"
      />
      <div className="mb-1 text-yellow-500">
        <span>
          {stars}
          {emptyStars}
        </span>
      </div>
      <h3 className="mb-1 text-center text-lg font-semibold">{product.name}</h3>
      <p className="mb-3 text-gray-700">
        <span className="text-xl font-bold">${product.price}</span>{' '}
        <span className="text-sm text-gray-500">{product.unit}</span>
      </p>
      <button
        className={`w-full rounded px-4 py-2 font-semibold transition-colors focus:outline-none ${product.buttonStyle}`}
        disabled={product.buttonText === 'Added'}
      >
        {product.buttonText}
      </button>
    </div>
  );
};

const PopularProducts: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl p-4">
      <h2 className="mb-6 text-3xl font-bold">Popular Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
