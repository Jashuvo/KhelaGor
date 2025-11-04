
import React, { useState, useMemo, useEffect } from 'react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { getFrequentlyBoughtTogether } from '../../utils/recommendations';
import Link from '../Link';

interface FrequentlyBoughtTogetherProps {
    currentProduct: Product;
}

const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>;

const PlusIcon = () => <span className="text-4xl font-light text-gray-400 mx-4">+</span>;
const EqualsIcon = () => <span className="text-4xl font-light text-gray-400 mx-4">=</span>;

const FrequentlyBoughtTogether: React.FC<FrequentlyBoughtTogetherProps> = ({ currentProduct }) => {
    const { addToCart } = useCart();
    const { products: recommendedProducts, discount } = useMemo(() => getFrequentlyBoughtTogether(currentProduct), [currentProduct]);
    
    const allProducts = [currentProduct, ...recommendedProducts];
    const [selectedIds, setSelectedIds] = useState<string[]>(allProducts.map(p => p.id));

    // Reset when current product changes
    useEffect(() => {
        setSelectedIds([currentProduct, ...recommendedProducts].map(p => p.id));
    }, [currentProduct, recommendedProducts]);

    if (recommendedProducts.length === 0) {
        return null;
    }

    const handleCheckboxChange = (productId: string) => {
        setSelectedIds(prev =>
            prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
        );
    };

    const selectedProducts = allProducts.filter(p => selectedIds.includes(p.id));
    const totalPrice = selectedProducts.reduce((acc, p) => acc + (p.salePrice ?? p.price), 0);
    const totalSavings = selectedProducts.length > 1 ? discount : 0;
    const finalPrice = totalPrice - totalSavings;

    const handleAddAllToCart = () => {
        selectedProducts.forEach(p => addToCart(p, 1));
    };

    return (
        <section>
            <h2 className="text-3xl font-extrabold text-black mb-8">Frequently Bought Together</h2>
            <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] p-6">
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
                    {/* Products Display */}
                    <div className="flex items-center flex-wrap justify-center">
                        {allProducts.map((product, index) => (
                            <React.Fragment key={product.id}>
                                {index > 0 && <PlusIcon />}
                                <div className="text-center p-2">
                                     <label className="cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(product.id)}
                                            onChange={() => handleCheckboxChange(product.id)}
                                            className="mb-2 h-5 w-5 rounded border-2 border-black text-blue-600 focus:ring-blue-500"
                                        />
                                        <Link to={`#/product/${product.id}`}>
                                            <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-contain mx-auto" />
                                            <p className="font-semibold text-sm mt-2 max-w-[100px] truncate">{product.name}</p>
                                            <p className="text-sm font-bold text-blue-600">৳{(product.salePrice ?? product.price).toLocaleString()}</p>
                                        </Link>
                                    </label>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Purchase Box */}
                    <div className="mt-6 md:mt-0 md:ml-8 md:border-l-2 md:pl-8 border-dashed border-black flex-shrink-0">
                        <div className="bg-yellow-100 border-2 border-dashed border-black rounded-lg p-4 text-center">
                            <p className="font-bold">Price for {selectedProducts.length} items:</p>
                            <p className="text-3xl font-extrabold text-blue-600 my-2">৳{finalPrice.toLocaleString()}</p>
                            {totalSavings > 0 && (
                                <p className="text-green-600 font-bold">You save ৳{totalSavings.toLocaleString()}!</p>
                            )}
                             <button
                                onClick={handleAddAllToCart}
                                disabled={selectedProducts.length === 0}
                                className="mt-4 w-full flex items-center justify-center gap-2 bg-yellow-300 text-black font-bold py-2.5 px-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-yellow-400"
                            >
                                <CartIcon />
                                Add {selectedProducts.length} items to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrequentlyBoughtTogether;