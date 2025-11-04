
import React, { useEffect } from 'react';

interface ImageLightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, alt, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center" onClick={onClose}>
            <div className="relative p-4">
                <button onClick={onClose} className="absolute -top-4 -right-4 text-white text-4xl font-bold">&times;</button>
                <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw]" onClick={e => e.stopPropagation()} />
            </div>
        </div>
    );
};

export default ImageLightbox;
