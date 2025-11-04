
import React from 'react';
import { Order, OrderStatus } from '../../types';
import Link from '../Link';

interface RecentOrdersTableProps {
    orders: Omit<Order, 'items' | 'shippingInfo'>[];
}

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

const RecentOrdersTable: React.FC<RecentOrdersTableProps> = ({ orders }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {orders.slice(0, 5).map(order => (
                        <tr key={order.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                <Link to={`#/admin/order/${order.id}`}>{order.id}</Link>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{order.customer.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">৳{order.total.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(order.status)}`}>
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrdersTable;