import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Upload from "./pages/Upload";
import Missions from "./pages/Missions";
import MissionDetail from "./pages/MissionDetail";
import Rewards from "./pages/Rewards"; // 1. IMPORT THE NEW FILE

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/mission/:id" element={<MissionDetail />} /> 
        
        {/* 2. ADD THE ROUTE */}
        <Route path="/rewards" element={<Rewards />} /> 
      </Routes>
    </BrowserRouter>
  );
}