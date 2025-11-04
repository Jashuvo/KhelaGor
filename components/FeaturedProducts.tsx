
import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './skeletons/ProductCardSkeleton';

const FeaturedProducts: React.FC = () => {
    // Select a few products to feature
    const featured = PRODUCTS.slice(0, 8);
    const loading = false; // Placeholder for loading state

    return (
        <section className="bg-[#FAF4E5] py-16 sm:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-12">
                    Featured Toys
                </h2>
                {/* Mobile & Tablet Carousel */}
                <div className="lg:hidden">
                    <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
                        {loading ? (
                             Array.from({ length: 4 }).map((_, index) => <div key={index} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3"><ProductCardSkeleton key={index} /></div>)
                        ) : (
                            featured.map(product => (
                                <div key={product.id} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3">
                                    <ProductCard product={product} />
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {loading ? (
                        Array.from({ length: 8 }).map((_, index) => <ProductCardSkeleton key={index} />)
                    ) : (
                        featured.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;