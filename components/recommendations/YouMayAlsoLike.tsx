
import React from 'react';
import { Product } from '../../types';
import ProductCard from '../ProductCard';

interface YouMayAlsoLikeProps {
    products: Product[];
    title: string;
}

const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({ products, title }) => {
    if (products.length === 0) {
        return null;
    }

    return (
        <section>
            <h2 className="text-3xl font-extrabold text-black mb-8 text-center">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default YouMayAlsoLike;