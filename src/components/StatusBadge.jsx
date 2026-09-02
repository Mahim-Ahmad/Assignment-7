const styles = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-amber-500 text-white",
  "on-track": "bg-brand-700 text-white",
};

const labels = {
  overdue: "Overdue",
  "almost due": "Almost Due",
  "on-track": "On-Track",
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${styles[status] ?? "bg-gray-400 text-white"}`}>
      {labels[status] ?? status}
    </span>
  );
}
