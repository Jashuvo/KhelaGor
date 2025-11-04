import React from 'react';

const ProductCardSkeleton: React.FC = () => {
    return (
        <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] overflow-hidden">
            <div className="animate-pulse">
                <div className="aspect-square w-full bg-gray-200"></div>
                <div className="p-4 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-300 rounded w-full"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-11 bg-gray-300 rounded-lg w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
