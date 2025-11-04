
import React from 'react';
import { OrderStatus } from '../../types';
import AdminCard from './AdminCard';

interface OrderTimelineProps {
    currentStatus: OrderStatus;
}

const TimelineEvent: React.FC<{ status: string, isCompleted: boolean, isCurrent: boolean, isFirst?: boolean }> = ({ status, isCompleted, isCurrent, isFirst = false }) => {
    const dotClasses = isCompleted || isCurrent ? 'bg-blue-600' : 'bg-gray-300';
    const textClasses = isCompleted || isCurrent ? 'text-black' : 'text-gray-500';

    return (
        <div className="relative">
            {!isFirst && <div className={`absolute top-2 left-2 -ml-px h-full w-0.5 ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'}`}></div>}
            <div className="relative flex items-start">
                <div className={`h-4 w-4 rounded-full ${dotClasses} flex-shrink-0`}></div>
                <div className="ml-4">
                    <h4 className={`font-semibold ${textClasses}`}>{status}</h4>
                    {(isCompleted || isCurrent) && <p className="text-sm text-gray-500">Oct 24, 2023, 10:30 AM</p>}
                </div>
            </div>
        </div>
    );
};


const OrderTimeline: React.FC<OrderTimelineProps> = ({ currentStatus }) => {
    const statuses: OrderStatus[] = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    const currentIndex = statuses.indexOf(currentStatus);

    return (
        <AdminCard title="Order History">
            <div className="space-y-6">
                {statuses.map((status, index) => (
                    <TimelineEvent
                        key={status}
                        status={status}
                        isCompleted={index < currentIndex}
                        isCurrent={index === currentIndex}
                        isFirst={index === 0}
                    />
                ))}
            </div>
        </AdminCard>
    );
};

export default OrderTimeline;