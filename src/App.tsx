import { useState, useEffect } from "react";
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Weight, 
  Layers 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  colors: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Aero-Iron 4.5qt Round Dutch Oven",
    price: 345,
    rating: 4.9,
    reviews: 128,
    image: "https://picsum.photos/seed/dutchoven1/800/800",
    category: "Dutch Ovens",
    colors: ["#1a1a1a", "#8b4513", "#2f4f4f", "#f5f5f5"],
    isBestseller: true,
  },
  {
    id: 2,
    name: "Aero-Iron 6qt Round Dutch Oven",
    price: 420,
    rating: 5.0,
    reviews: 245,
    image: "https://picsum.photos/seed/dutchoven2/800/800",
    category: "Dutch Ovens",
    colors: ["#1a1a1a", "#8b4513", "#2f4f4f", "#f5f5f5"],
    isNew: true,
  },
  {
    id: 3,
    name: "Aero-Iron 8qt Round Dutch Oven",
    price: 510,
    rating: 4.8,
    reviews: 89,
    image: "https://picsum.photos/seed/dutchoven3/800/800",
    category: "Dutch Ovens",
    colors: ["#1a1a1a", "#8b4513", "#2f4f4f", "#f5f5f5"],
  },
  {
    id: 4,
    name: "Aero-Iron 3.5qt Braiser",
    price: 295,
    rating: 4.9,
    reviews: 156,
    image: "https://picsum.photos/seed/braiser1/800/800",
    category: "Braisers",
    colors: ["#1a1a1a", "#8b4513", "#2f4f4f"],
  },
  {
    id: 5,
    name: "Aero-Iron 10\" Skillet",
    price: 185,
    rating: 4.7,
    reviews: 312,
    image: "https://picsum.photos/seed/skillet1/800/800",
    category: "Skillets",
    colors: ["#1a1a1a", "#8b4513"],
  },
  {
    id: 6,
    name: "Aero-Iron 12\" Skillet",
    price: 225,
    rating: 4.8,
    reviews: 198,
    image: "https://picsum.photos/seed/skillet2/800/800",
    category: "Skillets",
    colors: ["#1a1a1a", "#8b4513"],
  },
];

const CATEGORIES = ["All", "Dutch Ovens", "Braisers", "Skillets"];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu size={20} />
          </button>
          <div className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-brand-accent transition-colors">Shop All</a>
            <a href="#" className="hover:text-brand-accent transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Technology</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-2xl lg:text-3xl font-serif tracking-tight leading-none">
            Future <span className="italic">Dutch Ovens</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60 mt-1">Aero-Iron Series</p>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-accent rounded-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#151515] text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczOO6yWaoVodpIMTjhOVCxCF2blbZk2RFv2QajQUKR9KgadtwFrvHO0Z0l7dgNCOl3CgDJtpFwF2LPZYZx8HS040yWzvSHAt8xUpFfXyInB5ksS-3zBzPa8xlwmUvD8aJ6CG3cO7z-JBCIk6CAtYfw4=w1920-h763-s-no-gm?authuser=0" 
          alt="Kitchen Background" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#f9f8f6]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.4em] font-semibold mb-6 block opacity-80">Introducing the Aero-Iron Series</span>
          <h2 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-8">
            The future <span className="italic">Dutch Oven</span><br />is Here
          </h2>
          <p className="text-lg lg:text-xl font-light max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
            Aerospace-grade cast iron technology that's 40% lighter than traditional Dutch ovens with superior heat retention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-brand-paper transition-all flex items-center gap-2 group">
              Shop the Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/30 backdrop-blur-sm px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Explore the Science
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-white rounded-2xl shadow-sm mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-brand-ink text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">New</span>
        )}
        {product.isBestseller && (
          <span className="absolute top-4 left-4 bg-brand-accent text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Bestseller</span>
        )}
        <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md text-black py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-medium text-sm">
          Quick Add
        </button>
      </div>
      
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-serif leading-tight group-hover:text-brand-accent transition-colors">{product.name}</h3>
        <p className="font-medium text-lg">${product.price}</p>
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center text-brand-accent">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
          ))}
        </div>
        <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">({product.reviews} Reviews)</span>
      </div>

      <div className="flex gap-2">
        {product.colors.map((color, i) => (
          <div 
            key={i} 
            className="w-3 h-3 rounded-full border border-black/10" 
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Weight size={24} />,
      title: "40% Lighter",
      description: "Our proprietary Aero-Iron alloy reduces weight significantly without sacrificing durability or performance."
    },
    {
      icon: <Flame size={24} />,
      title: "Superior Retention",
      description: "Engineered to distribute heat evenly and hold it longer, perfect for slow braises and high-heat searing."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Lifetime Warranty",
      description: "Built to last generations. Every Aero-Iron piece is backed by our unwavering commitment to quality."
    },
    {
      icon: <Layers size={24} />,
      title: "Non-Stick Ceramic",
      description: "Advanced aerospace coating that's naturally non-stick, PFAS-free, and incredibly easy to clean."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-paper flex items-center justify-center mb-6 text-brand-accent">
                {f.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-serif mb-6">Future Dutch Ovens</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Redefining the modern kitchen through aerospace engineering and timeless design.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>)}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gray-500">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">All Cookware</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dutch Ovens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Braisers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skillets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gray-500">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gray-500">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Join our list for exclusive releases and culinary inspiration.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-medium">
          <p>© 2026 Future Dutch Ovens. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        <Features />

        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-4">The Aero-Iron Series</h2>
              <p className="text-gray-600 max-w-xl">
                Explore our full range of innovative cookware, designed for those who demand precision and performance in every meal.
              </p>
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? "bg-brand-ink text-white" 
                      : "bg-white text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters - Williams Sonoma Style */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center justify-between">
                    Category
                    <ChevronDown size={14} />
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {CATEGORIES.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => setActiveCategory(cat)}
                          className={`hover:text-brand-accent transition-colors ${activeCategory === cat ? "text-brand-accent font-semibold" : ""}`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center justify-between">
                    Size
                    <ChevronDown size={14} />
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-gray-300" /> 3.5 - 4.5 qt</label></li>
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-gray-300" /> 5 - 6 qt</label></li>
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-gray-300" /> 7+ qt</label></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center justify-between">
                    Price
                    <ChevronDown size={14} />
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-gray-300" /> Under $200</label></li>
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-gray-300" /> $200 - $400</label></li>
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-gray-300" /> Over $400</label></li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map(product => (
                    <motion.div 
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="py-24 text-center">
                  <p className="text-gray-500 italic">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Editorial Section */}
        <section className="py-24 bg-brand-ink text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/cooking-hero/1200/1500" 
                  alt="Cooking with Aero-Iron" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-accent rounded-3xl p-8 hidden lg:flex flex-col justify-end">
                <p className="text-2xl font-serif leading-tight mb-4 italic">"The last Dutch oven you'll ever need to buy."</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">— Chef Marcus Thorne</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.4em] font-semibold opacity-60 block">Craftsmanship & Innovation</span>
              <h2 className="text-5xl lg:text-6xl font-serif leading-tight">Designed for the <span className="italic">Art of Cooking.</span></h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Every Aero-Iron piece is hand-finished by master artisans. Our unique casting process creates a surface that's microscopicly textured to hold seasoning better than any other cast iron on the market.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Aerospace Alloy</h4>
                    <p className="text-sm text-gray-500">A proprietary blend of iron and lightweight composites.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Micro-Pore Surface</h4>
                    <p className="text-sm text-gray-500">Optimized for natural seasoning and heat distribution.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Precision Lids</h4>
                    <p className="text-sm text-gray-500">Self-basting rings that lock in moisture and flavor.</p>
                  </div>
                </div>
              </div>
              <button className="text-white border-b border-white/30 pb-2 hover:border-white transition-all flex items-center gap-2 group pt-4">
                Learn more about our process
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Instagram/Social Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-serif mb-4 italic">Share your kitchen moments</h2>
            <p className="text-xs uppercase tracking-widest font-bold text-gray-500">#FutureDutchOvens</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/kitchen-${i}/600/600`} 
                  alt={`Social ${i}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
