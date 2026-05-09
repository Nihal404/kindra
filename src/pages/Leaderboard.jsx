// --- Mock Data based on the image ---
const topThree = [
  { rank: 2, name: "Yuvrani", xp: "8,450 XP", title: "SILVER HERO", img: "https://i.pravatar.cc/150?img=47", color: "text-purple-600 bg-purple-50" },
  { rank: 1, name: "Basayya", xp: "12,120 XP", title: "SUPREME HERO", img: "https://i.pravatar.cc/150?img=11", color: "text-emerald-600 bg-emerald-50", isCenter: true },
  { rank: 3, name: "Sahana", xp: "7,920 XP", title: "BRONZE HERO", img: "https://i.pravatar.cc/150?img=5", color: "text-orange-600 bg-orange-50" }
];

const rankings = [
  { rank: 4, initials: "BBN", name: "Buss Buss Nagya", xp: "7,105", missions: 142, level: 38, color: "bg-purple-100 text-purple-600" },
  { rank: 5, img: "https://i.pravatar.cc/150?img=12", name: "David Beck", xp: "6,840", missions: 131, level: 35 },
  { rank: 6, initials: "LW", name: "Lisa Wong", xp: "6,520", missions: 128, level: 32, color: "bg-orange-100 text-orange-600" },
  { rank: 7, img: "https://i.pravatar.cc/150?img=33", name: "Chloe Vance", xp: "6,210", missions: 115, level: 31 },
];

const weeklyChampions = [
  { title: "Nature Guard", user: "@green_soul", detail: "Most Trees Planted", stat: "42 Mission", icon: "🛡️" },
  { title: "Heart of Gold", user: "@kind_emma", detail: "Highest Impact Hours", stat: "112 Hours", icon: "❤️" },
  { title: "Meal Master", user: "@food_hero", detail: "Food Distributed", stat: "250 Meals", icon: "🍲" },
];

export default function Leaderboard() {
  return (
    <div className="flex min-h-screen bg-[#F8FAF9] font-sans text-slate-800">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#F8FAF9] flex flex-col justify-between p-6 border-r border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
              K
            </div>
            <h1 className="text-xl font-bold text-emerald-900">Kindra<br/><span className="text-xs text-slate-500 font-normal">Civic Hero</span></h1>
          </div>
          <nav className="space-y-2">
            {/* Linked to Home Page */}
            <a href="/home" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>📊</span> Dashboard
            </a>
            <a href="/missions" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>🎯</span> Missions
            </a>
            {/* Active State */}
            <a href="/leaderboard" className="flex items-center gap-3 px-4 py-3 bg-emerald-100 text-emerald-800 rounded-xl font-medium">
              <span>🏆</span> Leaderboard
            </a>
            <a href="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-medium transition">
              <span>👤</span> Profile
            </a>
          </nav>
        </div>
        <button className="w-full bg-[#1E5631] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-emerald-800 transition">
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
              placeholder="Search heroes..." 
              className="w-full bg-slate-100 rounded-full py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-emerald-200 text-sm"
            />
            <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-slate-600">🔔</button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-semibold text-sm">kartik bhadva</p>
                <p className="text-xs text-slate-500">Lvl 42</p>
              </div>
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-emerald-100" />
            </div>
          </div>
        </header>

        {/* PODIUM SECTION */}
        <div className="flex justify-center items-end gap-6 mb-10 h-64">
          {topThree.map((user, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 text-center relative flex flex-col items-center
                ${user.isCenter ? 'w-72 h-56 z-10 shadow-md scale-105' : 'w-64 h-48'}
              `}
            >
              {user.isCenter && (
                <div className="absolute -top-4 text-2xl drop-shadow-md">👑</div>
              )}
              <div className="relative mb-3">
                <img 
                  src={user.img} 
                  alt={user.name} 
                  className={`rounded-full object-cover border-4 ${user.isCenter ? 'w-24 h-24 border-emerald-100' : 'w-20 h-20 border-white shadow-sm'}`} 
                />
                <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white
                  ${user.rank === 1 ? 'bg-[#1E5631]' : user.rank === 2 ? 'bg-slate-400' : 'bg-orange-400'}
                `}>
                  {user.rank}
                </div>
              </div>
              <h3 className={`font-bold ${user.isCenter ? 'text-xl' : 'text-lg'}`}>{user.name}</h3>
              <p className="text-slate-500 text-sm font-medium mb-3">{user.xp}</p>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${user.color}`}>
                {user.title}
              </span>
            </div>
          ))}
        </div>

        {/* COMMUNITY RANKINGS */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Community Rankings</h2>
            <div className="flex bg-slate-100 rounded-full p-1">
              <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-full">ALL TIME</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-500">MONTHLY</button>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">User</div>
            <div className="col-span-2 text-right">XP</div>
            <div className="col-span-2 text-right">Missions</div>
            <div className="col-span-2 text-right">Level</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {rankings.map((user, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 items-center py-3 px-4 rounded-2xl hover:bg-slate-50 transition">
                <div className="col-span-1 font-semibold text-slate-500">{user.rank}</div>
                <div className="col-span-5 flex items-center gap-3">
                  {user.img ? (
                    <img src={user.img} alt={user.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${user.color}`}>
                      {user.initials}
                    </div>
                  )}
                  <span className="font-semibold text-sm">{user.name}</span>
                </div>
                <div className="col-span-2 text-right font-medium text-slate-600">{user.xp}</div>
                <div className="col-span-2 text-right font-medium text-slate-600">{user.missions}</div>
                <div className="col-span-2 flex justify-end">
                  <span className="w-7 h-7 bg-purple-50 text-purple-600 text-[10px] font-bold rounded-full flex items-center justify-center">
                    {user.level}
                  </span>
                </div>
              </div>
            ))}

            {/* Current User Row (Highlighted) */}
            <div className="grid grid-cols-12 gap-4 items-center py-3 px-4 rounded-2xl bg-emerald-50 border border-emerald-100 mt-2">
              <div className="col-span-1 font-bold text-emerald-600">12</div>
              <div className="col-span-5 flex items-center gap-3">
                <div className="relative">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Alex" className="w-8 h-8 rounded-full border border-emerald-200" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <span className="font-bold text-sm text-emerald-800">kartik bhadva (You)</span>
              </div>
              <div className="col-span-2 text-right font-bold text-emerald-700">5,430</div>
              <div className="col-span-2 text-right font-bold text-emerald-700">98</div>
              <div className="col-span-2 flex justify-end">
                <span className="w-7 h-7 bg-[#1E5631] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  42
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="text-xs font-bold text-slate-400 hover:text-slate-600 tracking-widest uppercase">
              View Full Rankings &rarr;
            </button>
          </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-80 bg-[#F8FAF9] p-8 border-l border-slate-200 flex flex-col">
        
        {/* Global Rank Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm mb-6 relative overflow-hidden">
          <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mb-1">Your Global Rank</p>
          <div className="flex items-end gap-2 mb-4">
            <h2 className="text-4xl font-black text-slate-800">#1,402</h2>
            <span className="text-emerald-500 text-sm font-bold flex items-center mb-1">
              &uarr; 14
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
            <div className="bg-[#1E5631] h-1.5 rounded-full" style={{ width: '88%' }}></div>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Top 12% of all Kindra Heroes</p>
          {/* Decorative watermark icon */}
          <div className="absolute top-4 right-4 text-6xl opacity-5">🏆</div>
        </div>

        {/* Weekly Champions */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm mb-6 flex-1">
          <h3 className="font-bold text-lg mb-4">Weekly<br/>Champions</h3>
          <div className="space-y-4">
            {weeklyChampions.map((champ, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-lg border border-slate-100">
                  {champ.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm leading-tight">{champ.title}</h4>
                    <span className="text-xs font-bold text-slate-400">{champ.stat}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-emerald-600 font-medium">{champ.user}</span>
                    <span className="text-[10px] text-slate-400">{champ.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Claim Reward Banner */}
        <div className="bg-[#1E5631] rounded-3xl p-6 text-white relative overflow-hidden">
          <h3 className="font-bold text-lg mb-2">Claim Reward</h3>
          <p className="text-emerald-100 text-xs mb-4 w-4/5 leading-relaxed">
            You've reached Level 42! Unlock your Master Hero badge now.
          </p>
          <button className="bg-white text-[#1E5631] text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wide hover:bg-slate-100 transition">
            Unwrap Now
          </button>
          <div className="absolute -bottom-4 -right-4 text-6xl opacity-20">
            🎁
          </div>
        </div>

      </aside>
    </div>
  );
}