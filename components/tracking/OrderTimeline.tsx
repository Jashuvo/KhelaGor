import React from 'react';
import { OrderStatus } from '../../types';

interface OrderTimelineProps {
    currentStatus: OrderStatus;
}

const TimelineEvent: React.FC<{ title: string, date: string, isCompleted: boolean, isLast: boolean }> = ({ title, date, isCompleted, isLast }) => {
    return (
        <div className="relative pl-8">
            {!isLast && <div className={`absolute top-5 left-[10px] h-full w-0.5 ${isCompleted ? 'bg-blue-500' : 'bg-gray-300'}`}></div>}
            <div className="absolute top-2 left-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCompleted ? 'bg-blue-500' : 'bg-gray-300 border-4 border-white'}`}>
                    {isCompleted && <span className="text-white text-sm font-bold">&#10003;</span>}
                </div>
            </div>
            <h4 className={`font-bold ${isCompleted ? 'text-black' : 'text-gray-500'}`}>{title}</h4>
            {isCompleted && <p className="text-sm text-gray-500">{date}</p>}
        </div>
    );
}

const OrderTimeline: React.FC<OrderTimelineProps> = ({ currentStatus }) => {
    const statuses: OrderStatus[] = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    const currentIndex = statuses.indexOf(currentStatus);
    const mockDate = "Oct 24, 2023, 10:30 AM";

    return (
        <div className="bg-white p-6 border-2 border-black rounded-xl space-y-8">
            {statuses.map((status, index) => (
                <TimelineEvent
                    key={status}
                    title={`Order ${status}`}
                    date={mockDate}
                    isCompleted={index <= currentIndex}
                    isLast={index === statuses.length - 1}
                />
            ))}
        </div>
    );
};

export default OrderTimeline;
