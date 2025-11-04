import React, { useState } from 'react';

const ReturnRequestForm: React.FC = () => {
    const [orderId, setOrderId] = useState('');
    const [reason, setReason] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        alert('Return request submitted!');
    };

    return (
        <div className="bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
            <h2 className="text-2xl font-extrabold text-black mb-6">Submit a Return Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700">Order ID</label>
                    <input type="text" value={orderId} onChange={e => setOrderId(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700">Reason for Return</label>
                    <select value={reason} onChange={e => setReason(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black bg-white" required>
                        <option value="">Select a reason</option>
                        <option value="wrong_item">Received wrong item</option>
                        <option value="damaged">Item was damaged</option>
                        <option value="changed_mind">Changed my mind</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Additional Details</label>
                    <textarea value={details} onChange={e => setDetails(e.target.value)} rows={4} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" />
                </div>
                <div className="pt-4">
                     <button type="submit" className="w-full bg-blue-500 text-white font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600">
                        Submit Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReturnRequestForm;
