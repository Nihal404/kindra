import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mock Data for the store
const activeCoupons = [
  {
    id: 1,
    icon: "☕",
    expireText: "Exp: 3 Days",
    expireColor: "text-red-500 bg-red-50",
    title: "15% Off Green Bean Cafe",
    desc: "Valid for any handcrafted beverage.",
    code: "GB15-XY9"
  },
  {
    id: 2,
    icon: "🍴",
    expireText: "Exp: 14 Days",
    expireColor: "text-slate-500 bg-slate-100",
    title: "Free Dessert at Pasta Palace",
    desc: "With purchase of any main entree.",
    code: "PP-DSRT-24"
  }
];

const storeItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400",
    cost: "1,000",
    title: "$5 Voucher - Local Bookstore",
    desc: "Support local reading and community spaces.",
    canAfford: true,
    isGraphic: false
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400",
    cost: "500",
    title: "Free Coffee Upgrade",
    desc: "Upgrade your regular coffee to a large at Sunrise Roasters.",
    canAfford: true,
    isGraphic: false
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=400",
    cost: "2,500",
    title: "Annual City Park Pass",
    desc: "Free parking and entry to all municipal nature reserves.",
    canAfford: false,
    shortfall: "50",
    isGraphic: false
  },
  {
    id: 4,
    graphicIcon: "🤝",
    cost: "1,500",
    title: "Donate to Food Bank",
    desc: "Convert your coins into a $10 donation to the regional food bank.",
    canAfford: true,
    isGraphic: true
  }
];

export default function Rewards() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#F8FAF9] font-sans text-slate-800 flex flex-col">
      
      {/* TOP HEADER (Custom for Rewards Page) */}
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-slate-100 shadow-sm sticky top-0 z-10">
        <Link to="/" className="text-xl font-bold text-[#1E5631] hover:opacity-80 transition">
          Kindra
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-[#EAF5EC] px-4 py-1.5 rounded-full border border-[#DCFCE7]">
            <span className="text-[#1E5631] font-bold text-sm flex items-center gap-1.5">
              <span className="bg-[#22C55E] text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]">$</span>
              2,450 KC
            </span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition text-lg">🔔</button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-700">Level 12</span>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-9 h-9 rounded-full border-2 border-emerald-100" />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-8 pb-20">
        
        {/* Title Section */}
        <div className="mb-12 mt-4">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Rewards Store</h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
            Redeem your hard-earned Karma Coins to support local businesses and enjoy exclusive perks. Your civic actions translate directly into real-world rewards.
          </p>
        </div>

        {/* ACTIVE COUPONS */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Active Coupons</h2>
          <div className="grid grid-cols-2 gap-6">
            {activeCoupons.map((coupon) => (
              <div key={coupon.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#22C55E] flex items-center justify-center text-xl">
                      {coupon.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${coupon.expireColor}`}>
                      {coupon.expireText}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{coupon.title}</h3>
                  <p className="text-sm text-slate-500 mb-6">{coupon.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="bg-slate-100 text-slate-600 font-bold tracking-widest text-sm px-4 py-2 rounded-xl">
                    {coupon.code}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REDEEM KARMA COINS */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Redeem Karma Coins</h2>
            <div className="flex gap-2">
              {["All", "Food & Drink", "Retail"].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs font-bold px-4 py-2 rounded-full border transition ${
                    activeFilter === filter 
                    ? "bg-white border-slate-300 text-slate-800 shadow-sm" 
                    : "border-transparent text-slate-500 hover:bg-white/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {storeItems.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col overflow-hidden group">
                
                {/* Header Image or Graphic */}
                <div className="relative h-40 w-full overflow-hidden">
                  {item.isGraphic ? (
                    <div className="w-full h-full bg-[#EAF5EC] flex items-center justify-center text-5xl text-[#1E5631]">
                      {item.graphicIcon}
                    </div>
                  ) : (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  )}
                  {/* Cost Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="bg-[#22C55E] text-white w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold">$</span>
                    <span className="text-xs font-bold text-[#1E5631]">{item.cost}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">{item.desc}</p>
                  
                  {item.canAfford ? (
                    <button className="w-full py-2.5 rounded-xl border-2 border-[#1E5631] text-[#1E5631] font-bold text-sm hover:bg-[#EAF5EC] transition">
                      Redeem
                    </button>
                  ) : (
                    <button disabled className="w-full py-2.5 rounded-xl bg-slate-50 text-slate-400 font-bold text-sm border border-slate-100 cursor-not-allowed">
                      Need {item.shortfall} KC
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs font-medium text-slate-400">
        Doing good feels beautiful.
      </footer>

    </div>
  );
}