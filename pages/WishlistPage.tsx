import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/ProductCard';
import Link from '../components/Link';

const EmptyWishlistIcon = () => (
     <svg className="w-24 h-24 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);


const WishlistPage: React.FC = () => {
    const { wishlistItems, wishlistCount } = useWishlist();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-extrabold text-black mb-8">My Wishlist ({wishlistCount})</h1>
            
            {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {wishlistItems.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                     <div className="max-w-md mx-auto bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
                        <EmptyWishlistIcon />
                        <h2 className="text-3xl font-extrabold text-black mt-4">Your Wishlist is Empty</h2>
                        <p className="text-gray-600 mt-2">Explore our amazing toys and add your favorites to come back to them later!</p>
                         <Link
                            to="#/products"
                            className="mt-6 block w-full bg-blue-500 text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600 transition-all duration-200"
                        >
                            Find Toys
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
