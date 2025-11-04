import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Product } from '../types';
import { useNotification } from './NotificationContext';

const MAX_COMPARE_ITEMS = 4;

interface CompareContextType {
  compareItems: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  compareCount: number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [compareItems, setCompareItems] = useLocalStorage<Product[]>('compare', []);
  const { addNotification } = useNotification();

  const compareCount = compareItems.length;

  const addToCompare = (product: Product) => {
    setCompareItems(prevItems => {
      if (prevItems.find(item => item.id === product.id)) {
        addNotification(`${product.name} is already in the compare list.`, 'info');
        return prevItems;
      }
      if (prevItems.length >= MAX_COMPARE_ITEMS) {
        addNotification(`You can only compare up to ${MAX_COMPARE_ITEMS} items.`, 'error');
        return prevItems;
      }
      addNotification(`${product.name} added to compare list.`, 'success');
      return [...prevItems, product];
    });
  };

  const removeFromCompare = (productId: string) => {
    setCompareItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  return (
    <CompareContext.Provider value={{ compareItems, addToCompare, removeFromCompare, clearCompare, compareCount }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = (): CompareContextType => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
