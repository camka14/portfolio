const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function InteractiveHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 sm:px-6">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-50 focus:rounded-full focus:bg-lime-300 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-zinc-950/10 bg-[#f5f7ef]/78 px-4 shadow-[0_18px_60px_rgba(39,39,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/76"
      >
        <a
          href="#main-content"
          className="text-sm font-semibold text-zinc-950 transition hover:text-zinc-700 dark:text-white dark:hover:text-zinc-200"
        >
          <span className="sm:hidden">SR</span>
          <span className="hidden sm:inline">Samuel Razumovskiy</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-950/5 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
