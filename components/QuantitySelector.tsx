import React, { useState, useEffect } from 'react';

interface QuantitySelectorProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
  maxQuantity: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ initialQuantity, onQuantityChange, maxQuantity }) => {
  const [count, setCount] = useState(initialQuantity);

  useEffect(() => {
    onQuantityChange(count);
  }, [count, onQuantityChange]);
  
  const increment = () => setCount(prev => Math.min(prev + 1, maxQuantity));
  const decrement = () => setCount(prev => Math.max(1, prev - 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      if (isNaN(value)) {
          setCount(1);
      } else {
          setCount(Math.max(1, Math.min(value, maxQuantity)));
      }
  }

  const buttonClasses = "w-12 h-12 flex items-center justify-center text-2xl font-bold bg-white border-2 border-black rounded-lg transition-colors hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed";

  return (
    <div className="flex items-center">
      <button onClick={decrement} disabled={count <= 1} className={buttonClasses}>-</button>
      <input
        type="number"
        value={count}
        onChange={handleChange}
        min="1"
        max={maxQuantity}
        className="w-16 h-12 text-center text-xl font-bold border-y-2 border-black bg-transparent focus:outline-none"
      />
      <button onClick={increment} disabled={count >= maxQuantity} className={buttonClasses}>+</button>
    </div>
  );
};

export default QuantitySelector;
