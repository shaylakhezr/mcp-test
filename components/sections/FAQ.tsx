"use client";

import { useState, type ReactNode } from "react";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Which MCP clients does the server support?",
    a: (
      <p>
        Claude.ai, Claude Code, Cursor, and any client that speaks the MCP
        protocol over streamable HTTP. The endpoint is{" "}
        <code style={{ color: "#8681f7" }}>mcp.crustdata.com/mcp</code>.
      </p>
    ),
  },
  {
    q: "How does authentication work?",
    a: (
      <p>
        OAuth 2.1 with Dynamic Client Registration. Your API key is never
        stored on the MCP server; it is passed through to the Crustdata API on
        each request and is visible only to the client you add it to.
      </p>
    ),
  },
  {
    q: "What counts as a credit?",
    a: (
      <p>
        Discovery, enrichment, jobs, posts, and web tools each consume 1 to 5
        credits depending on the call. Identify, autocomplete, simulate, and
        list tools are free. Use{" "}
        <code style={{ color: "#8681f7" }}>crustdata_credits_check</code> at
        any time.
      </p>
    ),
  },
  {
    q: "Is enrichment on MCP live or cached?",
    a: (
      <p>
        MCP enrichment is in-database and cached for speed. For live, real-time
        enrichment (the kind that runs a brand-new lookup against the source),
        use the Crustdata REST API directly with the{" "}
        <code style={{ color: "#8681f7" }}>enrich_realtime=true</code> flag.
      </p>
    ),
  },
  {
    q: "Does MCP have access to the full tool surface?",
    a: (
      <p>
        Yes. All 23 tools across company, people, jobs, posts, web, and
        watchers are available. Every tool carries MCP safety annotations
        (readOnlyHint, destructiveHint, openWorldHint) so the client can
        confirm before sensitive calls.
      </p>
    ),
  },
  {
    q: "How do I test without burning credits?",
    a: (
      <p>
        Identify, autocomplete, and watcher simulation are free. Start with{" "}
        <code style={{ color: "#8681f7" }}>crustdata_company_identify</code>{" "}
        and{" "}
        <code style={{ color: "#8681f7" }}>crustdata_watcher_simulate</code> to
        validate the shape of the data before running paid calls.
      </p>
    ),
  },
  {
    q: "Can I restrict which tools my team can call?",
    a: (
      <p>
        Yes. The MCP client can scope which tools are exposed, and API-key
        level permissions limit what any single user can invoke. Admin and
        audit controls are available on team plans.
      </p>
    ),
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[120px]">
        <header className="flex flex-col items-center gap-[14px] w-full pt-[6px] mb-[56px]">
          <div
            className="font-semibold text-[14px] leading-[17px] uppercase text-center"
            style={{ color: "#8681f7", letterSpacing: "1.54px" }}
          >
            FAQ
          </div>
          <h2
            className="font-semibold text-[32px] sm:text-[40px] text-center m-0 pt-[6px]"
            style={{
              color: "#fafafa",
              letterSpacing: "-0.6px",
              lineHeight: "1.05",
            }}
          >
            Questions we hear from builders.
          </h2>
        </header>

        <ul
          className="flex flex-col"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.07)" }}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={i}
                style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.07)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-medium text-[16px] leading-[24px]"
                    style={{ color: "#fafafa" }}
                  >
                    {f.q}
                  </span>
                  <span
                    className="font-mono text-[20px] shrink-0 transition-transform"
                    style={{
                      color: "#71717a",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-200 ease-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="pb-5 font-normal text-[15px] leading-[24px]"
                    style={{ color: "#a1a1aa" }}
                  >
                    {f.a}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
