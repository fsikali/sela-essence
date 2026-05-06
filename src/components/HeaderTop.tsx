import { Search, User, ShoppingCart, MapPin, ChevronDown, Menu } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="bg-[#033f93] text-white">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center h-16 w-full">

          {/* LEFT: Logo + Location */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="text-2xl font-bold tracking-tight">
              SelaEssence
            </div>
            <div className="hidden md:flex items-center gap-1 text-sm text-white/100 hover:text-white cursor-pointer">
              <MapPin size={16} />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* CENTER: Search */}
          <div className="flex-1 mx-6">
            <div className="flex w-full items-center bg-white rounded-full overflow-hidden shadow-sm hover:shadow-md transition">
              <input
                type="text"
                placeholder="Search all products on sela essence"
                className="flex-1 px-4 py-2 text-gray-700 text-sm outline-none placeholder:text-gray-400"
              />
              <button className="bg-gray-100 hover:bg-gray-200 px-5 py-2 transition">
                <Search size={18} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-6 shrink-0 text-sm text-white/100">

            <div className="hidden sm:block hover:text-white cursor-pointer font-medium">
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

        {/* MOBILE MENU (optional) */}
        <div className="flex items-center justify-between md:hidden mt-2">
          <button className="p-2">
            <Menu size={24} />
          </button>
          <div className="flex-1 mx-2">
            <div className="flex w-full items-center bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 text-gray-700 text-sm outline-none placeholder:text-gray-400"
              />
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2">
                <Search size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShoppingCart size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}