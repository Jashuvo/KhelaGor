import React, { useState, useEffect } from 'react';
import { Order, OrderStatus, CartItem } from '../../types';
import { RECENT_ORDERS } from '../../data/adminData';
import { PRODUCTS } from '../../data/products';
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
    const [order, setOrder] = useState<Order | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isStatusModalOpen, setStatusModalOpen] = useState(false);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    useEffect(() => {
        // Find the partial order from dummy data
        const partialOrder = RECENT_ORDERS.find(o => o.id === orderId);
        if (partialOrder) {
            // Construct a full order with items and shipping info (mocked)
            // In a real app, this would be a single API call.
            const fullOrder: Order = {
                ...partialOrder,
                items: [
                    { ...PRODUCTS[0], quantity: 1 },
                    { ...PRODUCTS[1], quantity: 2 },
                ],
                shippingInfo: {
                    fullName: partialOrder.customer.name,
                    phone: '+8801234567890',
                    address: 'House 123, Road 45',
                    city: 'Dhaka',
                    area: 'Gulshan',
                },
            };
            setOrder(fullOrder);
        }
        setIsLoading(false);
    }, [orderId]);

    const handleStatusUpdate = (newStatus: OrderStatus) => {
        setOrder(prev => (prev ? { ...prev, status: newStatus } : null));
        setStatusModalOpen(false);
    };

    const handlePaymentVerification = () => {
        setOrder(prev => (prev ? { ...prev, paymentVerified: true } : null));
        setPaymentModalOpen(false);
    };

    if (isLoading) {
        return <AdminCard title="Loading Order..."><p>Please wait...</p></AdminCard>;
    }

    if (!order) {
        return (
            <AdminCard title="Order Not Found">
                <p>Could not find an order with ID: {orderId}</p>
                <Link to="#/admin/orders" className="mt-4 inline-block text-blue-600 hover:underline">
                    &larr; Back to Orders List
                </Link>
            </AdminCard>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Order Details: {order.id}</h1>
                <Link to="#/admin/orders" className="text-sm font-medium text-blue-600 hover:underline">
                    &larr; Back to Orders
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <AdminCard title={`Order Items (${order.items.length})`}>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {order.items.map((item: CartItem) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">৳{(item.salePrice ?? item.price).toLocaleString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">৳{((item.salePrice ?? item.price) * item.quantity).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </AdminCard>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminCard title="Customer Details">
                            <p className="font-semibold">{order.customer.name}</p>
                            <a href={`mailto:${order.customer.email}`} className="text-blue-600 hover:underline">{order.customer.email}</a>
                        </AdminCard>
                        <AdminCard title="Shipping Address">
                            <p className="font-semibold">{order.shippingInfo.fullName}</p>
                            <p>{order.shippingInfo.address}</p>
                            <p>{order.shippingInfo.area}, {order.shippingInfo.city}</p>
                            <p>{order.shippingInfo.phone}</p>
                        </AdminCard>
                    </div>
                </div>
                
                <div className="lg:col-span-1 space-y-6">
                    <AdminCard title="Order Summary & Actions">
                        <div className="space-y-2">
                            <div className="flex justify-between"><span>Subtotal</span><span>৳{order.subtotal.toLocaleString()}</span></div>
                            <div className="flex justify-between"><span>Shipping</span><span>৳{order.shipping.toLocaleString()}</span></div>
                            <div className="flex justify-between font-extrabold text-lg border-t pt-2 mt-2"><span>Total</span><span>৳{order.total.toLocaleString()}</span></div>
                        </div>
                        
                        <div className="mt-4 border-t pt-4 space-y-2">
                             <div className="flex justify-between items-center">
                                <span className="font-semibold">Status:</span>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(order.status)}`}>
                                    {order.status}
                                </span>
                            </div>
                            <button onClick={() => setStatusModalOpen(true)} className="w-full text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">Update Status</button>
                        </div>

                         <div className="mt-4 border-t pt-4 space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Payment:</span>
                                <span className={`font-semibold ${order.paymentVerified ? 'text-green-600' : 'text-orange-500'}`}>
                                    {order.paymentVerified ? 'Verified' : 'Pending'}
                                </span>
                            </div>
                            {!order.paymentVerified && order.paymentMethod !== 'COD' && (
                                <button onClick={() => setPaymentModalOpen(true)} className="w-full text-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">Verify Payment</button>
                            )}
                        </div>
                    </AdminCard>
                    
                    <OrderTimeline currentStatus={order.status} />
                </div>
            </div>
            
            {isStatusModalOpen && (
                <UpdateStatusModal
                    currentStatus={order.status}
                    onClose={() => setStatusModalOpen(false)}
                    onUpdate={handleStatusUpdate}
                />
            )}
             {isPaymentModalOpen && (
                <VerifyPaymentModal
                    order={order}
                    onClose={() => setPaymentModalOpen(false)}
                    onConfirm={handlePaymentVerification}
                />
            )}
        </div>
    );
};

export default AdminOrderDetailPage;
