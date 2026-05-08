import React from "react";
import { Link } from "react-router-dom";

// --- Mock Data ---
const badges = [
  { id: 1, title: "Green Soul", subtitle: "SUSTAINABILITY PRO", icon: "🌲", bg: "bg-emerald-100", active: true },
  { id: 2, title: "Animal Ally", subtitle: "RESCUE LEGEND", icon: "🐾", bg: "bg-purple-100", active: true },
  { id: 3, title: "Humanitarian", subtitle: "COMMUNITY PILLAR", icon: "🤝", bg: "bg-orange-100", active: true },
  { id: 4, title: "Clean Hero", subtitle: "NEIGHBORHOOD GUARD", icon: "🗑️", bg: "bg-slate-100", active: false },
  { id: 5, title: "Water Saver", subtitle: "CONSERVATIONIST", icon: "💧", bg: "bg-slate-100", active: false },
];

const activities = [
  { id: 1, title: "Planted a Tree", location: "Central Park Initiative", time: "2 hours ago", xp: "+50 XP", icon: "🌱", iconBg: "bg-emerald-50 text-emerald-600" },
  { id: 2, title: "Fed Street Dogs", location: "Harbor District", time: "Yesterday", xp: "+30 XP", icon: "🐕", iconBg: "bg-purple-50 text-purple-600" },
  { id: 3, title: "Beach Cleanup", location: "North Shore", time: "3 days ago", xp: "+120 XP", icon: "🏖️", iconBg: "bg-orange-50 text-orange-600" },
];

const checklist = [
  { id: 1, task: "Verify Phone Number", done: true },
  { id: 2, task: "Link Social Impact", done: true },
  { id: 3, task: "Complete 50 Missions", done: false },
];

export default function Profile() {
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
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
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
            {/* Active State */}
            <Link to="/profile" className="flex items-center gap-3 px-4 py-3 bg-emerald-100 text-emerald-800 rounded-xl font-medium">
              <span>👤</span> Profile
            </Link>
          </nav>
        </div>
        <button className="w-full bg-[#1E5631] text-white py-3 rounded-xl font-medium hover:bg-emerald-800 transition shadow-sm flex justify-center items-center gap-2">
          <span>+</span> New Mission
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* HEADER */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <input type="text" placeholder="Search missions, heroes..." className="w-full bg-slate-100 rounded-full py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-emerald-200 text-sm" />
            <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-slate-600">🔔</button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold text-sm">Alex Rivero</p>
                <p className="text-xs text-slate-500">Lv. 2 Helper</p>
              </div>
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-emerald-100" />
            </div>
          </div>
        </header>

        {/* TOP PROFILE CARD */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img src="https://i.pravatar.cc/150?img=11" alt="Alex Rivero" className="w-24 h-24 rounded-full border-4 border-emerald-50 object-cover" />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                  ✓
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">Alex<br/>Rivero</h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-emerald-600 font-semibold text-sm">Level 2 - Helper</span>
                  <span className="text-[10px] font-bold bg-orange-50 text-orange-600 px-2 py-1 rounded-md uppercase tracking-wider">🔥 7 Day Streak</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 border-2 border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
                Edit Profile
              </button>
              <button className="px-4 py-2 border-2 border-slate-200 rounded-full text-sm font-semibold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition">
                <span>👤+</span> Referrals
              </button>
              <button className="px-5 py-2 bg-[#1E5631] text-white rounded-full text-sm font-semibold hover:bg-emerald-800 transition">
                Share Impact
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-slate-500">XP Progress</span>
              <span className="text-slate-800">1,240 <span className="text-slate-400 font-medium">/ 2,000 XP</span></span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '62%' }}></div>
            </div>
          </div>
        </div>

        {/* 3 STATS CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm border border-slate-100">
            <span className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 text-xl mb-3">🍃</span>
            <h3 className="text-3xl font-black text-slate-800 mb-1">142</h3>
            <p className="text-sm font-medium text-slate-500">Total Impact Created</p>
          </div>
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm border border-slate-100">
            <span className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 text-xl mb-3">✓</span>
            <h3 className="text-3xl font-black text-slate-800 mb-1">24</h3>
            <p className="text-sm font-medium text-slate-500">Missions Completed</p>
          </div>
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-sm border border-slate-100">
            <span className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 text-xl mb-3">📈</span>
            <h3 className="text-3xl font-black text-slate-800 mb-1">Top 5%</h3>
            <p className="text-sm font-medium text-slate-500">Weekly Rank</p>
          </div>
        </div>

        {/* BOTTOM SECTION: BADGES, ACTIVITY & CHECKLIST */}
        <div className="flex gap-8">
          
          <div className="flex-1">
            {/* BADGES */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Achievements & Badges</h3>
                <button className="text-sm font-bold text-emerald-600 hover:underline">View All</button>
              </div>
              <div className="flex gap-6">
                {badges.map((badge) => (
                  <div key={badge.id} className={`flex flex-col items-center text-center w-24 ${!badge.active && 'opacity-40 grayscale'}`}>
                    <div className={`w-16 h-16 ${badge.bg} rounded-full flex items-center justify-center text-2xl mb-3 relative shadow-sm`}>
                      {badge.icon}
                      {badge.active && (
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                          <div className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center text-[10px] text-slate-500">✓</div>
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold text-xs text-slate-800 leading-tight mb-1">{badge.title}</h4>
                    <p className="text-[8px] font-bold text-slate-400 tracking-wider uppercase">{badge.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RECENT ACTIVITY */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${activity.iconBg}`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-slate-800">{activity.title}</h4>
                      <p className="text-xs text-slate-500">{activity.location} • {activity.time}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-sm text-emerald-600">{activity.xp}</span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Success</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: COMPLETE PROFILE WIDGET */}
          <div className="w-80">
            <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 sticky top-8">
              <h3 className="font-bold text-slate-800 mb-2">Complete Your Profile</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Unlock "Impact Leader" status by completing your verification.
              </p>
              
              <div className="space-y-4 mb-8">
                {checklist.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border-2 transition-colors ${
                      item.done 
                      ? 'bg-emerald-500 border-emerald-500 text-white' 
                      : 'border-slate-300 text-transparent'
                    }`}>
                      ✓
                    </div>
                    <span className={`text-sm font-medium ${item.done ? 'text-slate-800' : 'text-slate-500'}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-emerald-800 border border-emerald-200 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-emerald-50 transition">
                Continue Progress
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}