import React, { useState } from 'react';
import { OrderStatus } from '../../types';

interface UpdateStatusModalProps {
    currentStatus: OrderStatus;
    onClose: () => void;
    onUpdate: (newStatus: OrderStatus) => void;
}

const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({ currentStatus, onClose, onUpdate }) => {
    const [selectedStatus, setSelectedStatus] = useState<OrderStatus>(currentStatus);
    const statuses: OrderStatus[] = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

    const handleUpdate = () => {
        onUpdate(selectedStatus);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md text-gray-800" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-xl font-semibold">Update Order Status</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="mt-4">
                    <label htmlFor="status-select" className="block text-sm font-medium text-gray-700">Select new status:</label>
                    <select
                        id="status-select"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value as OrderStatus)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        {statuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                        Cancel
                    </button>
                    <button onClick={handleUpdate} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateStatusModal;