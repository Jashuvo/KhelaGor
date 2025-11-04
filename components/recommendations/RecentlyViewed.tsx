import React, { useState } from 'react';
import { useTracking } from '../../contexts/TrackingContext';
import { useCart } from '../../contexts/CartContext';
import Link from '../Link';

const RecentlyViewed: React.FC = () => {
    const { recentlyViewed } = useTracking();
    const { addToCart } = useCart();
    const [isCollapsed, setIsCollapsed] = useState(true);

    if (recentlyViewed.length === 0) {
        return null;
    }

    const toggleCollapse = () => setIsCollapsed(prev => !prev);

    return (
        <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-30 transition-transform duration-300 ease-in-out" style={{ transform: `translateY(-50%) translateX(${isCollapsed ? 'calc(100% - 48px)' : '0'})` }}>
            <div className="relative bg-white border-2 border-r-0 border-black rounded-l-xl shadow-lg">
                <button
                    onClick={toggleCollapse}
                    className="absolute -left-12 top-0 bg-white border-2 border-r-0 border-black rounded-l-lg p-2 h-24 flex items-center"
                    aria-label={isCollapsed ? "Show recently viewed" : "Hide recently viewed"}
                >
                    <span className="font-bold vertical-text text-black">Recently Viewed</span>
                </button>
                <div className="p-4 w-64">
                    <h4 className="font-bold text-black border-b-2 border-black pb-2 mb-2">Your History</h4>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                        {recentlyViewed.slice(0, 5).map(product => (
                            <div key={product.id} className="flex items-center gap-3">
                                <Link to={`#/product/${product.id}`}>
                                    <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded border-2 border-black" />
                                </Link>
                                <div className="flex-1">
                                    <Link to={`#/product/${product.id}`} className="text-sm font-semibold hover:text-blue-600 leading-tight">
                                        {product.name}
                                    </Link>
                                    <div className="flex justify-between items-center">
                                       <p className="text-xs font-bold text-blue-600">৳{(product.salePrice ?? product.price).toLocaleString()}</p>
                                        <button onClick={() => addToCart(product, 1)} className="text-xs bg-yellow-300 border border-black rounded px-1.5 py-0.5 font-semibold">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentlyViewed;
