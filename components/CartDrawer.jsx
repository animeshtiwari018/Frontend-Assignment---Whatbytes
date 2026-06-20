"use client";

import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans select-none">
      {/* Backdrop overlay */}
      <div
        onClick={() => !checkoutSuccess && setIsCartOpen(false)}
        className="absolute inset-0 bg-[#001e3f]/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out cursor-pointer"
      />

      {/* Slide-over panel container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out border-l border-gray-100">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-[#fcfdff]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="text-[#005ec4]" size={20} />
              <h2 className="text-lg font-bold text-[#0a3161]">Your Cart</h2>
              <span className="text-xs bg-blue-50 text-[#005ec4] font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            
            {!checkoutSuccess && (
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Checkout success screen simulation */}
          {checkoutSuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-[#fbfdfb]">
              <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4 shadow-sm">
                <Check size={28} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Order Placed Successfully!</h3>
              <p className="text-xs text-gray-500 max-w-xs">
                Thank you for your purchase. We are preparing your order. This simulated drawer will automatically clear and close shortly.
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
                {cartItems.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
                    <ShoppingBag className="text-gray-200 mb-4" size={56} strokeWidth={1} />
                    <p className="text-sm font-semibold text-gray-500">Your cart is empty</p>
                    <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                      Add some items from our catalog to get started.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 text-xs font-bold text-[#005ec4] hover:text-[#004ca1] cursor-pointer"
                    >
                      Continue Shopping &rarr;
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/10 transition-colors"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>

                      {/* Info & Quantity controls */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <h4 className="text-xs font-bold text-[#1a202c] truncate">
                            {item.title}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-medium">
                            Brand: {item.brand}
                          </span>
                        </div>

                        {/* Quantity and Price row */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-50 text-gray-400 hover:text-gray-600 disabled:opacity-30 cursor-pointer"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={10} />
                            </button>
                            <span className="w-7 text-center font-bold text-xs text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-50 text-gray-400 hover:text-gray-600 disabled:opacity-30 cursor-pointer"
                              disabled={item.quantity >= 10}
                            >
                              <Plus size={10} />
                            </button>
                          </div>

                          <span className="text-xs font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="flex items-start">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer (only if cart contains items) */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-100 px-6 py-6 bg-[#fcfdff] flex flex-col gap-4">
                  {/* Totals */}
                  <div className="flex flex-col gap-1.5 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span className="font-normal text-xs text-gray-400 uppercase tracking-wider">Subtotal</span>
                      <span className="font-black text-gray-800 text-base">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-green-600 font-medium">
                      <span>Shipping</span>
                      <span>{subtotal >= 100 ? "FREE" : "$9.99"}</span>
                    </div>
                    <div className="border-t border-gray-100 my-1"></div>
                    <div className="flex justify-between text-gray-800 font-bold text-base">
                      <span>Estimated Total</span>
                      <span>
                        ${(subtotal + (subtotal >= 100 ? 0 : 9.99)).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-[#005ec4] hover:bg-[#004ca1] text-white font-bold text-sm py-3 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer text-center"
                    >
                      Checkout &rarr;
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full text-xs font-semibold text-gray-400 hover:text-red-500 transition-colors cursor-pointer py-1.5 text-center"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
