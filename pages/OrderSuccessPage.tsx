import React from 'react';
import Link from '../components/Link';

interface OrderSuccessPageProps {
    orderId?: string;
}

const SuccessIcon = () => (
    <svg className="w-24 h-24 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const OrderSuccessPage: React.FC<OrderSuccessPageProps> = ({ orderId }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="max-w-lg mx-auto bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
                <SuccessIcon />
                <h1 className="text-3xl font-extrabold text-black mt-4">Thank You For Your Order!</h1>
                <p className="text-gray-600 mt-2">Your order has been placed successfully. We've sent a confirmation to your email.</p>
                {orderId && (
                    <p className="mt-4 font-bold text-lg">
                        Your Order ID is: <span className="text-blue-600">{orderId}</span>
                    </p>
                )}
                 <Link
                    to="#/products"
                    className="mt-8 block w-full bg-blue-500 text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600 transition-all"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccessPage;
