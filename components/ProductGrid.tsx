
import React, { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './skeletons/ProductCardSkeleton';
import Pagination from './Pagination';

interface ProductGridProps {
    products: Product[];
    loading?: boolean;
}

const ITEMS_PER_PAGE = 12;

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading = false }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const currentProducts = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 9 }).map((_, index) => <ProductCardSkeleton key={index} />)}
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-16 bg-white border-2 border-black rounded-xl">
                 <h2 className="text-2xl font-bold text-black">No Toys Found</h2>
                <p className="text-gray-600 mt-2">Try adjusting your filters to find what you're looking for!</p>
            </div>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="mt-12">
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
