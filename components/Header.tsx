"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "font-headline tracking-tight headline-sm uppercase text-white border-b-2 border-[#ff8e63] pb-1 transition-colors";
    }
    return "font-headline tracking-tight headline-sm uppercase text-slate-300 hover:text-white hover:bg-white/10 transition-colors";
  };

  return (
    <nav className="w-full top-0 sticky bg-[#002c53] dark:bg-[#001a33] z-50">
      <div className="flex justify-between items-center w-full px-12 py-6">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold text-white tracking-widest font-headline uppercase">
            Atmospheric Editorial
          </span>
          <div className="hidden md:flex gap-8">
            <Link href="/" className={getLinkClass("/")}>
              Research
            </Link>
            <Link href="/risk-map" className={getLinkClass("/risk-map")}>
              Risk Map
            </Link>
            <Link href="/mitigation" className={getLinkClass("/mitigation")}>
              Mitigation
            </Link>
            <Link href="/archive" className={getLinkClass("/archive")}>
              Archive
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#ff8e63] text-[#002c53] px-6 py-2 font-headline font-bold uppercase tracking-wider text-sm hover:scale-95 duration-150 transition-transform">
            Alerts
          </button>
          <span className="material-symbols-outlined text-white cursor-pointer hover:bg-white/10 p-2 rounded-full transition-colors">
            menu
          </span>
        </div>
      </div>
    </nav>
  );
}
