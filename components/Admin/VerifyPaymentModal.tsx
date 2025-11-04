import React from 'react';
import { Order } from '../../types';

interface VerifyPaymentModalProps {
    order: Order;
    onClose: () => void;
    onConfirm: () => void;
}

const VerifyPaymentModal: React.FC<VerifyPaymentModalProps> = ({ order, onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md text-gray-800" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-xl font-semibold">Verify Payment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="mt-4 space-y-2">
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Customer:</strong> {order.customer.name}</p>
                    <p><strong>Amount:</strong> ৳{order.total.toLocaleString()}</p>
                    <p><strong>Method:</strong> {order.paymentMethod}</p>
                    <p className="mt-4">Please confirm that you have received the payment for this order.</p>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Confirm Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyPaymentModal;