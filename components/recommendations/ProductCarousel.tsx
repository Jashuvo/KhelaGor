
import React from 'react';
import { Product } from '../../types';
import ProductCard from '../ProductCard';

interface ProductCarouselProps {
    title: string;
    products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
    if (products.length === 0) {
        return null;
    }

    return (
        <section className="py-16 sm:py-24 overflow-hidden bg-[#FAF4E5]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-12">
                    {title}
                </h2>
                <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
                    {products.map(product => (
                        <div key={product.id} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;