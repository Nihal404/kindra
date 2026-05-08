import { motion } from "framer-motion";

export default function RewardPopup({ reward }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed top-10 right-10 bg-green-500 text-black px-6 py-4 rounded-2xl font-bold shadow-2xl"
    >
      🎉 +{reward} XP Earned
    </motion.div>
  );
}