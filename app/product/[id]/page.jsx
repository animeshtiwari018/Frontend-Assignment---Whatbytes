"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star, Plus, Minus, Check, ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../../context/CartContext";

// Sample reviews generator based on product rating
const getMockReviews = (rating) => [
  {
    id: 1,
    name: "Alex M.",
    rating: Math.min(5, Math.ceil(rating)),
    date: "June 12, 2026",
    comment: "Absolutely outstanding quality. Exceeded my expectations in every way. Highly recommend to everyone!",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah T.",
    rating: Math.max(1, Math.floor(rating)),
    date: "May 28, 2026",
    comment: "Very solid build and works perfectly. The customer service was also super helpful when I had questions.",
    verified: true,
  },
  {
    id: 3,
    name: "Jordan K.",
    rating: Math.min(5, Math.round(rating)),
    date: "April 15, 2026",
    comment: "Good value for the price. Had a minor shipping delay, but the product itself is excellent.",
    verified: false,
  },
];

export default function ProductDetailPage({ params }) {
  // Resolve params using React.use for Next.js 15+ compatibility
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id, 10);
  const product = products.find((p) => p.id === productId);

  const { addToCart, cartItems, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f9fbff] flex flex-col justify-between font-sans">
        <header className="bg-[#0759A9] px-8 py-4 shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/">
              <h1 className="text-4xl font-bold text-white cursor-pointer hover:opacity-90 transition-opacity">
                Logo
              </h1>
            </Link>
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-100 max-w-md w-full">
            <h2 className="text-[#0a3161] text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-gray-500 mb-6">
              We couldn&apos;t find the product you were looking for. It may have been removed or the link is incorrect.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#005ec4] hover:bg-[#004ca1] text-white font-medium py-3 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              Return to Catalog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // Generate mock ratings breakdown
  const mockReviews = getMockReviews(product.rating);
  const roundedRating = Math.round(product.rating);

  const handleIncrement = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // We simulate a gallery of 3 slightly modified views (different zooms or standard views)
  const imageGallery = [
    product.image,
    product.image, // In a real app these would be alternate URLs
    product.image,
  ];

  return (
    <div className="min-h-screen bg-[#f9fbff] font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#0759A9] px-8 py-4 shadow-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/">
            <h1 className="text-4xl font-bold text-white cursor-pointer hover:opacity-90 transition-opacity">
              Logo
            </h1>
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-[#002b5a] px-5 py-3 text-white hover:bg-[#001e3f] transition-colors cursor-pointer"
          >
            <ShoppingCart size={18} />
            Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-6xl p-4 md:p-8">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#005ec4] hover:text-[#004ca1] transition-colors group cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
        </div>

        {/* Product Details Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left Column: Image Showcase */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center shadow-sm">
                <img
                  src={imageGallery[activeImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails Gallery */}
              <div className="flex gap-3 justify-center">
                {imageGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer bg-gray-50
                      ${activeImageIndex === idx ? "border-[#005ec4] scale-105 shadow-sm" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Information Details */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Brand & Category Pill */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-[#005ec4] px-2.5 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    Brand: {product.brand}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a3161] tracking-tight mb-2">
                  {product.title}
                </h2>

                {/* Ratings */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < roundedRating ? "currentColor" : "none"}
                        className={i < roundedRating ? "text-amber-500" : "text-gray-200"}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 ml-1">{product.rating}</span>
                  <span className="text-xs text-gray-400">({mockReviews.length} verified reviews)</span>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 my-4" />

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-black text-[#1a202c]">${product.price}</span>
                  <span className="text-xs text-green-600 font-semibold ml-2.5 bg-green-50 px-2 py-0.5 rounded">
                    In Stock
                  </span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Description
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action Area: Quantity and Add to Cart */}
              <div className="border-t border-gray-100 pt-6 mt-6">
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Quantity
                  </span>
                  
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      className="p-2.5 hover:bg-gray-50 text-gray-500 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-gray-800 select-none">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      disabled={quantity >= 10}
                      className="p-2.5 hover:bg-gray-50 text-gray-500 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">Limit 10 per order</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full flex items-center justify-center gap-2 font-semibold text-sm py-3.5 px-6 rounded-xl transition-all duration-300 cursor-pointer shadow-sm
                    ${addedToCart 
                      ? "bg-green-600 hover:bg-green-700 text-white scale-100" 
                      : "bg-[#005ec4] hover:bg-[#004ca1] text-white active:scale-98 hover:shadow-md"
                    }`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={18} />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart — ${(product.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>

                {/* Additional Value Selling points */}
                <div className="grid grid-cols-2 gap-4 mt-6 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Free delivery over $100
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> 30-day hassle-free return
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> 2-Year Full Warranty
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Secure payments encryption
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h3 className="text-lg font-bold text-[#0a3161] mb-6">Customer Reviews</h3>
          
          <div className="flex flex-col gap-6">
            {mockReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {/* User initial avatar */}
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005ec4] flex items-center justify-center font-bold text-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-gray-800 block leading-tight">
                        {review.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-normal">
                        {review.date}
                      </span>
                    </div>
                  </div>

                  {/* Rating display */}
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill={i < review.rating ? "currentColor" : "none"}
                        className={i < review.rating ? "text-amber-400" : "text-gray-200"}
                      />
                    ))}
                  </div>
                </div>

                {/* Verified Purchase Badge */}
                {review.verified && (
                  <span className="inline-flex items-center text-[10px] text-green-600 bg-green-50 font-bold px-1.5 py-0.5 rounded mb-2">
                    ✓ Verified Purchase
                  </span>
                )}

                {/* Review Text */}
                <p className="text-sm text-gray-600 font-normal leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
