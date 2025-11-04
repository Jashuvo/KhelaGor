
import React from 'react';
import { RECENT_ORDERS } from '../data/adminData';
import { Order, OrderStatus } from '../types';
import Link from '../components/Link';

const getStatusClass = (status: OrderStatus) => {
    switch (status) {
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'Pending': return 'bg-yellow-100 text-yellow-800';
        case 'Processing': return 'bg-blue-100 text-blue-800';
        case 'Shipped': return 'bg-indigo-100 text-indigo-800';
        case 'Cancelled': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const MyOrdersPage: React.FC = () => {
    // In a real app, you would fetch orders for the logged-in user.
    // Here we use mock data for demonstration.
    const orders: Omit<Order, 'items' | 'shippingInfo'>[] = RECENT_ORDERS;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-extrabold text-black mb-8">My Orders</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    {orders.length > 0 ? (
                        <div className="bg-white p-6 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {orders.map(order => (
                                            <tr key={order.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">৳{order.total.toLocaleString()}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${getStatusClass(order.status)}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link to={`#/track-order?id=${order.id}`} className="text-indigo-600 hover:text-indigo-900">Track</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white p-8 border-2 border-black rounded-xl text-center">
                            <h2 className="text-2xl font-bold">You have no orders yet.</h2>
                            <p className="text-gray-600 mt-2">When you place an order, it will appear here.</p>
                            <Link to="#/products" className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg">Start Shopping</Link>
                        </div>
                    )}
                </div>

                {/* Sidebar Navigation */}
                <div className="md:col-span-1">
                     <div className="bg-white p-4 border-2 border-black rounded-xl">
                        <nav className="space-y-1">
                            <Link to="#/account" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">&larr; Back to Dashboard</Link>
                            <Link to="#/account/orders" className="block font-bold p-3 text-white bg-blue-500 rounded-lg">My Orders</Link>
                            <Link to="#/account/addresses" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">My Addresses</Link>
                            <Link to="#/account/settings" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">Account Settings</Link>
                        </nav>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersPage;
