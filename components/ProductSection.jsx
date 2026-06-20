import React from "react";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Backpack",
    price: 129,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 149,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "T-shirt",
    price: 29,
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Smartphone",
    price: 699,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=80",
  },
];

export default function ProductListing() {
  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8 font-sans max-w-[1000px] mx-auto">
      {/* Page Title */}
      <h1 className="text-[#0a3161] text-2xl md:text-3xl font-bold mb-6 tracking-tight">
        Product Listing
      </h1>

      {/* Layout Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-3 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full"
          >
            {/* Image (cover) */}
            <div className="h-32 w-full overflow-hidden rounded-lg mb-2.5 bg-gray-50 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-1 flex-1 justify-between">
              <div>
                <h3 className="text-xs font-semibold text-[#1a202c] line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Rating stars */}
                <div className="flex items-center gap-0.5 text-[10px] text-amber-500 my-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.round(product.rating)
                          ? "text-amber-500"
                          : "text-gray-200"
                      }
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-gray-400 ml-1 text-[9px]">({product.rating})</span>
                </div>

                <p className="text-xs font-bold text-[#1a202c] mt-0.5">
                  ${product.price}
                </p>
              </div>

              {/* Quick "Add to Cart" button */}
              <button className="w-full bg-[#005ec4] hover:bg-[#004ca1] text-white font-medium text-[11px] py-1.5 rounded-md mt-2 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
