import React from 'react';

const ChartSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse" style={{ width: '100%', height: 300 }}>
            <div className="h-full bg-gray-200 rounded-lg"></div>
        </div>
    );
};

export default ChartSkeleton;
