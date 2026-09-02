import { useMemo, useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";
import { useTimeline } from "../context/TimelineContext";
import textIcon from "../assets/text.png";
import callIcon from "../assets/call.png";
import videoIcon from "../assets/video.png";

const typeMeta = {
  call: { imgIcon: callIcon, label: "Call", color: "text-gray-700" },
  text: { imgIcon: textIcon, label: "Text", color: "text-gray-700" },
  video: { imgIcon: videoIcon, label: "Video", color: "text-gray-700" },
  meetup: { icon: Briefcase, label: "Meetup", color: "text-amber-500" },
};

const filters = [
  { key: "all", label: "All types" },
  { key: "call", label: "Call" },
  { key: "text", label: "Text" },
  { key: "video", label: "Video" },
  { key: "meetup", label: "Meetup" },
];

export default function Timeline() {
  const { entries } = useTimeline();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (activeFilter === "all") return sorted;
    return sorted.filter((e) => e.type === activeFilter);
  }, [entries, activeFilter]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-extrabold text-gray-900 animate-fade-in-up">Timeline</h1>

      <div className="relative mt-5 max-w-xs animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-3.5 pr-9 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-200 cursor-pointer"
        >
          {filters.map((f) => (
            <option key={f.key} value={f.key}>
              {f.key === "all" ? "Filter timeline" : f.label}
            </option>
          ))}
        </select>
        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>

      <div className="mt-5 flex flex-col gap-2.5 stagger">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-400 py-16 text-sm">No interactions yet.</div>
        ) : (
          filtered.map((entry) => {
            const meta = typeMeta[entry.type];
            const Icon = meta.icon;
            return (
              <div key={entry.id} className="bg-white rounded-lg border border-gray-200 px-4 py-3.5 flex items-center gap-3.5 transition-colors hover:bg-gray-50">
                <div className={`shrink-0 ${meta.color}`}>
                  {Icon ? <Icon size={17} /> : <img src={meta.imgIcon} alt="" className="w-[17px] h-[17px] object-contain" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">{meta.label}</span>{" "}
                    <span className="text-gray-500">with {entry.friendName}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(entry.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
