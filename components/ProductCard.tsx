


import React from 'react';
import { Product } from '../types';
import Link from './Link';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useCompare } from '../contexts/CompareContext';

interface ProductCardProps {
  product: Product;
}

const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>;
const CompareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.18-4.181M12 2.944A11.955 11.955 0 003.382 5.984m8.636 14.433A12.02 12.02 0 0121 12a11.955 11.955 0 00-3.382-6.016m-11.236 0a11.955 11.955 0 0111.236 0" /></svg>;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();
    const { addToCompare } = useCompare();

    const hasSale = product.salePrice && product.salePrice < product.price;

    return (
        <div className="group bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000]">
            <div className="relative">
                <Link to={`#/product/${product.id}`}>
                    <div className="aspect-square w-full overflow-hidden">
                        <img src={product.imageUrl} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                </Link>
                {hasSale && (
                     <div className="absolute top-3 left-3 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-full">SALE</div>
                )}
                 <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => addToWishlist(product)} className="w-9 h-9 flex items-center justify-center bg-white border-2 border-black rounded-full text-black hover:bg-red-200"><HeartIcon /></button>
                    <button onClick={() => addToCompare(product)} className="w-9 h-9 flex items-center justify-center bg-white border-2 border-black rounded-full text-black hover:bg-blue-200"><CompareIcon /></button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-500 font-semibold">{product.category}</p>
                <h3 className="font-extrabold text-black truncate mt-1">
                    <Link to={`#/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="mt-2 flex items-baseline space-x-2">
                    <p className={`font-bold text-xl ${hasSale ? 'text-red-500' : 'text-blue-600'}`}>
                        ৳{(product.salePrice ?? product.price).toLocaleString()}
                    </p>
                    {hasSale && <p className="text-sm text-gray-500 line-through">৳{product.price.toLocaleString()}</p>}
                </div>
                <button 
                    onClick={() => addToCart(product, 1)}
                    disabled={product.stock === 0}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-yellow-300 text-black font-bold py-2.5 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-yellow-400 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#000] transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    <CartIcon />
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;