
import React, { useState } from 'react';
import { Product } from '../types';
import Reviews from './Reviews';

interface ProductTabsProps {
    product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
    const [activeTab, setActiveTab] = useState('description');

    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return <p className="leading-relaxed">{product.description}</p>;
            case 'specifications':
                return (
                    <ul className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <li key={key} className="grid grid-cols-2">
                                <span className="font-semibold">{key}:</span>
                                <span>{value}</span>
                            </li>
                        ))}
                    </ul>
                );
            case 'reviews':
                return <Reviews productId={product.id} />;
            default:
                return null;
        }
    };
    
    const getTabClasses = (tabName: string) => {
        const baseClasses = "font-bold text-lg py-3 px-6 border-2 border-black rounded-t-lg transition-all duration-200 -mb-0.5";
        if (activeTab === tabName) {
            return `${baseClasses} bg-white border-b-white text-black`;
        }
        return `${baseClasses} bg-gray-200 border-b-black text-gray-600 hover:bg-gray-300 hover:text-black`;
    };

    return (
        <div>
            <div className="flex border-b-2 border-black">
                <button onClick={() => setActiveTab('description')} className={getTabClasses('description')}>
                    Description
                </button>
                <button onClick={() => setActiveTab('specifications')} className={getTabClasses('specifications')}>
                    Specifications
                </button>
                <button onClick={() => setActiveTab('reviews')} className={getTabClasses('reviews')}>
                    Reviews ({product.reviewCount})
                </button>
            </div>
            <div className="bg-white border-2 border-black border-t-0 rounded-b-xl p-6 shadow-[8px_8px_0px_#000] text-gray-800">
                {renderContent()}
            </div>
        </div>
    );
};

export default ProductTabs;