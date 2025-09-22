// src/components/BestSellers.jsx or .tsx
import React from 'react';
import BestSellerProduct from '../../components/BestSellerProduct'; // Adjust path if needed
// import product1 from "../../assets/imgs/product1.jpg";
// import product2 from "../../assets/imgs/product2.jpg";
import product3 from "../../assets/imgs/product3.jpg";


// Dummy product data for demonstration
const products = [
  {
    id: 1,
    image: product3, 
    name: 'The shampoo',
    price: '32.99',
  },
  {
    id: 2,
    image: product3,
    name: 'The moisturiser',
    price: '32.99',
  },
  {
    id: 3,
    image: product3,
    name: 'The shampoo',
    price: '32.99',
  },
];

const BestSellers = () => {
  const handleViewProduct = (productId: number, productName: string) => {
    console.log(`Viewing product: ${productName} (ID: ${productId})`);
    // Here you would typically navigate to a product detail page
  };

  return (
    <div className="bg-color-secondary py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Top Line */}
      <div className="w-3/4 max-w-5xl border-t border-color-primary"></div>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-thin font-primary text-primary">
        Meet our best-sellers
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {products.map((product) => (
          <BestSellerProduct
            key={product.id}
            imageSrc={product.image}
            name={product.name}
            price={product.price}
            onViewProduct={() => handleViewProduct(product.id, product.name)}
          />
        ))}
      </div>

      {/* "Shop all products" link */}
      <a
        href="#" // Replace with your actual shop link
        className="mt-16 text-primary font-thin hover:text-gray-600 transition-colors text-lg"
      >
        Shop all products
      </a>

      {/* Bottom Line */}
      <div className="w-3/4 max-w-5xl border-t border-color-primary mt-8"></div>
    </div>
  );
};

export default BestSellers;