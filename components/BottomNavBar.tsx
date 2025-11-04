
import React from 'react';
import Link from './Link';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const HomeIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CategoryIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const CartIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const UserIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;

const BottomNavBar: React.FC = () => {
    const { cartCount } = useCart();
    const { isAuthenticated, openLogin } = useAuth();

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black h-16 md:hidden z-20">
            <div className="grid grid-cols-4 h-full">
                <Link to="#/" className="flex flex-col items-center justify-center text-gray-700 hover:text-blue-600">
                    <HomeIcon />
                    <span className="text-xs font-bold">Home</span>
                </Link>
                <Link to="#/products" className="flex flex-col items-center justify-center text-gray-700 hover:text-blue-600">
                    <CategoryIcon />
                    <span className="text-xs font-bold">Toys</span>
                </Link>
                 <Link to="#/cart" className="relative flex flex-col items-center justify-center text-gray-700 hover:text-blue-600">
                    <CartIcon />
                     {cartCount > 0 && <span className="absolute top-0 right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>}
                    <span className="text-xs font-bold">Cart</span>
                </Link>
                {isAuthenticated ? (
                     <Link to="#/account" className="flex flex-col items-center justify-center text-gray-700 hover:text-blue-600">
                        <UserIcon />
                        <span className="text-xs font-bold">Account</span>
                    </Link>
                ) : (
                    <button onClick={openLogin} className="flex flex-col items-center justify-center text-gray-700 hover:text-blue-600">
                        <UserIcon />
                        <span className="text-xs font-bold">Login</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default BottomNavBar;
