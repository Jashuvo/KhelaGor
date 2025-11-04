
import React from 'react';
import { Product } from '../types';
import Link from './Link';
import { useCart } from '../contexts/CartContext';

interface ProductListCardProps {
    product: Product;
}

const ProductListCard: React.FC<ProductListCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const hasSale = product.salePrice && product.salePrice < product.price;

    return (
        <div className="flex flex-col sm:flex-row gap-6 bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] p-4">
            <div className="flex-shrink-0">
                <Link to={`#/product/${product.id}`}>
                    <img src={product.imageUrl} alt={product.name} className="w-full sm:w-48 h-48 object-cover rounded-lg border-2 border-black" />
                </Link>
            </div>
            <div className="flex flex-col flex-grow">
                <p className="text-sm text-gray-500 font-semibold">{product.category}</p>
                <h3 className="font-extrabold text-black text-xl mt-1">
                    <Link to={`#/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">{product.description.substring(0, 100)}...</p>
                 <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                         <p className={`font-bold text-2xl ${hasSale ? 'text-red-500' : 'text-blue-600'}`}>
                            ৳{(product.salePrice ?? product.price).toLocaleString()}
                        </p>
                        {hasSale && <p className="text-md text-gray-500 line-through">৳{product.price.toLocaleString()}</p>}
                    </div>
                     <button 
                        onClick={() => addToCart(product, 1)}
                        disabled={product.stock === 0}
                        className="bg-yellow-300 text-black font-bold py-2.5 px-6 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-yellow-400"
                    >
                        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductListCard;
