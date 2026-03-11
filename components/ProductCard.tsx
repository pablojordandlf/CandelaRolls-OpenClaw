import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface ProductCardProps {
  imageSrc: string;
  name: string;
  description: string;
  price: string;
  // Add any other relevant props like 'id' or 'addToCartHandler'
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, description, price }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    // GSAP hover animation
    const hoverIn = () => {
      gsap.to(cardElement, {
        scale: 1.05,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    const hoverOut = () => {
      gsap.to(cardElement, {
        scale: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    cardElement.addEventListener('mouseenter', hoverIn);
    cardElement.addEventListener('mouseleave', hoverOut);

    // Clean up event listeners on component unmount
    return () => {
      cardElement.removeEventListener('mouseenter', hoverIn);
      cardElement.removeEventListener('mouseleave', hoverOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-md p-6 mb-8 transform transition-transform duration-300 ease-in-out cursor-pointer flex flex-col items-center text-center w-full"
      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <p className="text-lg font-semibold text-orange-600 mb-4">{price}</p>
      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
