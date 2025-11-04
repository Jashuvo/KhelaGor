import React, { useState } from 'react';
import { RECENT_ORDERS } from '../data/adminData';
import OrderTimeline from '../components/tracking/OrderTimeline';
import { Order } from '../types';

const TrackOrderPage: React.FC = () => {
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState<Omit<Order, 'items'|'shippingInfo'> | null>(null);
    const [error, setError] = useState('');

    const handleTrackOrder = (e: React.FormEvent) => {
        e.preventDefault();
        const foundOrder = RECENT_ORDERS.find(o => o.id === orderId);
        if (foundOrder) {
            setOrder(foundOrder);
            setError('');
        } else {
            setOrder(null);
            setError('Order not found. Please check the ID and try again.');
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-black">Track Your Order</h1>
                <p className="text-gray-600 mt-2">Enter your order ID below to see its status.</p>
            </div>
            
            <div className="max-w-xl mx-auto mt-8 bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
                <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="Enter your Order ID (e.g., KG-1698156789)"
                        className="w-full border-2 p-3 rounded-lg font-semibold border-black"
                    />
                    <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000]">
                        Track
                    </button>
                </form>
                {error && <p className="text-red-500 font-semibold mt-4 text-center">{error}</p>}
            </div>

            {order && (
                <div className="max-w-xl mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4">Order Status for #{order.id}</h2>
                    <OrderTimeline currentStatus={order.status} />
                </div>
            )}
        </div>
    );
};

export default TrackOrderPage;
