import React from 'react';
import { RECENT_ORDERS } from '../../data/adminData';
import { Order, OrderStatus } from '../../types';
import AdminCard from '../../components/Admin/AdminCard';
import Link from '../../components/Link';

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

const AdminOrdersListPage: React.FC = () => {
    const orders: Omit<Order, 'items' | 'shippingInfo'>[] = RECENT_ORDERS.concat(RECENT_ORDERS); // Dummy larger list

    return (
        <AdminCard>
            <h1 className="text-2xl font-semibold mb-6">All Orders</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order, index) => (
                            <tr key={`${order.id}-${index}`}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{order.customer.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">৳{order.total.toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link to={`#/admin/order/${order.id}`} className="text-indigo-600 hover:text-indigo-900">View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminCard>
    );
};

export default AdminOrdersListPage;
