import React from 'react';
import Link from '../components/Link';
import { useAuth } from '../contexts/AuthContext';
import { RECENT_ORDERS } from '../data/adminData';

const AccountPage: React.FC = () => {
    const { user, logout } = useAuth();
    const recentOrder = RECENT_ORDERS[0]; // Dummy data

    if (!user) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
                <p>Please log in to view your account.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-extrabold text-black mb-8">My Account</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    {/* Welcome Message */}
                    <div className="bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] text-gray-800">
                        <h2 className="text-2xl font-bold">Hello, {user?.name}!</h2>
                        <p className="text-gray-600 mt-2">From your account dashboard you can view your recent orders, manage your shipping addresses, and edit your password and account details.</p>
                    </div>

                    {/* Recent Order */}
                    {!user.isAdmin && (
                        <div className="bg-white p-6 border-2 border-black rounded-xl text-gray-800">
                            <h3 className="text-xl font-bold mb-4">Recent Order</h3>
                            {recentOrder ? (
                                <div>
                                    <div className="flex justify-between items-center flex-wrap gap-2">
                                        <p>Order #{recentOrder.id}</p>
                                        <p>{recentOrder.date}</p>
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">{recentOrder.status}</span>
                                    </div>
                                    <p className="mt-2">Total: ৳{recentOrder.total.toLocaleString()}</p>
                                </div>
                            ) : <p>You have no recent orders.</p>}
                            <Link to="#/account/orders" className="font-bold text-blue-600 hover:underline mt-4 inline-block">View All Orders &rarr;</Link>
                        </div>
                    )}
                </div>

                {/* Sidebar Navigation */}
                <div className="md:col-span-1">
                     <div className="bg-white p-4 border-2 border-black rounded-xl">
                        <nav className="space-y-1">
                            <Link to="#/account" className="block font-bold p-3 text-white bg-blue-500 rounded-lg">Dashboard</Link>
                            {user.isAdmin ? (
                                <Link to="#/admin" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">Admin Panel</Link>
                            ) : (
                                <>
                                    <Link to="#/account/orders" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">My Orders</Link>
                                    <Link to="#/account/addresses" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">My Addresses</Link>
                                </>
                            )}
                            <Link to="#/account/settings" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">Account Settings</Link>
                            <button onClick={logout} className="w-full text-left font-semibold p-3 text-red-600 rounded-lg hover:bg-red-100">Logout</button>
                        </nav>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;