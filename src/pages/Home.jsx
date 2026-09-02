import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import friendsData from "../data/friends.json";
import FriendCard from "../components/FriendCard";
import SummaryCard from "../components/SummaryCard";
import { useTimeline } from "../context/TimelineContext";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { entries } = useTimeline();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const summary = useMemo(() => {
    const total = friends.length;
    const onTrack = friends.filter((f) => f.status === "on-track").length;
    const needAttention = friends.filter((f) => f.status !== "on-track").length;
    const now = new Date();
    const interactionsThisMonth = entries.filter((e) => {
      const d = new Date(e.date);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
    return { total, onTrack, needAttention, interactionsThisMonth };
  }, [friends, entries]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Banner */}
      <section className="text-center max-w-xl mx-auto animate-fade-in-up">
        <h1 className="text-3xl sm:text-[2.25rem] font-extrabold text-gray-900 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="btn-press mt-6 inline-flex items-center gap-1.5 bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          <Plus size={16} />
          Add a Friend
        </button>
      </section>

      {/* Summary cards */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 stagger">
        <SummaryCard label="Total Friends" value={summary.total} />
        <SummaryCard label="On Track" value={summary.onTrack} />
        <SummaryCard label="Need Attention" value={summary.needAttention} />
        <SummaryCard label="Interactions This Month" value={summary.interactionsThisMonth} />
      </section>

      <hr className="border-gray-200 mt-10" />

      {/* Friends grid */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Your Friends</h2>
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20">
            <div className="spinner" />
            <p className="text-sm text-gray-400">Loading friends...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 stagger">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
