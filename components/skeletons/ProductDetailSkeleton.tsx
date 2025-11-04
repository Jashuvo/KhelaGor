import React from 'react';

const ProductDetailSkeleton: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <div className="aspect-square w-full bg-gray-200 rounded-xl"></div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-16 bg-gray-200 rounded-lg w-1/2"></div>
                        <div className="h-16 bg-gray-300 rounded-lg w-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;
