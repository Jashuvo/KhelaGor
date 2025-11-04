import React from 'react';

interface BKashPaymentModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

const BKashPaymentModal: React.FC<BKashPaymentModalProps> = ({ onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white rounded-lg p-6" onClick={e => e.stopPropagation()}>
                <h2 className="text-lg font-bold text-black">bKash Payment</h2>
                <p>bKash payment modal placeholder.</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-pink-500 text-white rounded">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default BKashPaymentModal;