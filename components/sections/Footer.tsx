const cols = [
  {
    heading: "Products",
    links: [
      { label: "APIs", href: "/apis" },
      { label: "Datasets", href: "/datasets" },
      { label: "Watchers", href: "/watchers" },
      { label: "MCP Server", href: "/mcp-server" },
    ],
  },
  {
    heading: "Use cases",
    links: [
      { label: "AI SDR", href: "/use-cases/ai-sdr" },
      { label: "CRM enrichment", href: "/use-cases/crm-enrichment" },
      { label: "Recruiting", href: "/use-cases/recruiting" },
      { label: "Portfolio monitoring", href: "/use-cases/portfolio-monitoring" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "https://docs.crustdata.com" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logos/Crustdata.svg"
                alt=""
                width={36}
                height={32}
                style={{ width: "36px", height: "auto" }}
              />
              <span
                className="font-normal text-[24px] leading-[23.25px]"
                style={{ color: "#fafafa" }}
              >
                Crustdata
              </span>
            </div>
            <p
              className="font-normal text-[14px] leading-[21px] max-w-[280px]"
              style={{ color: "#a1a1aa" }}
            >
              The real-time company and people data layer for revenue teams
              and AI products.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.heading}>
              <h4
                className="font-medium text-[12px] leading-[15.5px] uppercase mb-4"
                style={{ color: "#71717a", letterSpacing: "1.2px" }}
              >
                {c.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-normal text-[14px] leading-[21px] transition-colors hover:text-[#fafafa]"
                      style={{ color: "#a1a1aa" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 font-normal text-[12px] leading-[18px]"
          style={{
            color: "#52525b",
            borderTop: "1px solid rgba(255, 255, 255, 0.07)",
            letterSpacing: "0.04em",
          }}
        >
          <span>© 2026 Crustdata Inc.</span>
          <span>SOC 2 Type II · GDPR · CCPA</span>
        </div>
      </div>
    </footer>
  );
}
