import React from 'react';
import { CartItem } from '../types';
import { useCart } from '../contexts/CartContext';
import Link from './Link';
import QuantitySelector from './QuantitySelector';

interface CartItemRowProps {
    item: CartItem;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    const hasSale = item.salePrice && item.salePrice < item.price;
    const price = item.salePrice ?? item.price;

    return (
        <div className="flex flex-col sm:flex-row gap-4 bg-white border-2 border-black rounded-xl p-4">
            <div className="flex-shrink-0">
                <Link to={`#/product/${item.id}`}>
                    <img src={item.imageUrl} alt={item.name} className="w-full sm:w-28 h-28 object-cover rounded-lg border-2 border-black" />
                </Link>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-extrabold text-black text-lg">
                            <Link to={`#/product/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p className="text-sm text-gray-500">
                           Unit Price: ৳{price.toLocaleString()}
                        </p>
                    </div>
                     <button onClick={() => removeFromCart(item.id)} className="font-bold text-red-500 text-2xl self-start">&times;</button>
                </div>
                
                <div className="mt-2 sm:mt-auto flex items-end justify-between">
                    <QuantitySelector 
                        initialQuantity={item.quantity} 
                        onQuantityChange={(q) => updateQuantity(item.id, q)}
                        maxQuantity={item.stock}
                    />
                    <p className="font-bold text-lg text-black">
                        ৳{(price * item.quantity).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartItemRow;
