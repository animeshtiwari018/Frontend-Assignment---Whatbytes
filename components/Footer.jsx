"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0759A9] text-white px-8 py-10 font-sans border-t border-blue-500/20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
        
        {/* Column 1: Filters */}
        <div className="flex flex-col justify-between h-full min-h-[100px]">
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Filters
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-200">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Footwear
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-[11px] text-gray-300 font-medium mt-6">
            &copy; 2026 Whatbytes Store. All rights reserved.
          </div>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            About Us
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-200">
            <li>
              <Link
                href="/"
                className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Follow Us
          </h3>
          
          {/* Social Icons matching design mockup circles */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#002b5a] flex items-center justify-center text-white hover:bg-[#005ec4] hover:scale-110 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#002b5a] flex items-center justify-center text-white hover:bg-[#005ec4] hover:scale-110 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.95 4.57a10 10 0 01-2.82.77 4.96 4.96 0 002.16-2.72c-.95.57-2 .98-3.13 1.2a4.92 4.92 0 00-8.38 4.48A14 14 0 011.64 3.16a4.9 4.9 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.9 9.9 0 010 19.54a13.9 13.9 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.43-.02-.65 1-.7 1.8-1.56 2.4-2.53z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#002b5a] flex items-center justify-center text-white hover:bg-[#005ec4] hover:scale-110 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#002b5a] flex items-center justify-center text-white hover:bg-[#005ec4] hover:scale-110 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
