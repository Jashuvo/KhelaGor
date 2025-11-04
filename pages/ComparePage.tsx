import React from 'react';
import { useCompare } from '../contexts/CompareContext';
import Link from '../components/Link';
import { useCart } from '../contexts/CartContext';

const ComparePage: React.FC = () => {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  const features = ['Rating', 'Price', 'Age Group', 'Category', 'Brand', 'Availability', 'Stock'];

  if (compareItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-extrabold text-black">Compare Products</h1>
        <p className="mt-4 text-gray-600">You haven't added any products to compare yet.</p>
        <Link to="#/products" className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg">
          Browse Products
        </Link>
      </div>
    );
  }

  const getFeatureValue = (product: typeof compareItems[0], feature: string) => {
      switch(feature) {
          case 'Rating': return `${product.rating} ★ (${product.reviewCount} reviews)`;
          case 'Price': return `৳${(product.salePrice ?? product.price).toLocaleString()}`;
          case 'Age Group': return `${product.ageGroup} years`;
          case 'Category': return product.category;
          case 'Brand': return product.brand;
          case 'Availability': return product.availability;
          case 'Stock': return product.stock > 0 ? `${product.stock} units` : 'Out of Stock';
          default: return '-';
      }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-black">Compare Products</h1>
        <button onClick={clearCompare} className="font-semibold text-red-600 hover:underline">Clear All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-gray-100 font-bold text-black border-2 border-black rounded-tl-lg w-1/5">Feature</th>
              {compareItems.map(product => (
                <th key={product.id} className="py-4 px-6 border-2 border-black bg-white text-center">
                    <div className="flex flex-col items-center">
                        <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover rounded-md mb-2" />
                        <Link to={`#/product/${product.id}`} className="font-bold text-black hover:text-blue-600">{product.name}</Link>
                        <button onClick={() => removeFromCompare(product.id)} className="mt-2 text-xs text-red-500">Remove</button>
                    </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map(feature => (
              <tr key={feature} className="border-b-2 border-black">
                <td className="py-4 px-6 font-bold text-black bg-gray-100 border-x-2 border-black">{feature}</td>
                {compareItems.map(product => (
                  <td key={product.id} className="py-4 px-6 text-center text-gray-800 border-x-2 border-black bg-white">
                      {getFeatureValue(product, feature)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-gray-50">
                <td className="py-4 px-6 font-bold bg-gray-100 border-x-2 border-b-2 border-black rounded-bl-lg"></td>
                {compareItems.map(product => (
                    <td key={product.id} className="py-4 px-6 text-center border-x-2 border-b-2 border-black rounded-br-lg bg-white">
                        <button
                            onClick={() => addToCart(product, 1)}
                            disabled={product.stock === 0}
                            className="bg-yellow-300 text-black font-bold py-2 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-yellow-400 disabled:bg-gray-400"
                        >
                            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePage;