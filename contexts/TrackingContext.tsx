
import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface TrackingContextType {
    recentlyViewed: Product[];
    addRecentlyViewed: (product: Product) => void;
}

const TrackingContext = createContext<TrackingContextType | undefined>(undefined);

export const TrackingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [viewedIds, setViewedIds] = useLocalStorage<string[]>('recentlyViewedIds', []);

    const addRecentlyViewed = (product: Product) => {
        setViewedIds(prevIds => {
            const newIds = [product.id, ...prevIds.filter(id => id !== product.id)];
            return newIds.slice(0, 10); // Keep last 10 viewed products
        });
    };

    const recentlyViewed = viewedIds
        .map(id => PRODUCTS.find(p => p.id === id))
        .filter((p): p is Product => p !== undefined);

    return (
        <TrackingContext.Provider value={{ recentlyViewed, addRecentlyViewed }}>
            {children}
        </TrackingContext.Provider>
    );
};

export const useTracking = (): TrackingContextType => {
    const context = useContext(TrackingContext);
    if (context === undefined) {
        throw new Error('useTracking must be used within a TrackingProvider');
    }
    return context;
};