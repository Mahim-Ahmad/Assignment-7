import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friends/${friend.id}`}
      className="bg-white rounded-xl p-5 flex flex-col items-center text-center gap-2 border border-gray-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-brand-200"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <h3 className="font-semibold text-sm text-gray-900 line-clamp-1 mt-1">{friend.name}</h3>
      <p className="text-xs text-gray-400">{friend.days_since_contact}d ago</p>

      <div className="flex flex-wrap gap-1.5 justify-center mt-1">
        {friend.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-brand-50 text-brand-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-1.5">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}
