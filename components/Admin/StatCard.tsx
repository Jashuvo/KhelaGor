import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from './AdminIcons';

interface StatCardProps {
    title: string;
    value: string;
    change?: number;
    icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
    const isPositive = change !== undefined && change >= 0;
    return (
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[6px_6px_0_black]">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-extrabold text-black">{value}</p>
                </div>
                <div className="bg-yellow-200 text-black p-3 rounded-full border-2 border-black">
                    {icon}
                </div>
            </div>
            {change !== undefined && (
                <div className={`mt-2 flex items-center text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    <span className="font-semibold">{Math.abs(change)}%</span>
                    <span className="ml-1 text-gray-500">from last month</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;