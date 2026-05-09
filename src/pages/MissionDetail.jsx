import { useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const missionDatabase = [
  {
    id: "feed-street-dogs",
    title: "Feed Street Dogs",
    category: "ANIMAL WELFARE",
    categoryColor: "bg-orange-100 text-orange-600",
    reward: 20,
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=1200",
    description: "Ensure our furry community members don't go hungry. Locate stray dogs in your neighborhood and provide them with safe, dog-friendly food and clean water.",
    steps: [
      "Procure safe, dry dog food or unseasoned cooked meat.",
      "Locate a stray dog in a safe area away from heavy traffic.",
      "Leave the food and a bowl of fresh water. Do not force interaction."
    ],
    proofRequirement: "A clear photo of the food and water bowl placed for the animal.",
    badge: "Compassionate Heart"
  },
  {
    id: "plant-a-tree",
    title: "Plant a Tree",
    category: "ENVIRONMENT",
    categoryColor: "bg-emerald-100 text-emerald-600",
    reward: 50,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    description: "Add to the green canopy in designated areas to help the environment.",
    steps: [
      "Procure a native sapling.",
      "Plant in an approved, viable location.",
      "Water the sapling immediately after planting."
    ],
    proofRequirement: "A clear photo of the newly planted sapling in the soil.",
    badge: "Green Thumb"
  },
  {
    id: "clean-local-park",
    title: "Clean Local Park",
    category: "CLEANLINESS",
    categoryColor: "bg-blue-100 text-blue-600",
    reward: 25,
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbea5?auto=format&fit=crop&q=80&w=1200",
    description: "Organize or join a local park cleanup group.",
    steps: [
      "Collect at least 1 small bag of trash.",
      "Separate recyclables from general waste.",
      "Dispose of the waste in official city bins."
    ],
    proofRequirement: "A photo of the collected trash bags next to an official disposal bin.",
    badge: "Cleanliness Champion"
  },
  {
    id: "donate-books",
    title: "Donate Books",
    category: "EDUCATION",
    categoryColor: "bg-orange-100 text-orange-600",
    reward: 50,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200",
    description: "Share the gift of knowledge with your neighborhood.",
    steps: [
      "Find 3-5 gently used books.",
      "Locate a donation center or drop-box.",
      "Drop off the books."
    ],
    proofRequirement: "Upload a photo of the books at the donation site.",
    badge: "Knowledge Sharer"
  }
];

export default function MissionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [caption, setCaption] = useState("");
  
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // --- NEW STATE FOR VALIDATION & SUCCESS MODAL ---
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const mission = missionDatabase.find((m) => m.id === id);

  if (!mission) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAF9]">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Mission not found! 🏜️</h2>
        <Link to="/home" className="text-emerald-600 font-bold hover:underline">&larr; Back to Dashboard</Link>
      </div>
    );
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // --- NEW FUNCTION TO SIMULATE AI VALIDATION ---
  const handleSubmitProof = () => {
    if (!selectedFile) {
      alert("Please upload an image for verification first!");
      return;
    }
    
    setIsVerifying(true);
    
    // Simulate AI checking the image for 2 seconds
    setTimeout(() => {
      setIsVerifying(false);
      setShowSuccess(true); // Pop the success modal!
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-[#F2F9F4] font-sans text-slate-800 relative">
      
      {/* ======================================================== */}
      {/* SUCCESS MODAL OVERLAY (Only shows when showSuccess is true) */}
      {/* ======================================================== */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/30 backdrop-blur-md transition-all">
          <div className="bg-white rounded-[2rem] w-full max-w-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            
            <div className="p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border-4 border-white shadow-sm">
                  ✓
                </div>
                <h2 className="text-4xl font-bold text-slate-800 mb-3">Mission Complete! 🎉</h2>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-100">
                  <span>🍃</span> {mission.title}
                </div>
              </div>

              {/* Reward Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="col-span-1 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <span className="text-emerald-600 text-xl mb-1">☆</span>
                  <span className="text-3xl font-black text-[#1E5631]">+{mission.reward}</span>
                  <span className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase">XP Earned</span>
                </div>
                
                <div className="col-span-2 bg-[#F8FAF9] border border-slate-100 rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl shrink-0">
                    🎖️
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{mission.badge}</h4>
                    <p className="text-xs text-slate-500 font-medium">New Badge Unlocked</p>
                  </div>
                </div>
              </div>

              {/* Progress & Stats Card */}
              <div className="bg-[#F8FAF9] border border-slate-100 rounded-2xl p-6 mb-8">
                <div className="flex justify-between text-xs font-bold text-slate-800 mb-3">
                  <span>Weekly Goal Progress</span>
                  <span className="text-emerald-600">150 / 200 XP</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
                  <div className="bg-[#1E5631] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex justify-between items-center pt-5 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <span className="text-slate-400">📊</span> Impact: High
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <span className="text-slate-400">🔥</span> Streak: 8 Days
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <span className="text-slate-400">🏆</span> Rank: #139
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 border-b border-slate-100 pb-8 mb-6">
                <button 
                  onClick={() => navigate('/missions')}
                  className="px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition text-sm"
                >
                  Do Another Mission
                </button>
                <button 
                  onClick={() => navigate('/profile')}
                  className="px-6 py-3 rounded-xl bg-[#1E5631] text-white font-bold hover:bg-emerald-800 transition text-sm flex items-center gap-2"
                >
                  View Profile &rarr;
                </button>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs text-slate-400 font-medium px-2">
                <span className="italic">"Every small act builds a beautiful world."</span>
                <button className="flex items-center gap-1 hover:text-emerald-600 transition">
                  🔗 Share your deed
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* STANDARD PAGE CONTENT (Sidebar, Main Content)            */}
      {/* ======================================================== */}
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white flex flex-col justify-between p-6 shadow-sm z-10 border-r border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg">K</div>
            <h1 className="text-xl font-bold text-emerald-900 leading-tight">Kindra<br/><span className="text-xs text-slate-500 font-normal tracking-wide">Civic Hero</span></h1>
          </div>
          <nav className="space-y-2">
            <Link to="/home" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-medium transition">
              <span>📊</span> Dashboard
            </Link>
            <Link to="/missions" className="flex items-center gap-3 px-4 py-3 bg-[#22C55E] text-white rounded-xl font-medium shadow-md shadow-emerald-200">
              <span>🎯</span> Missions
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

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 w-1/2">
            <div className="relative w-full max-w-md">
              <input type="text" placeholder="Search missions, heroes..." className="w-full bg-white rounded-full py-2.5 pl-10 pr-4 outline-none border border-slate-100 focus:ring-2 focus:ring-emerald-200 text-sm shadow-sm" />
              <span className="absolute left-4 top-2.5 text-slate-400">🔍</span>
            </div>
            <div className="text-xs text-slate-400 font-medium flex gap-2 ml-2">
              <Link to="/missions" className="hover:text-emerald-600">Missions</Link>
              <span>/</span>
              <span className="text-slate-600">{mission.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-red-500 transition">🔔</button>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full border-2 border-emerald-100" />
          </div>
        </header>

        <div className="max-w-6xl mx-auto flex gap-6">
          
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="relative h-64 w-full">
                <img src={mission.image} alt={mission.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`${mission.categoryColor} text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                    {mission.category}
                  </span>
                  <span className="bg-[#22C55E] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    ★ +{mission.reward} XP
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-3">{mission.title}</h1>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{mission.description}</p>

                <h3 className="text-lg font-bold text-slate-800 mb-4">Completion Steps</h3>
                <div className="space-y-4 mb-8">
                  {mission.steps?.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#EAF5EC] text-[#22C55E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#c1e6cc]">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-slate-600">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-5 flex gap-4">
                  <div className="text-[#22C55E] text-xl mt-1">📄</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1">Proof Requirements</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{mission.proofRequirement}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="text-[#22C55E]">☁️</span> Upload Proof
              </h2>

              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/jpeg, image/png, image/heic"
              />

              <div 
                onClick={() => fileInputRef.current.click()} 
                className="border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-[#F9FAFB] hover:bg-slate-50 hover:border-emerald-300 transition cursor-pointer mb-6"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-500 mb-3 text-xl">
                  {selectedFile ? "✅" : "🖼️"}
                </div>
                
                {selectedFile ? (
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#22C55E] mb-1">File Attached Successfully!</p>
                    <p className="text-xs text-slate-500">{selectedFile.name}</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-700">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-400 mt-1">JPG, PNG or HEIC (max. 10MB)</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2">Location *</label>
                  <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white focus-within:border-emerald-400 transition-colors">
                    <span className="text-slate-400 mr-2 text-sm">📍</span>
                    <input type="text" placeholder="e.g. Central Park West" value={location} onChange={e=>setLocation(e.target.value)} className="w-full text-sm outline-none bg-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2">Date & Time</label>
                  <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-white focus-within:border-emerald-400 transition-colors">
                    <span className="text-slate-400 mr-2 text-sm">📅</span>
                    <input type="text" placeholder="mm/dd/yyyy --:-- --" value={date} onChange={e=>setDate(e.target.value)} className="w-full text-sm outline-none bg-transparent" />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-500 mb-2">Caption (Optional)</label>
                <textarea rows="3" placeholder="Add any notes about the mission..." value={caption} onChange={e=>setCaption(e.target.value)} className="w-full border border-slate-200 rounded-xl p-3 text-sm outline-none focus:border-emerald-400 transition-colors resize-none"></textarea>
              </div>

              {/* --- UPDATED SUBMIT BUTTON --- */}
              <button 
                onClick={handleSubmitProof}
                disabled={isVerifying}
                className="w-full bg-[#22C55E] hover:bg-[#1ea34d] disabled:bg-emerald-300 text-white font-bold py-3.5 rounded-xl transition shadow-sm shadow-emerald-200 flex justify-center items-center gap-2"
              >
                {isVerifying ? "Verifying with AI..." : "Submit Proof →"}
              </button>
            </div>
          </div>

          <div className="w-[320px] flex flex-col gap-6">
            <div className="bg-[#EFE9FA] rounded-3xl p-6 shadow-sm border border-[#E4D5F8]">
              <h3 className="text-[#5B21B6] font-bold flex items-center gap-2 mb-4">
                <span className="bg-[#DDD0F4] w-6 h-6 rounded-full flex items-center justify-center text-xs">⭐</span> Your Reward
              </h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-black text-[#4C1D95]">{mission.reward}</span>
                <span className="text-sm font-bold text-[#6D28D9] pb-1">XP Points</span>
              </div>
              <p className="text-xs text-[#7C3AED] font-medium mb-6">Upon successful verification</p>
              <div className="bg-[#E4D5F8] h-[1px] w-full mb-4"></div>
              <div className="flex justify-between text-[10px] font-bold text-[#6D28D9] uppercase tracking-wide mb-2">
                <span>Current Level Progress</span>
                <span>840 / 1000 XP</span>
              </div>
              <div className="w-full bg-[#DDD0F4] rounded-full h-2">
                <div className="bg-[#22C55E] h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-5">Top Contributors</h3>
              <div className="space-y-5">
                {[ { name: "Alex Mercer", count: "45 Missions", img: "https://i.pravatar.cc/150?img=12" }, { name: "Sahana", count: "32 Missions", img: "https://i.pravatar.cc/150?img=5" }, { name: "David Chen", count: "18 Missions", img: "https://i.pravatar.cc/150?img=33" } ].map((user, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold text-slate-800 leading-tight mb-0.5">{user.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{user.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-slate-800">Your Progress</h3>
                <span className="text-emerald-500 text-lg">📈</span>
              </div>
              <div className="flex items-center gap-4 border border-slate-100 rounded-2xl p-3 bg-slate-50">
                <div className="w-10 h-10 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-lg shadow-inner">🌍</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Rank</p>
                  <p className="text-xl font-black text-slate-800">#4,281</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}