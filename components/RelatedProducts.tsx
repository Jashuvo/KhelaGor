
import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
    currentProduct: Product;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProduct }) => {
    const related = PRODUCTS.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 8);

    if (related.length === 0) {
        return null;
    }

    return (
        <section className="overflow-hidden">
            <h2 className="text-3xl font-extrabold text-black mb-8">You Might Also Like</h2>
            {/* Mobile & Tablet Carousel */}
            <div className="lg:hidden">
                <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
                    {related.map(product => (
                        <div key={product.id} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {related.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default RelatedProducts;