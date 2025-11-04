
import React from 'react';
import { Product } from '../../types';
import ImageGallery from '../ImageGallery';

interface ProductMediaProps {
    product: Product;
}

const ProductMedia: React.FC<ProductMediaProps> = ({ product }) => {
    // This component can be expanded to include video, 360 views, etc.
    return (
        <div>
            <ImageGallery images={product.images || [product.imageUrl]} productName={product.name} />
        </div>
    );
};

export default ProductMedia;
