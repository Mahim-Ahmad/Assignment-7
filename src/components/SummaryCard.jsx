export default function SummaryCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <p className="text-2xl font-extrabold text-brand-800 leading-none">{value}</p>
      <p className="text-xs text-gray-500 mt-2">{label}</p>
    </div>
  );
}
