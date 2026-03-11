import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Assume useCart hook is available globally or imported from a library
// import { useCart } from '@/lib/hooks/useCart'; // Example import path

// Mock useCart hook for demonstration
const useCart = () => {
  const [cartItems, setCartItems] = React.useState([
    { id: '1', name: 'Classic Roll', price: 3.99, quantity: 2 },
    { id: '2', name: 'Lemon Zest Roll', price: 4.29, quantity: 1 },
  ]);

  const addToCart = (item: any) => { console.log('Add to cart:', item); };
  const removeFromCart = (itemId: string) => { console.log('Remove from cart:', itemId); };
  const updateQuantity = (itemId: string, quantity: number) => { console.log('Update quantity:', itemId, quantity); };
  const clearCart = () => { setCartItems([]); console.log('Cart cleared'); };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, subtotal };
};

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    const sidebarElement = sidebarRef.current;
    if (!sidebarElement) return;

    gsap.to(sidebarElement, {
      duration: 0.5,
      x: isOpen ? -350 : 0, // Adjust '-350' based on desired width
      ease: 'power2.inOut',
      paused: true, // Control animation manually
      onComplete: () => {
        if (!isOpen) {
          // When closing animation completes, potentially reset transform (though not strictly needed if opacity/display is handled)
        }
      }
    });

    if (isOpen) {
      gsap.to(sidebarElement, { x: -350 }); // Slide in
      sidebarElement.style.display = 'block'; // Ensure it's visible
    } else {
      gsap.to(sidebarElement, { x: 0, onComplete: () => { sidebarElement.style.display = 'none'; } }); // Slide out and hide
    }

  }, [isOpen]);

  React.useEffect(() => {
      // Need to ensure GSAP is registered if not done globally
      gsap.registerPlugin(); // Placeholder, actual plugins like CSSPlugin are usually automatically included with gsap.to/from

      // If sidebar is initially closed and hidden
      if (sidebarRef.current) {
        sidebarRef.current.style.display = isOpen ? 'block' : 'none';
      }
  }, [isOpen]);


  const handleCheckout = () => {
    // POST to /api/checkout
    console.log('Proceeding to checkout...');
    // In a real app, you would send cartItems to the backend
    // Example: fetch('/api/checkout', { method: 'POST', body: JSON.stringify({ items: cartItems }) })

    // For now, just close the sidebar
    onClose();
  };

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 right-0 h-screen w-96 bg-white shadow-lg z-50 p-6 transform translate-x-full" // Initially hidden off-screen
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col flex-grow justify-between h-full">
          <div className="overflow-y-auto mb-6 flex-grow">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center">
                  {/* Product Image Placeholder */}
                  <div className="w-16 h-16 bg-gray-200 rounded mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-500 hover:text-gray-700">-</button>
                  <span className="mx-2 text-gray-700">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-500 hover:text-gray-700">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-gray-300">
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition-colors duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
