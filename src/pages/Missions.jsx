import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Environment", "Animals", "Humanity", "Education", "Cleanliness"];

const allMissions = [
  {
    id: "feed-street-dogs",
    title: "Feed Street Dogs",
    category: "Animals",
    reward: 10,
    difficulty: "Easy",
    description: "Support local animal shelters with food and care. A small meal makes a big difference.",
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "plant-a-tree",
    title: "Plant Trees",
    category: "Environment",
    reward: 50,
    difficulty: "Medium",
    description: "Help restore the local canopy. Join our community reforestation effort this Sunday.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "clean-local-park",
    title: "Clean Local Park",
    category: "Cleanliness",
    reward: 25,
    difficulty: "Medium",
    description: "Group cleanup session this Saturday. Let's make our green spaces shine again.",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbea5?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "donate-books",
    title: "Donate Books",
    category: "Education",
    reward: 10,
    difficulty: "Easy",
    description: "Stock the community library. Share the gift of knowledge with your neighborhood.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400",
  }
];

export default function Missions() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMissions = activeFilter === "All" 
    ? allMissions 
    : allMissions.filter(m => m.category === activeFilter);

  return (
    <div className="flex min-h-screen bg-[#F8FAF9] font-sans text-slate-800">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white flex flex-col justify-between p-6 border-r border-slate-100 shadow-sm z-10">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg">K</div>
            <h1 className="text-xl font-bold text-emerald-900 leading-tight">Kindra<br/><span className="text-xs text-slate-500 font-normal tracking-wide">Civic Hero</span></h1>
          </div>
          <nav className="space-y-2">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-medium transition">
              <span>📊</span> Dashboard
            </Link>
            <Link to="/missions" className="flex items-center gap-3 px-4 py-3 bg-[#22C55E] text-white rounded-xl font-medium shadow-md shadow-emerald-200">
              <span>🎯</span> Missions
            </Link>
            <Link to="/upload" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-medium transition">
              <span>☁️</span> Upload Proof
            </Link>
            <Link to="/leaderboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-medium transition">
              <span>🏆</span> Leaderboard
            </Link>
            <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-medium transition">
              <span>👤</span> Profile
            </Link>
          </nav>
        </div>
        <button className="w-full bg-[#1E5631] text-white py-3 rounded-xl font-medium hover:bg-emerald-800 transition shadow-sm">+ New Mission</button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
          <div className="relative w-96">
            <input type="text" placeholder="Search missions..." className="w-full bg-white rounded-full py-2.5 pl-10 pr-4 outline-none border border-slate-100 focus:ring-2 focus:ring-emerald-200 text-sm shadow-sm" />
            <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-slate-600">🔔</button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold text-sm">Alex Rivera</p>
                <p className="text-xs text-slate-500">LVL 24 Hero</p>
              </div>
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-emerald-100" />
            </div>
          </div>
        </header>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1E5631] mb-2">Available Missions</h2>
          <p className="text-slate-500 text-sm mb-8">Every small action counts. Choose a mission today and earn rewards while making your community a better place.</p>

          {/* FILTER PILLS */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition shadow-sm ${
                  activeFilter === cat 
                  ? "bg-emerald-100 text-emerald-800 border-2 border-emerald-200" 
                  : "bg-white text-slate-500 border-2 border-slate-100 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* MISSION GRID */}
          <div className="grid grid-cols-3 gap-8">
            {filteredMissions.map((mission, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-md transition">
                <img src={mission.image} alt={mission.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-400 rounded-md uppercase tracking-wider flex items-center gap-1 border border-slate-100">
                       {mission.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-700 transition">{mission.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">{mission.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-bold text-[#22C55E] bg-[#EAF5EC] border border-[#DCFCE7] px-3 py-1.5 rounded-full">★ {mission.reward} XP</span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">{mission.difficulty}</span>
                  </div>

                  <Link 
                    to={`/mission/${mission.id}`} 
                    className="w-full bg-[#1E5631] text-white py-3 rounded-2xl font-bold hover:bg-emerald-800 transition text-center shadow-sm block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}