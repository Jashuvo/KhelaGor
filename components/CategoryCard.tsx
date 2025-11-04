
import React from 'react';
import { Category } from '../types';
import Link from './Link';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`#/products?category=${encodeURIComponent(category.name)}`} className="group text-center">
      <div className="aspect-square w-full bg-white border-2 border-black rounded-full flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-[8px_8px_0px_#000] group-hover:-translate-y-1 group-hover:-translate-x-1">
        <img src={category.imageUrl} alt={category.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="mt-4 font-bold text-black text-sm sm:text-base">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;