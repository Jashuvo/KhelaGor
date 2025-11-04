import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SearchIcon, BellIcon, MenuIcon, ChevronDownIcon } from './AdminIcons';

interface AdminHeaderProps {
    toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
    const { user, logout } = useAuth();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="relative bg-white border-b-2 border-black h-20 flex items-center justify-between px-6 z-10 flex-shrink-0">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="lg:hidden text-gray-500 mr-4">
                    <MenuIcon />
                </button>
                <div className="relative hidden md:block">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon />
                    </span>
                    <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border-2 border-black rounded-full focus:outline-none focus:border-blue-500" />
                </div>
            </div>
            <div className="flex items-center space-x-5">
                <button className="relative text-gray-500 hover:text-gray-700">
                    <BellIcon />
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="relative">
                    <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2">
                        <img src={`https://i.pravatar.cc/150?u=${user?.email}`} alt="Admin" className="w-10 h-10 rounded-full object-cover border-2 border-black" />
                        <span className="hidden md:inline font-semibold">{user?.name}</span>
                        <ChevronDownIcon />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-black rounded-lg shadow-lg z-20">
                            <a href="#/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100">My Profile</a>
                            <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;