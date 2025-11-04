
import React, { useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface ImageGalleryProps {
    images: string[];
    productName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
    const [mainImage, setMainImage] = useState(images[0] || '');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!images || images.length === 0) {
        return <div className="aspect-square w-full bg-gray-200 rounded-xl flex items-center justify-center">No Image</div>;
    }

    return (
        <div>
            <div className="aspect-square w-full border-2 border-black rounded-xl overflow-hidden cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                <img src={mainImage} alt={productName} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`aspect-square w-full border-2 rounded-lg overflow-hidden cursor-pointer ${mainImage === img ? 'border-blue-500' : 'border-black'}`}
                        onClick={() => setMainImage(img)}
                    >
                        <img src={img} alt={`${productName} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            {isLightboxOpen && <ImageLightbox src={mainImage} alt={productName} onClose={() => setIsLightboxOpen(false)} />}
        </div>
    );
};

export default ImageGallery;
