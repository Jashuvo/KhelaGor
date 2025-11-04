

import React from 'react';
import Link from './Link';
import { useAuth } from '../contexts/AuthContext';
import { CATEGORIES } from '../constants';
import SearchBar from './SearchBar';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const { isAuthenticated, user, logout, openLogin } = useAuth();
    
    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose}></div>}
            <div className={`fixed top-0 left-0 h-full w-72 bg-[#FAF4E5] border-r-2 border-black shadow-lg transform transition-transform duration-300 z-50 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 border-b-2 border-black flex justify-between items-center">
                     <h2 className="text-2xl font-extrabold">KhelaGhor</h2>
                     <button onClick={onClose} className="text-3xl font-bold">&times;</button>
                </div>
                <div className="p-4">
                    <SearchBar />
                </div>
                 <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link to="#/" onClick={onClose} className="block font-bold text-lg p-2 rounded hover:bg-yellow-200">Home</Link>
                    <Link to="#/products" onClick={onClose} className="block font-bold text-lg p-2 rounded hover:bg-yellow-200">All Toys</Link>
                    <div className="pt-2">
                         <h3 className="font-bold text-gray-500 px-2">Categories</h3>
                         {CATEGORIES.map(cat => (
                             <Link key={cat.name} to={`#/products?category=${encodeURIComponent(cat.name)}`} onClick={onClose} className="block p-2 rounded hover:bg-yellow-200">{cat.name}</Link>
                         ))}
                    </div>
                 </nav>
                 <div className="p-4 border-t-2 border-black">
                    {isAuthenticated ? (
                        <div className="space-y-2">
                            <p className="font-bold">{user?.name}</p>
                            <Link to="#/account" onClick={onClose} className="block text-sm text-blue-600 hover:underline">View Account</Link>
                            <button onClick={() => { logout(); onClose(); }} className="w-full text-left font-bold text-red-500 p-2 rounded hover:bg-red-100">Logout</button>
                        </div>
                    ) : (
                        <button onClick={() => { openLogin(); onClose(); }} className="w-full bg-blue-500 text-white font-bold py-2 px-4 border-2 border-black rounded-lg">
                            Login / Signup
                        </button>
                    )}
                 </div>
            </div>
        </>
    );
};

export default MobileMenu;