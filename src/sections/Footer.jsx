import Github from "../assests/Github";
import LinkedIn from "../assests/LinkedIn";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-700 py-6 text-gray-400 text-sm flex flex-col items-center gap-3">
      {/* Email */}
      <a
        href="mailto:mohamednj2013@gmail.com"
        className="hover:text-white transition-colors"
      >
        mohamednj2013@gmail.com
      </a>

      {/* Socials */}
      <div className="flex gap-6">
        <a
          href="https://github.com/yami201"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors text-xl"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-nejjar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors text-xl"
        >
          <LinkedIn />
        </a>
      </div>
      
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} Mohammed Nejjar. All rights reserved.
      </p>
    </footer>
  );
}
