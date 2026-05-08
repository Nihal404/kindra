import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24">
      
      <h1 className="text-4xl font-bold text-green-400">
        Your Profile
      </h1>

      <div className="mt-8 bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
        
        <div className="w-24 h-24 rounded-full bg-green-500"></div>

        <h2 className="text-3xl font-bold mt-4">
          Nigam
        </h2>

        <p className="text-green-400 mt-2">
          250 XP
        </p>

        <p className="mt-2">
          🔥 7 Day Streak
        </p>

        <div className="mt-6">
          <div className="w-full bg-zinc-800 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-2/3"></div>
          </div>

          <p className="mt-2 text-zinc-400">
            Level 3 Citizen Hero
          </p>
        </div>
      </div>

      <Navbar />
    </div>
  );
}