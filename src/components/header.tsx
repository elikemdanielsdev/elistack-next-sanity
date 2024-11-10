import Link from "next/link";

export function Header() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white p-6">
      <header className="container mx-auto flex items-center justify-between rounded-lg bg-white/80 p-6 shadow-md shadow-pink-50">
        <Link
          className="font-bold tracking-tight text-pink-700 md:text-xl"
          href="/"
        >
          Layer Caker
        </Link>
        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          <li>
            <Link
              className="transition-colors hover:text-pink-500"
              href="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="transition-colors hover:text-pink-500"
              href="/studio"
            >
              Sanity Studio
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
