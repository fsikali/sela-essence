export default function HeaderTop() {
    return (
        <div className="bg-[#3b7ee2] text-white px-4 shadow">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    <div className="flex space-x-6">
                        <a href="/shop" className="text-white-700 hover:text-blue-200">Shop</a>
                        <a href="/about" className="text-white-700 hover:text-blue-200">About</a>
                        <a href="/press" className="text-white-700 hover:text-blue-200">Press</a>
                        <a href="/blog" className="text-white-700 hover:text-blue-200">Blog</a>
                        <a href="/happy-customers" className="text-white-700 hover:text-blue-200">Reviews</a>
                        <a href="/wholesale" className="text-white-700 hover:text-blue-200">Wholesale</a>
                    </div> 

                    <div className="flex space-x-6 font-medium">
                        <a href="/skin-quiz" className="hover:text-blue-200">Quiz</a>
                        <a href="/cart" className="hover:text-blue-200">Cart</a>
                        <a href="/account" className="hover:text-blue-200">Account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
