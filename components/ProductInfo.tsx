import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useCompare } from '../contexts/CompareContext';
import QuantitySelector from './QuantitySelector';

interface ProductInfoProps {
  product: Product;
}

const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>;
const CompareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.18-4.181M12 2.944A11.955 11.955 0 003.382 5.984m8.636 14.433A12.02 12.02 0 0121 12a11.955 11.955 0 00-3.382-6.016m-11.236 0a11.955 11.955 0 0111.236 0" /></svg>;
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>;

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();
    const { addToCompare } = useCompare();

    const hasSale = product.salePrice && product.salePrice < product.price;

    return (
        <div>
            <p className="font-bold text-blue-600 uppercase tracking-wide">{product.brand}</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black mt-2">{product.name}</h1>
            
            <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                </div>
                <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
            </div>
            
             <div className="mt-6">
                <div className="flex items-baseline space-x-3">
                     <p className={`font-extrabold text-4xl ${hasSale ? 'text-red-500' : 'text-blue-600'}`}>
                        ৳{(product.salePrice ?? product.price).toLocaleString()}
                    </p>
                    {hasSale && <p className="text-2xl text-gray-500 line-through">৳{product.price.toLocaleString()}</p>}
                </div>
                 <p className={`mt-2 font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.availability} ({product.stock} left)
                </p>
            </div>
            
            <p className="mt-6 text-gray-700 leading-relaxed">
                {product.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <QuantitySelector initialQuantity={1} onQuantityChange={setQuantity} maxQuantity={product.stock} />
                <button
                    onClick={() => addToCart(product, quantity)}
                    disabled={product.stock === 0}
                    className="w-full sm:w-auto flex-grow flex items-center justify-center bg-yellow-300 text-black font-bold text-lg py-4 px-8 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-yellow-400 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 disabled:bg-gray-400"
                >
                    <CartIcon />
                    Add to Cart
                </button>
            </div>
            
             <div className="mt-6 flex items-center space-x-4">
                <button onClick={() => addToWishlist(product)} className="flex items-center font-semibold text-gray-700 hover:text-red-500">
                    <HeartIcon /> Add to Wishlist
                </button>
                 <button onClick={() => addToCompare(product)} className="flex items-center font-semibold text-gray-700 hover:text-blue-500">
                    <CompareIcon /> Add to Compare
                </button>
            </div>

        </div>
    );
};

export default ProductInfo;
