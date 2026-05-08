import { useState } from "react";

import Navbar from "../components/Navbar";
import MissionCard from "../components/MissionCard";
import RewardPopup from "../components/RewardPopup";
import StatsCard from "../components/StatsCard";

const missions = [
  {
    title: "Feed Street Dogs",
    reward: 10,
    difficulty: "Easy",
    icon: "🐕",
  },
  {
    title: "Plant a Tree",
    reward: 25,
    difficulty: "Medium",
    icon: "🌱",
  },
  {
    title: "Clean Public Area",
    reward: 50,
    difficulty: "Hard",
    icon: "🧹",
  },
];

export default function Home() {
  const [xp, setXp] = useState(250);

  const [showReward, setShowReward] = useState(false);

  const [rewardAmount, setRewardAmount] = useState(0);

  const completeMission = (reward) => {
    setXp(xp + reward);

    setRewardAmount(reward);

    setShowReward(true);

    setTimeout(() => {
      setShowReward(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24">

      {showReward && (
        <RewardPopup reward={rewardAmount} />
      )}

      <h1 className="text-5xl font-bold text-green-400">
        Kindra
      </h1>

      <p className="text-zinc-400 mt-2">
        Complete missions. Earn XP. Help society.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">
        
        <StatsCard title="Your XP" value={xp} />

        <StatsCard title="🔥 Streak" value="7 Days" />

      </div>

      <h2 className="text-3xl font-bold mt-10">
        Daily Missions
      </h2>

      <div className="grid gap-5 mt-6">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            reward={mission.reward}
            difficulty={mission.difficulty}
            icon={mission.icon}
            onComplete={() =>
              completeMission(mission.reward)
            }
          />
        ))}
      </div>

      <Navbar />
    </div>
  );
}