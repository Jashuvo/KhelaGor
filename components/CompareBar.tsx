
import React from 'react';
import { useCompare } from '../contexts/CompareContext';
import Link from './Link';

const CompareBar: React.FC = () => {
  const { compareItems, compareCount, removeFromCompare, clearCompare } = useCompare();

  if (compareCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black shadow-lg z-20 animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <h3 className="font-bold text-lg hidden sm:block">Compare Products ({compareCount}/4)</h3>
            <div className="flex -space-x-4">
              {compareItems.map(item => (
                <div key={item.id} className="relative group">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                     <button onClick={() => removeFromCompare(item.id)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">&times;</button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={clearCompare} className="font-semibold text-gray-600 hover:text-red-500 text-sm">Clear All</button>
            <Link
              to="#/compare"
              className="bg-blue-500 text-white font-bold py-2.5 px-6 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-blue-600 transition-colors"
            >
              Compare
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;