import React from "react";
import { products } from "../app/data/products";

export default function ProductListing({ searchQuery = "", selectedCategories = [] }) {
  // Filter products by title (case-insensitive) and selected categories
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8 font-sans max-w-[1000px] mx-auto">
      {/* Page Title */}
      <h1 className="text-[#0a3161] text-2xl md:text-3xl font-bold mb-6 tracking-tight">
        Product Listing
      </h1>

      {/* Conditional rendering for empty results */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <p className="text-gray-500 text-base md:text-lg font-medium">
            No products found matching the selected filters
          </p>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Try checking for spelling, clearing search, or adjusting category filters.
          </p>
        </div>
      ) : (
        /* Layout Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-3 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full"
            >
              {/* Image (cover) */}
              <div className="h-32 w-full overflow-hidden rounded-lg mb-2.5 bg-gray-50 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1 flex-1 justify-between">
                <div>
                  <h3 className="text-xs font-semibold text-[#1a202c] line-clamp-1">
                    {product.title}
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
      )}
    </div>
  );
}
