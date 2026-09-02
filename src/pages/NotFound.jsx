import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-6 py-24 text-center">
      <Ghost size={48} className="mx-auto text-brand-300" />
      <h1 className="text-3xl font-extrabold text-brand-900 mt-4">404</h1>
      <p className="text-gray-500 mt-2">This page wandered off and lost touch. Just like you shouldn't with your friends!</p>
      <Link
        to="/"
        className="inline-block mt-6 bg-brand-700 hover:bg-brand-800 text-white font-semibold px-5 py-2.5 rounded-full transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
