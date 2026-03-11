'use client';

import { useCart } from '@/lib/hooks/useCart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeItemFromCart, updateItemQuantity, getCartTotal, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-[#8B4513]">Carrito</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Tu carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 pb-4 border-b last:border-b-0"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#8B4513]">{item.name}</h3>
                    <p className="text-sm text-gray-600">€{item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between text-lg font-bold text-[#8B4513]">
              <span>Total:</span>
              <span>€{(getCartTotal() / 100).toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#8B4513] text-white py-3 rounded-lg hover:bg-opacity-90 font-semibold transition"
            >
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
