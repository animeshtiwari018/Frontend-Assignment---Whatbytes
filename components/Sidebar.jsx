"use client";

import React, { useState } from "react";

const SidebarFilters = () => {
  const [category, setCategory] = useState("All");

  // Minimum and Maximum price states
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const categories = ["All", "Electronics", "Clothing", "Home"];

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 50);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 50);
    setMaxPrice(value);
  };

  return (
    <div className="w-full max-w-[220px] h-auto bg-[#0052a3] text-white py-6 px-4 rounded-xl font-sans select-none box-border shadow-md">
      <div>
        {/* Main Title */}
        <h2 className="text-lg font-semibold mb-4 tracking-wide text-white">
          Filters
        </h2>

        {/* Category Section */}
        <div className="mb-5">
          <h3 className="text-[14px] font-medium mb-2 text-white">Category</h3>

          <div className="flex flex-col gap-3">
            {categories.map((cat) => {
              const isSelected = category === cat;
              return (
                <label
                  key={cat}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={isSelected}
                    onChange={(e) => setCategory(e.target.value)}
                    className="sr-only"
                  />

                  {/* image_cd0945.png के हिसाब से कस्टमाइज्ड वाइट रिंग स्टाइल */}
                  <span
                    className={`w-[15px] h-[15px] rounded-full mr-3 transition-all box-border
                      ${
                        isSelected
                          ? "border-2 border-white bg-[#0052a3] ring-1 ring-white ring-offset-[1.5px] ring-offset-[#0052a3] scale-100"
                          : "border-2 border-white/40 bg-transparent group-hover:border-white/60"
                      }`}
                  />

                  {/* Category Text */}
                  <span className="text-[13px] text-white">{cat}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-4 mb-1">
        <div className="flex justify-between items-center mb-1.5">
          <h3 className="text-[14px] font-medium text-white">Price</h3>
          <span className="text-[11px] text-white bg-white/15 px-1.5 py-0.5 rounded">
            {minPrice}-{maxPrice}
          </span>
        </div>

        {/* Dual Range Slider Container */}
        <div className="relative w-full h-5 flex items-center">
          {/* Background track line */}
          <div className="absolute h-[2px] w-full bg-white/30 rounded-lg"></div>

          {/* Active range highlighter */}
          <div
            className="absolute h-[2px] bg-white rounded-lg"
            style={{
              left: `${(minPrice / 1000) * 100}%`,
              right: `${100 - (maxPrice / 1000) * 100}%`,
            }}
          ></div>

          {/* Left / Minimum Input */}
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={handleMinChange}
            className="absolute w-full h-[2px] appearance-none bg-transparent pointer-events-none outline-none z-20
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-3.5 
              [&::-webkit-slider-thumb]:h-3.5 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-white 
              [&::-webkit-slider-thumb]:pointer-events-auto
              [&::-webkit-slider-thumb]:cursor-pointer
              
              [&::-moz-range-thumb]:w-3.5 
              [&::-moz-range-thumb]:h-3.5 
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:bg-white 
              [&::-moz-range-thumb]:pointer-events-auto
              [&::-moz-range-thumb]:cursor-pointer 
              [&::-moz-range-thumb]:border-none"
          />

          {/* Right / Maximum Input */}
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handleMaxChange}
            className="absolute w-full h-[2px] appearance-none bg-transparent pointer-events-none outline-none z-20
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-3.5 
              [&::-webkit-slider-thumb]:h-3.5 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-white 
              [&::-webkit-slider-thumb]:pointer-events-auto
              [&::-webkit-slider-thumb]:cursor-pointer
              
              [&::-moz-range-thumb]:w-3.5 
              [&::-moz-range-thumb]:h-3.5 
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:bg-white 
              [&::-moz-range-thumb]:pointer-events-auto
              [&::-moz-range-thumb]:cursor-pointer 
              [&::-moz-range-thumb]:border-none"
          />
        </div>

        {/* Min/Max Labels */}
        <div className="flex justify-between text-[11px] mt-0.5 text-white font-normal">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
