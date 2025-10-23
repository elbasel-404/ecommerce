export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$299.99",
      category: "Electronics",
      image: "🎧",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$399.99",
      category: "Electronics",
      image: "⌚",
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: "$159.99",
      category: "Fashion",
      image: "🕶️",
    },
    {
      id: 4,
      name: "Leather Backpack",
      price: "$189.99",
      category: "Accessories",
      image: "🎒",
    },
    {
      id: 5,
      name: "Running Shoes",
      price: "$129.99",
      category: "Sports",
      image: "👟",
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: "$89.99",
      category: "Home",
      image: "☕",
    },
  ];

  const categories = [
    { name: "Electronics", icon: "📱", color: "from-blue-500 to-cyan-500" },
    { name: "Fashion", icon: "👕", color: "from-pink-500 to-rose-500" },
    { name: "Home & Living", icon: "🏠", color: "from-green-500 to-emerald-500" },
    { name: "Sports", icon: "⚽", color: "from-orange-500 to-amber-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🛍️</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShopHub
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">Home</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">Products</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">Categories</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">About</a>
            </div>
            <div className="flex gap-4 items-center">
              <button aria-label="Search" className="text-2xl hover:scale-110 transition-transform">🔍</button>
              <button aria-label="Shopping cart" className="text-2xl hover:scale-110 transition-transform">🛒</button>
              <button aria-label="User account" className="text-2xl hover:scale-110 transition-transform">👤</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight animate-fade-in">
              Welcome to ShopHub
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Discover amazing products at unbeatable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all">
                View Deals
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Featured Products
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold dark:text-blue-400">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 p-12 flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-slate-900 dark:text-white">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {product.price}
                  </span>
                  <button 
                    aria-label={`Add ${product.name} to cart`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">🔥 Special Offer</h2>
          <p className="text-xl mb-6">Get 30% off on all electronics this week!</p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all shadow-lg">
            Claim Offer
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🛍️</span>
                <span className="text-2xl font-bold">ShopHub</span>
              </div>
              <p className="text-slate-400">
                Your one-stop shop for everything you need.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Shop</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <div className="flex gap-4 text-2xl">
                <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">📘</a>
                <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">📷</a>
                <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform">🐦</a>
                <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">💼</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
