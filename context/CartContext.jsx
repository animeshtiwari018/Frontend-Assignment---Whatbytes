"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("whatbytes-store-cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        setTimeout(() => {
          setCartItems(parsed);
        }, 0);
      }
    } catch (error) {
      console.error("Failed to load cart items from localStorage:", error);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);
  }, []);

  // Save cart to localStorage when cartItems changes, only after loading is complete
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("whatbytes-store-cart", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Failed to save cart items to localStorage:", error);
      }
    }
  }, [cartItems, isLoaded]);

  // Add product to cart or increment its quantity if already exists
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id);

      if (existingItemIndex > -1) {
        // Product already exists in the cart: update its quantity up to max 10 items
        return prevItems.map((item, idx) =>
          idx === existingItemIndex
            ? { ...item, quantity: Math.min(10, item.quantity + quantity) }
            : item
        );
      } else {
        // Product is new: add it to the cart
        return [...prevItems, { ...product, quantity: Math.min(10, quantity) }];
      }
    });
    // Auto-open cart drawer when adding an item
    setIsCartOpen(true);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Update quantity of an item
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(10, quantity)) }
          : item
      )
    );
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isLoaded,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access CartContext easily
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
