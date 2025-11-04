
import React from 'react';
import { Product } from '../../types';
import { getSimilarProducts } from '../../utils/recommendations';
import ProductCard from '../ProductCard';

interface SimilarProductsProps {
    currentProduct: Product;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ currentProduct }) => {
    const similar = getSimilarProducts(currentProduct);

    if (similar.length === 0) {
        return null;
    }

    return (
        <section className="overflow-hidden">
            <h2 className="text-3xl font-extrabold text-black mb-8">Similar Products</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
                {similar.map(product => (
                    <div key={product.id} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SimilarProducts;