import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

export default function MissionCard({
  title,
  reward,
  difficulty,
  icon,
}) {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl"
    >

      <h2 className="text-4xl font-bold flex items-center gap-3">

        <span>{icon}</span>

        {title}

      </h2>

      <p className="text-zinc-400 mt-4 text-xl">
        Difficulty: {difficulty}
      </p>

      <p className="text-green-400 mt-4 text-3xl font-bold">
        +{reward} XP
      </p>

      <button
        onClick={() =>
          navigate("/upload", {
            state: {
              mission: title,
            },
          })
        }
        className="mt-8 w-full bg-green-500 hover:bg-green-400 transition text-black py-5 rounded-2xl font-bold text-xl"
      >

        Complete Mission

      </button>

    </motion.div>
  );
}