"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductSection from "../components/ProductSection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="mx-auto flex flex-col md:flex-row max-w-7xl gap-6 md:gap-8 p-4 md:p-8">
        <Sidebar />

        <div className="flex-1">
          <ProductSection searchQuery={searchQuery} />
        </div>
      </main>
    </>
  );
}
