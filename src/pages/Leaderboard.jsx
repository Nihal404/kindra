import Navbar from "../components/Navbar";

const users = [
  { name: "Aarav", xp: 500 },
  { name: "Nigam", xp: 250 },
  { name: "Riya", xp: 200 },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24">
      
      <h1 className="text-4xl font-bold text-green-400">
        Leaderboard
      </h1>

      <div className="mt-8 grid gap-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl flex justify-between"
          >
            <h2 className="text-2xl font-bold">
              #{index + 1} {user.name}
            </h2>

            <p className="text-green-400">
              {user.xp} XP
            </p>
          </div>
        ))}
      </div>

      <Navbar />
    </div>
  );
}