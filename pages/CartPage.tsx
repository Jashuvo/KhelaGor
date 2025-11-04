import React from 'react';
import { useCart } from '../contexts/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';
import CartItemRow from '../components/CartItemRow';
import CartSummary from '../components/CartSummary';
import YouMayAlsoLike from '../components/recommendations/YouMayAlsoLike';
import { getTrendingProducts } from '../utils/recommendations';
import Link from '../components/Link';

const EmptyCartIcon = () => (
     <svg className="w-24 h-24 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.093-.828l2.956-9.854A.562.562 0 0021 3h-19.5" />
    </svg>
);


const CartPage: React.FC = () => {
    const { cartItems, cartCount, clearCart } = useCart();

    const breadcrumbItems = [
        { name: 'Home', path: '#/' },
        { name: 'Shopping Cart', path: '#/cart' },
    ];

    if (cartCount === 0) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
                 <div className="max-w-md mx-auto bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
                    <EmptyCartIcon />
                    <h1 className="text-3xl font-extrabold text-black mt-4">Your Cart is Empty</h1>
                    <p className="text-gray-600 mt-2">Looks like you haven't added anything to your cart yet. Start shopping to find the perfect toys!</p>
                     <Link
                        to="#/products"
                        className="mt-6 block w-full bg-blue-500 text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600 transition-all duration-200"
                    >
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-4xl font-extrabold text-black mb-8">Shopping Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                     <div className="space-y-4">
                        {cartItems.map(item => <CartItemRow key={item.id} item={item} />)}
                     </div>
                     <button onClick={clearCart} className="mt-6 font-semibold text-red-600 hover:underline">
                        Clear Cart
                     </button>
                </div>
                <div className="lg:col-span-1">
                    <CartSummary />
                </div>
            </div>
            <div className="mt-16">
                 <YouMayAlsoLike title="Check Out These Trending Toys" products={getTrendingProducts().slice(0,3)} />
            </div>
        </div>
    );
};

export default CartPage;
