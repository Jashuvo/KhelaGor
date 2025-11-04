import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Product } from '../types';
import { useNotification } from './NotificationContext';

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useLocalStorage<Product[]>('wishlist', []);
  const { addNotification } = useNotification();

  const wishlistCount = wishlistItems.length;

  const addToWishlist = (product: Product) => {
    setWishlistItems(prevItems => {
      if (prevItems.find(item => item.id === product.id)) {
        addNotification(`${product.name} is already in your wishlist.`, 'info');
        return prevItems;
      }
      addNotification(`${product.name} added to wishlist!`, 'success');
      return [...prevItems, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
    addNotification(`Item removed from wishlist.`, 'info');
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
