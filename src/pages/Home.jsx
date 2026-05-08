import React, { useState } from "react";
import { Link } from "react-router-dom";

const missionsData = [
  {
    id: "feed-street-dogs", // <-- This is what makes the click work!
    title: "Feed Street Dogs",
    category: "ANIMAL WELFARE",
    categoryColor: "text-purple-600 bg-purple-100",
    description: "Support local animal shelters with food and care.",
    reward: 10,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "plant-a-tree", // <-- Matches the detail page database
    title: "Plant a Tree",
    category: "ENVIRONMENT",
    categoryColor: "text-emerald-600 bg-emerald-100",
    description: "Add to the green canopy in designated areas.",
    reward: 50,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "clean-local-park",
    title: "Clean Local Park",
    category: "CLEANLINESS",
    categoryColor: "text-blue-600 bg-blue-100",
    description: "Organize or join a local park cleanup group.",
    reward: 25,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbea5?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "donate-books",
    title: "Donate Books",
    category: "EDUCATION",
    categoryColor: "text-orange-600 bg-orange-100",
    description: "Share the gift of knowledge with your neighborhood.",
    reward: 10,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Home() {
  const [xp, setXp] = useState(1240);

  return (
    <div className="flex min-h-screen bg-[#F8FAF9] font-sans text-slate-800">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#F8FAF9] flex flex-col justify-between p-6 border-r border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg">K</div>
            <h1 className="text-xl font-bold text-emerald-900 leading-tight">Kindra<br/><span className="text-xs text-slate-500 font-normal tracking-wide">Civic Hero</span></h1>
          </div>
          <nav className="space-y-2">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 bg-emerald-100 text-emerald-800 rounded-xl font-medium">
              <span>📊</span> Dashboard
            </Link>
            <Link to="/missions" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>🎯</span> Missions
            </Link>
            <Link to="/upload" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>☁️</span> Upload Proof
            </Link>
            <Link to="/leaderboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>🏆</span> Leaderboard
            </Link>
            
            {/* ADD THIS NEW LINK RIGHT HERE */}
            <Link to="/rewards" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>🎁</span> Rewards
            </Link>

            <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>👤</span> Profile
            </Link>
          </nav>
        </div>
        <button className="w-full bg-[#1E5631] text-white py-3 rounded-xl font-medium hover:bg-emerald-800 transition shadow-sm flex items-center justify-center gap-2">
          <span>+</span> New Mission
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <input 
              type="text" 
              placeholder="Search missions, heroes, or impact..." 
              className="w-full bg-slate-100 rounded-full py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-emerald-200 text-sm"
            />
            <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-slate-600">🔔</button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold text-sm">Alex River</p>
                <p className="text-xs text-slate-500">Lv. 2 Helper</p>
              </div>
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-emerald-100" />
            </div>
          </div>
        </header>

        {/* HERO CARD */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm flex justify-between items-center border border-slate-100 relative overflow-hidden">
          <div className="z-10 w-2/3">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full mb-4">
              🔥 7-day streak
            </span>
            <h2 className="text-4xl font-bold mb-2">Good Evening, Alex</h2>
            <p className="text-slate-500 italic mb-8 text-sm">
              "Small acts, when multiplied by millions, can transform the world."
            </p>
            
            <div className="w-full max-w-md">
              <div className="w-full bg-slate-100 rounded-full h-2.5 mb-2">
                <div className="bg-[#1E5631] h-2.5 rounded-full" style={{ width: '62%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>Keep going! Just 760 XP to Level 3.</span>
                <span>62% to Next Rank</span>
              </div>
            </div>
          </div>
          <div className="z-10 text-right">
            <div className="text-4xl font-bold text-[#1E5631]">{xp.toLocaleString()} <span className="text-lg text-slate-400">/ 2,000 XP</span></div>
            <div className="text-sm font-bold text-slate-400 tracking-wider mt-1">LEVEL 2 HELPER</div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-slate-100 opacity-50 rounded-l-3xl"></div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { value: "12", label: "TREES PLANTED", icon: "🌲" },
            { value: "850kg", label: "WASTE REMOVED", icon: "🗑️" },
            { value: "24", label: "MISSIONS DONE", icon: "✅" },
            { value: "1,200", label: "ANIMALS HELPED", icon: "🐾" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center justify-center">
              <span className="text-xl mb-2 text-emerald-600">{stat.icon}</span>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-xs text-slate-400 font-bold tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ACTIVE MISSIONS GRID */}
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold">Active Missions</h2>
          <Link to="/missions" className="text-emerald-600 text-sm font-semibold hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {missionsData.map((mission, idx) => (
            /* CLICKABLE MISSION CARD */
            <Link 
              to={`/mission/${mission.id}`} 
              key={idx} 
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4 transition hover:shadow-md hover:border-emerald-200 cursor-pointer group"
            >
              <img src={mission.image} alt={mission.title} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${mission.categoryColor}`}>
                      {mission.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[8px]">★</span>
                      {mission.reward} XP
                    </span>
                  </div>
                  <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-emerald-700 transition-colors">{mission.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{mission.description}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    📊 {mission.difficulty}
                  </span>
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Join &rsaquo;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-80 bg-[#F8FAF9] p-8 border-l border-slate-200 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Top Contributors</h2>
          <span>🏆</span>
        </div>
        
        <div className="space-y-4 mb-8">
          {[
            { name: "Sarah L.", xp: "3,120 XP", img: "https://i.pravatar.cc/150?img=5", rank: 1 },
            { name: "Marcus T.", xp: "2,840 XP", img: "https://i.pravatar.cc/150?img=8", rank: 2 },
            { name: "Priya K.", xp: "2,410 XP", img: "https://i.pravatar.cc/150?img=9", rank: 3 },
          ].map((user, idx) => (
            <div key={idx} className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-xl transition">
              <div className="relative">
                <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-600 text-white text-[10px] flex items-center justify-center rounded-full border border-white">
                  {user.rank}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm">{user.name}</h4>
                <p className="text-xs text-slate-500">{user.xp}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100 mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-emerald-400"></div>
          <p className="text-xs text-slate-400 font-bold tracking-widest mb-2 uppercase">Your Progress</p>
          <div className="flex justify-center items-end gap-2 mb-1">
            <span className="text-3xl font-bold text-slate-800">142</span>
            <span className="text-xl font-bold text-slate-800">Top 5%</span>
          </div>
          <div className="flex justify-center gap-4 text-[10px] text-slate-400 font-medium">
            <span>Global Rank</span>
            <span>Contributor</span>
          </div>
        </div>

        <Link 
          to="/leaderboard" 
          className="block w-full text-center py-3 bg-white border border-[#1E5631] text-[#1E5631] font-bold rounded-xl hover:bg-emerald-50 transition"
        >
          View Full Leaderboard
        </Link>

        <button className="absolute bottom-8 right-8 w-14 h-14 bg-[#1E5631] text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-emerald-800 transition">
          +
        </button>
      </aside>

    </div>
  );
}