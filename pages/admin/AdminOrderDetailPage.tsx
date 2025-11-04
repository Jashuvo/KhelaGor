import React, { useState } from 'react';
import { RECENT_ORDERS } from '../../data/adminData';
import { PRODUCTS } from '../../data/products';
import { Order, OrderStatus } from '../../types';
import AdminCard from '../../components/Admin/AdminCard';
import Link from '../../components/Link';
import OrderTimeline from '../../components/Admin/OrderTimeline';
import UpdateStatusModal from '../../components/Admin/UpdateStatusModal';
import VerifyPaymentModal from '../../components/Admin/VerifyPaymentModal';

interface AdminOrderDetailPageProps {
    orderId: string;
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

const AdminOrderDetailPage: React.FC<AdminOrderDetailPageProps> = ({ orderId }) => {
    // In a real app, you'd fetch this data. We'll simulate it.
    const mockOrder: Order = {
        ...(RECENT_ORDERS.find(o => o.id === orderId) || RECENT_ORDERS[0]),
        items: [
            {...PRODUCTS[0], quantity: 1},
            {...PRODUCTS[1], quantity: 2},
        ],
        shippingInfo: {
            fullName: 'Anika Rahman',
            phone: '01234567890',
            address: 'House 123, Road 45',
            area: 'Gulshan 1',
            city: 'Dhaka',
        },
    };
    
    const [order, setOrder] = useState<Order>(mockOrder);
    const [isStatusModalOpen, setStatusModalOpen] = useState(false);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    const handleStatusUpdate = (newStatus: OrderStatus) => {
        setOrder(prev => ({ ...prev, status: newStatus }));
        setStatusModalOpen(false);
    };
    
     const handlePaymentVerification = () => {
        setOrder(prev => ({ ...prev, paymentVerified: true }));
        setPaymentModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800">Order #{order.id}</h1>
                    <p className="text-gray-500">Date: {order.date}</p>
                </div>
                <Link to="#/admin/orders" className="text-blue-600 font-semibold">&larr; Back to Orders</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <AdminCard title="Order Details">
                         <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold">Status:</h3>
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(order.status)}`}>
                                    {order.status}
                                </span>
                            </div>
                             <div>
                                <h3 className="font-semibold">Payment:</h3>
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.paymentVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {order.paymentVerified ? 'Verified' : 'Pending'}
                                </span>
                            </div>
                         </div>
                        <table className="min-w-full divide-y divide-gray-200">
                             <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {order.items.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-4 py-2 text-sm">{item.name}</td>
                                        <td className="px-4 py-2 text-sm">৳{item.price.toLocaleString()}</td>
                                        <td className="px-4 py-2 text-sm">{item.quantity}</td>
                                        <td className="px-4 py-2 text-sm text-right">৳{(item.price * item.quantity).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                             <tfoot className="bg-gray-50">
                                <tr>
                                    <td colSpan={3} className="px-4 py-2 text-right font-semibold">Subtotal:</td>
                                    <td className="px-4 py-2 text-right font-semibold">৳{order.subtotal.toLocaleString()}</td>
                                </tr>
                                 <tr>
                                    <td colSpan={3} className="px-4 py-2 text-right font-semibold">Shipping:</td>
                                    <td className="px-4 py-2 text-right font-semibold">৳{order.shipping.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="px-4 py-2 text-right font-bold text-lg">Total:</td>
                                    <td className="px-4 py-2 text-right font-bold text-lg">৳{order.total.toLocaleString()}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </AdminCard>
                </div>
                <div className="space-y-6">
                    <AdminCard title="Actions">
                         <div className="space-y-2">
                             <button onClick={() => setStatusModalOpen(true)} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update Status</button>
                             {!order.paymentVerified && <button onClick={() => setPaymentModalOpen(true)} className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Verify Payment</button>}
                         </div>
                    </AdminCard>
                    <AdminCard title="Customer Details">
                        <p><strong>{order.customer.name}</strong></p>
                        <p className="text-sm text-gray-500">{order.customer.email}</p>
                        <p className="text-sm text-gray-500 mt-2">{order.shippingInfo.address}, {order.shippingInfo.area}, {order.shippingInfo.city}</p>
                        <p className="text-sm text-gray-500">{order.shippingInfo.phone}</p>
                    </AdminCard>
                    <OrderTimeline currentStatus={order.status} />
                </div>
            </div>
            {isStatusModalOpen && <UpdateStatusModal currentStatus={order.status} onClose={() => setStatusModalOpen(false)} onUpdate={handleStatusUpdate} />}
            {isPaymentModalOpen && <VerifyPaymentModal order={order} onClose={() => setPaymentModalOpen(false)} onConfirm={handlePaymentVerification} />}
        </div>
    );
};

export default AdminOrderDetailPage;
