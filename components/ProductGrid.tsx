import React from 'react';
import ProductCard from './ProductCard'; // Assuming ProductCard is in the same directory

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

// Sample product data
const products: Product[] = [
  {
    id: '1',
    name: 'Classic Roll',
    description: 'Our signature cinnamon roll, perfectly spiced and glazed.',
    price: '$3.99',
    imageSrc: 'https://images.unsplash.com/photo-1572161320297-89487017a33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '2',
    name: 'Lemon Zest Roll',
    description: 'A bright and tangy roll with a refreshing lemon glaze.',
    price: '$4.29',
    imageSrc: 'https://images.unsplash.com/photo-1597202399743-899638206570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '3',
    name: 'Cream Cheese Delight',
    description: 'Rich and creamy, topped with a decadent cream cheese frosting.',
    price: '$4.49',
    imageSrc: 'https://images.unsplash.com/photo-1554658999-67394565561f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: '4',
    name: 'Garlic Cheese Swirl',
    description: 'A savory twist with gooey cheese and a hint of garlic.',
    price: '$4.79',
    imageSrc: 'https://images.unsplash.com/photo-1639998841726-7b98e8089080?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

const ProductGrid: React.FC = () => {
  // No specific GSAP animations are planned for the grid container itself,
  // but ProductCard has its own hover animations.
  // Future: GSAP for staggered entry animation of cards if needed.

  return (
    <section id="products" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Delicious Rolls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCard
                key={product.id}
                imageSrc={product.imageSrc}
                name={product.name}
                description={product.description}
                price={product.price}
                />
            ))}
            </div>
        </div>
    </section>
  );
};

export default ProductGrid;
