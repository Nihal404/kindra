import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 flex justify-around p-4 text-white">
      <Link to="/home">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}