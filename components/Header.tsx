
import React, { useState } from 'react';
import Link from './Link';
import SearchBar from './SearchBar';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useAuth } from '../contexts/AuthContext';
import MobileMenu from './MobileMenu';
import NotificationBell from './communication/NotificationBell';

const UserIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const HeartIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>;
const CartIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const MenuIcon = () => <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const { isAuthenticated } = useAuth();
    const { openLogin } = useAuth();

    const ActionButton: React.FC<{ to?: string; onClick?: () => void; count?: number; children: React.ReactNode }> = ({ to, onClick, count, children }) => {
        const content = (
            <div className="relative text-gray-700 hover:text-blue-600">
                {children}
                {count !== undefined && count > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{count}</span>
                )}
            </div>
        );

        return to ? <Link to={to}>{content}</Link> : <button onClick={onClick}>{content}</button>;
    };
    
    const handleUserClick = () => {
        if (isAuthenticated) {
            window.location.hash = '#/account';
        } else {
            openLogin();
        }
    };

    return (
        <>
            <header className="bg-white border-b-2 border-black sticky top-0 z-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(true)} className="text-black">
                                <MenuIcon />
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="#/" className="text-3xl font-extrabold text-black tracking-tighter">KhelaGhor</Link>
                        </div>
                        
                        {/* Desktop Search & Nav */}
                        <div className="hidden lg:flex items-center flex-1 justify-center px-8">
                           <div className="w-full max-w-lg">
                             <SearchBar />
                           </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden lg:flex items-center space-x-4">
                                <Link to="#/products" className="font-bold text-gray-800 hover:text-blue-600">All Toys</Link>
                                <Link to="#/support" className="font-bold text-gray-800 hover:text-blue-600">Support</Link>
                            </div>
                            
                            <NotificationBell />

                            <ActionButton to="#/wishlist" count={wishlistCount}>
                                <HeartIcon />
                            </ActionButton>
                            
                            <ActionButton to="#/cart" count={cartCount}>
                                <CartIcon />
                            </ActionButton>

                            <ActionButton onClick={handleUserClick}>
                                <UserIcon />
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Header;
