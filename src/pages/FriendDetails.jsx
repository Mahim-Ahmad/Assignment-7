import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Pencil, Archive, Trash2, AlarmClockOff, ArrowLeft } from "lucide-react";
import friendsData from "../data/friends.json";
import StatusBadge from "../components/StatusBadge";
import { useTimeline } from "../context/TimelineContext";
import textIcon from "../assets/text.png";
import callIcon from "../assets/call.png";
import videoIcon from "../assets/video.png";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friendsData.find((f) => String(f.id) === id);
  const { addEntry } = useTimeline();

  if (!friend) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-lg font-semibold text-gray-900">Friend not found.</p>
        <Link to="/" className="text-brand-600 underline mt-2 inline-block">Back to Home</Link>
      </div>
    );
  }

  const handleCheckIn = (type, label) => {
    addEntry(type, friend);
    toast.success(`${label} logged with ${friend.name}!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-brand-700 hover:underline mb-6">
        <ArrowLeft size={15} /> Back
      </Link>

      <div className="grid md:grid-cols-[300px_1fr] gap-5">
        {/* Left column */}
        <div className="flex flex-col gap-5 animate-pop-in">
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center">
            <img src={friend.picture} alt={friend.name} className="w-16 h-16 rounded-full object-cover" />
            <h1 className="mt-3 text-base font-bold text-gray-900">{friend.name}</h1>

            <div className="mt-2.5"><StatusBadge status={friend.status} /></div>

            <div className="flex flex-wrap gap-1.5 justify-center mt-2">
              {friend.tags.slice(0, 1).map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-brand-50 text-brand-700">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 italic mt-4">&ldquo;{friend.bio}&rdquo;</p>
            <p className="text-xs text-gray-400 mt-2">Preferred: {friend.email}</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <button className="btn-press w-full flex items-center gap-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50 transition-colors">
              <AlarmClockOff size={15} /> Snooze 2 Weeks
            </button>
            <button className="btn-press w-full flex items-center gap-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50 transition-colors">
              <Archive size={15} /> Archive
            </button>
            <button className="btn-press w-full flex items-center gap-2.5 text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-red-50 transition-colors">
              <Trash2 size={15} /> Delete
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5 animate-fade-in-up" style={{ animationDelay: "0.08s" }}>
          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-2xl font-extrabold text-brand-800">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-2xl font-extrabold text-brand-800">{friend.goal}</p>
              <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
              <p className="text-lg font-extrabold text-brand-800">
                {new Date(friend.next_due_date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
              </p>
              <p className="text-xs text-gray-500 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship goal */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between">
            <div>
              <p className="font-bold text-brand-800 text-sm">Relationship Goal</p>
              <p className="text-sm text-gray-600 mt-1">
                Connect every <span className="font-bold text-gray-900">{friend.goal} days</span>
              </p>
            </div>
            <button className="btn-press flex items-center gap-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
              <Pencil size={12} /> Edit
            </button>
          </div>

          {/* Quick check-in */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="font-bold text-gray-900 text-sm mb-3">Quick Check-In</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleCheckIn("call", "Call")}
                className="btn-press flex flex-col items-center gap-2 py-4 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                <img src={callIcon} alt="" className="w-[18px] h-[18px] object-contain" /> Call
              </button>
              <button
                onClick={() => handleCheckIn("text", "Text")}
                className="btn-press flex flex-col items-center gap-2 py-4 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                <img src={textIcon} alt="" className="w-[18px] h-[18px] object-contain" /> Text
              </button>
              <button
                onClick={() => handleCheckIn("video", "Video")}
                className="btn-press flex flex-col items-center gap-2 py-4 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                <img src={videoIcon} alt="" className="w-[18px] h-[18px] object-contain" /> Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
