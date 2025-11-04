import React from 'react';
import Link from '../Link';
import { DashboardIcon, ProductsIcon, OrdersIcon, CustomersIcon, ReviewsIcon, SettingsIcon, LogoutIcon, SmsIcon } from './AdminIcons';
import { useAuth } from '../../contexts/AuthContext';

interface AdminSidebarProps {
    isOpen: boolean;
}

const NavLink: React.FC<{ to: string, icon: React.ReactNode, children: React.ReactNode }> = ({ to, icon, children }) => {
    const isActive = window.location.hash === to;
    const activeClasses = 'bg-yellow-200 text-black';
    const defaultClasses = 'text-gray-800 hover:bg-gray-100';

    return (
        <Link to={to} className={`flex items-center px-4 py-2.5 rounded-lg transition-colors ${isActive ? activeClasses : defaultClasses}`}>
            {icon}
            <span className="ml-3 font-semibold">{children}</span>
        </Link>
    );
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen }) => {
    const { logout } = useAuth();
    const sidebarClasses = `bg-white border-r-2 border-black flex-shrink-0 transition-all duration-300 ease-in-out lg:block ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`;

    return (
        <aside className={sidebarClasses}>
            <div className="flex flex-col h-full">
                <div className="h-20 border-b-2 border-black flex items-center justify-center">
                    <Link to="#/" className="text-2xl font-extrabold text-black">KhelaGhor</Link>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <NavLink to="#/admin/dashboard" icon={<DashboardIcon />}>Dashboard</NavLink>
                    <NavLink to="#/admin/products" icon={<ProductsIcon />}>Products</NavLink>
                    <NavLink to="#/admin/orders" icon={<OrdersIcon />}>Orders</NavLink>
                    <NavLink to="#/admin/reviews" icon={<ReviewsIcon />}>Reviews</NavLink>
                    <NavLink to="#/admin/sms" icon={<SmsIcon />}>SMS Marketing</NavLink>
                </nav>
                <div className="px-4 py-6 border-t-2 border-black">
                     <button onClick={logout} className="flex items-center w-full px-4 py-2.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                        <LogoutIcon />
                        <span className="ml-3 font-semibold">Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;