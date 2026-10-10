import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-neutral-800">
      <nav className="flex items-center justify-between px-4 sm:px-8 h-16">
        <Link href="/" className="text-2xl font-black tracking-tight">
          <span className="text-red-600">REEL</span>
          <span className="text-neutral-100">TIME</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-red-400">
            Home
          </Link>
          <Link href="/browse" className="hover:text-red-400">
            Browse
          </Link>
        </div>
      </nav>
    </header>
  );
}
