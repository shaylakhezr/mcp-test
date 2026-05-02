import { Button } from "@/components/ui/button";

const links = [
  { label: "Products", href: "/products" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Docs", href: "https://docs.crustdata.com" },
  { label: "Pricing", href: "/pricing" },
];

export function Nav() {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[960px] flex items-center justify-between gap-4 px-4 sm:px-5 py-2.5 bg-card border border-border rounded-[14px]"
    >
      <a
        href="/"
        className="flex items-center gap-2.5 font-semibold text-[15px] text-foreground shrink-0"
      >
        <span
          className="w-[22px] h-[22px] rounded-md"
          style={{ background: "var(--purple)" }}
        />
        <span>Crustdata</span>
      </a>

      <ul className="hidden md:flex items-center gap-7 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-foreground"
              style={{ color: "var(--text-2)" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <Button
        size="sm"
        className="rounded-full px-4"
        nativeButton={false}
        render={<a href="/demo" />}
      >
        Book demo
      </Button>
    </nav>
  );
}
