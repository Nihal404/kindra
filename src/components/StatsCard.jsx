export default function StatsCard({ title, value }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl">
      <p className="text-zinc-400">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-green-400 mt-2">
        {value}
      </h2>
    </div>
  );
}