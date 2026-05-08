import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Upload from "./pages/Upload";

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

      </Routes>

    </BrowserRouter>
  );
}