import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#002c53]/10 bg-[#f8fafb] dark:bg-[#191c1d]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full">
        <div className="mb-4 md:mb-0">
          <span className="font-black text-[#002c53] font-headline">
            ATMOSPHERIC EDITORIAL
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-4 md:mb-0">
          <Link
            href="#"
            className="font-['Manrope'] text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#48663e] underline transition-all"
          >
            Intellectual Property Board
          </Link>
          <Link
            href="#"
            className="font-['Manrope'] text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#48663e] underline transition-all"
          >
            Department of Meteorology
          </Link>
          <Link
            href="#"
            className="font-['Manrope'] text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#48663e] underline transition-all"
          >
            Emergency Protocols
          </Link>
        </div>
        <div className="text-center md:text-right">
          <p className="font-['Manrope'] text-[10px] sm:text-xs font-medium uppercase tracking-widest text-slate-500 md:text-slate-400">
            © 2024 Department of Environmental Science. IPB University. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
