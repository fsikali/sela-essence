import { Search, User, ShoppingCart, MapPin, ChevronDown } from "lucide-react";

export default function HeaderNav() {
  return (
   <header className="bg-[#1265e1] text-white/90">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16 gap-4">

      {/* LEFT */}
      <div className="flex items-center gap-6 min-w-fit">
        <div className="text-xl font-semibold tracking-tight">
          SelaEssence
        </div>

        <div className="hidden md:flex items-center gap-1 text-sm text-white/80 hover:text-white cursor-pointer">
          <MapPin size={16} />
          <span>Nairobi, Kenya</span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex-1 flex justify-center px-4">
        <div className="flex w-full max-w-2xl items-center bg-white rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            className="flex-1 px-4 py-2 text-gray-700 text-sm outline-none placeholder:text-gray-400"
          />
          <button className="bg-gray-100 hover:bg-gray-200 px-5 py-2">
            <Search size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6 text-sm text-white/90 min-w-fit">

        <div className="hidden sm:block hover:text-white cursor-pointer">
          Sign In
        </div>

        <div className="hidden md:flex items-center gap-1 hover:text-white cursor-pointer">
          <User size={18} />
          <span>Account</span>
        </div>

        <div className="hidden lg:flex items-center gap-1 hover:text-white cursor-pointer">
          <span>EN</span>
          <ChevronDown size={12} />
        </div>

        <div className="flex items-center gap-1 hover:text-white cursor-pointer">
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
        </div>

      </div>
    </div>
  </div>
</header>
  );
}