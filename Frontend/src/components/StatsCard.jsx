export default function StatsCard({ title, value, color }) {
  return (
    <div className={`bg-white p-5 rounded shadow border-l-4 ${color}`}>
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}