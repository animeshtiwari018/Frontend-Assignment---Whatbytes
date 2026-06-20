import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#0759A9] px-8 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-white">Logo</h1>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
          />

          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-lg border border-blue-400 bg-transparent py-3 pl-10 pr-4 text-white placeholder:text-gray-300 outline-none"
          />
        </div>

        {/* Cart */}

        <button className="flex items-center gap-2 rounded-lg bg-[#002b5a] px-5 py-3 text-white">
          <ShoppingCart size={18} />
          Cart
        </button>
      </div>
    </header>
  );
}
