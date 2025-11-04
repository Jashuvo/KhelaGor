
import React, { useEffect, useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductDetailSkeleton from '../components/skeletons/ProductDetailSkeleton';
import NotFoundPage from './NotFoundPage';
import RelatedProducts from '../components/RelatedProducts';
import FrequentlyBoughtTogether from '../components/recommendations/FrequentlyBoughtTogether';
import useSEO from '../hooks/useSEO';
import { useTracking } from '../contexts/TrackingContext';
import ProductMedia from '../components/interactive/ProductMedia';
import ProductInfo from '../components/ProductInfo';
import ProductTabs from '../components/ProductTabs';

interface ProductDetailPageProps {
    productId: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
    const [product, setProduct] = useState<Product | null | undefined>(undefined);
    const { addRecentlyViewed } = useTracking();

    useEffect(() => {
        const foundProduct = PRODUCTS.find(p => p.id === productId);
        setProduct(foundProduct || null);
        if (foundProduct) {
            addRecentlyViewed(foundProduct);
        }
    }, [productId, addRecentlyViewed]);

    useSEO({
        title: product ? `${product.name} | KhelaGhor` : 'KhelaGhor',
        description: product ? product.description.substring(0, 160) : 'Find the best toys for kids at KhelaGhor.',
        ogImage: product?.imageUrl
    });

    if (product === undefined) {
        return <ProductDetailSkeleton />;
    }

    if (product === null) {
        return <NotFoundPage />;
    }

    const breadcrumbItems = [
        { name: 'Home', path: '#/' },
        { name: 'All Toys', path: '#/products' },
        { name: product.category, path: `#/products?category=${product.category}` },
        { name: product.name, path: `#/product/${product.id}` },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ProductMedia product={product} />
                <ProductInfo product={product} />
            </div>
            <div className="mt-16">
                <ProductTabs product={product} />
            </div>
             <div className="mt-16">
                <FrequentlyBoughtTogether currentProduct={product} />
            </div>
            <div className="mt-16">
                <RelatedProducts currentProduct={product} />
            </div>
        </div>
    );
};

export default ProductDetailPage;