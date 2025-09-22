// src/components/Product.jsx or .tsx
import React from 'react';

interface BestSellerProductProps {
  imageSrc: string;
  name: string;
  price: string; 
  onViewProduct: () => void;
}

const BestSellerProduct: React.FC<BestSellerProductProps> = ({ imageSrc, name, price, onViewProduct }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Product Image */}
      <div className="w-60 h-64 bg-color-secondary flex items-center justify-center mb-4">
        <img src={imageSrc} alt={name} className="max-w-full max-h-full object-contain" />
      </div>

      <div className="w-full border-t border-b border-color-primary py-3 mb-4 flex justify-between items-center text-primary ">
        <span className="text-lg font-light">{name}</span>
        <span className="text-lg font-thin">$ {price}</span> 
      </div>

      <button
        onClick={onViewProduct}
        className="px-28 py-2 text-secondary bg-color-primary border border-color-primary hover:cursor-pointer hover:bg-stone-400 transition-colors font-thin"
      >
        Learn more
      </button>
      </div>
  );
};

export default BestSellerProduct;