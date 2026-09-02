import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import logoXl from "../assets/logo-xl.png";

export default function Footer() {
  return (
    <footer className="bg-brand-700 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-6 flex flex-col items-center text-center">
        <img src={logoXl} alt="KeenKeeper" className="h-9 sm:h-10 w-auto" />
        <p className="text-sm text-brand-100/80 max-w-md mt-3">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="text-xs font-semibold tracking-wide text-brand-200 mt-8 uppercase">Social Links</p>
        <div className="flex items-center gap-3 mt-3">
          <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
            <img src={instagramIcon} alt="Instagram" className="w-4 h-4 object-contain" />
          </a>
          <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
            <img src={facebookIcon} alt="Facebook" className="w-4 h-4 object-contain" />
          </a>
          <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
            <img src={twitterIcon} alt="Twitter" className="w-4 h-4 object-contain" />
          </a>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 mt-10 pt-5 text-xs text-brand-200/70">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
