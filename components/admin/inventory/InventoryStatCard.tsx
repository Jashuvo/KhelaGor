
import React from 'react';

interface InventoryStatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}

const InventoryStatCard: React.FC<InventoryStatCardProps> = ({ title, value, icon }) => {
    return (
        <div className="bg-white p-4 rounded-lg border-2">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-semibold">{value}</p>
        </div>
    );
};

export default InventoryStatCard;
