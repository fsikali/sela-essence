export default function HeaderTop() {
  const items = [
    "Shop",
    "Accessories",
    "Services",
    "Bolden Bitsies",
    "Kits",
    "Shea Oil",
    "Promotion",
    "Gift Cards",
    "Popular",
    "New Arrivals"
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center gap-2 h-12 overflow-x-auto whitespace-nowrap
                        [-ms-overflow-style:none] [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden">

          {items.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium shrink-0
                transition-colors
                ${i === 0
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white"}
              `}
            >
              {item}
            </a>
          ))}

        </div>
      </div>
    </div>
  );
}
