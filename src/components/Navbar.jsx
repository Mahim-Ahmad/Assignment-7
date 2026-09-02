import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart2 } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/timeline", label: "Timeline", icon: Clock },
  { to: "/stats", label: "Stats", icon: BarChart2 },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <img src={logo} alt="KeenKeeper" className="h-6 w-auto" />

        <ul className="flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-700 text-white"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }`
                }
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
