"use client";

import { ArrowUpRight } from "lucide-react";
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
];

const llms = [
  {
    name: "ASK CLAUDE",
    href: "https://claude.ai/new?q=Tell%20me%20about%20Crustdata%20MCP%20server",
    logo: "/logos/Claude.svg",
    invert: false,
  },
  {
    name: "ASK CHATGPT",
    href: "https://chatgpt.com/?q=Tell%20me%20about%20Crustdata%20MCP%20server",
    logo: "/logos/ChatGPT.svg",
    invert: true,
  },
  {
    name: "ASK PERPLEXITY",
    href: "https://www.perplexity.ai/search?q=Tell%20me%20about%20Crustdata%20MCP%20server",
    logo: "/logos/perplexity.webp",
    invert: false,
  },
  {
    name: "ASK GEMINI",
    href: "https://gemini.google.com/app?q=Tell%20me%20about%20Crustdata%20MCP%20server",
    logo: "/logos/Google_Gemini_icon_2025.svg.png",
    invert: false,
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[64px] md:py-[80px]">
        <header className="flex flex-col items-center gap-[14px] w-full pt-[6px] mb-[80px]">
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
                  className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors cursor-pointer"
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

        <div
          className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-10 md:gap-16"
          style={{ marginTop: "120px" }}
        >
          <div
            className="flex flex-col w-full md:w-[400px] shrink-0"
            style={{ gap: "14px" }}
          >
            <div
              className="font-semibold text-[14px] uppercase"
              style={{
                color: "#8681f7",
                letterSpacing: "1.54px",
                lineHeight: "17px",
              }}
            >
              STILL WONDERING?
            </div>
            <h3
              className="font-semibold text-[28px] sm:text-[32px] m-0"
              style={{
                color: "#fafafa",
                letterSpacing: "-0.4px",
                lineHeight: "1.1",
              }}
            >
              Ask your favorite LLM about Crustdata MCP.
            </h3>
            <p
              className="font-normal text-[16px] m-0"
              style={{ color: "#a1a1aa", lineHeight: "24px" }}
            >
              See what each model has to say, then make an informed decision.
            </p>
          </div>

          <div
            className="flex flex-col w-full md:w-auto"
            style={{ width: "100%", maxWidth: "440px" }}
          >
            <div className="grid grid-cols-2 gap-3 w-full flex-1 auto-rows-fr">
              {llms.map((llm) => (
                <a
                  key={llm.name}
                  href={llm.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[8px] block h-full"
                  style={{
                    padding: "1px",
                    minHeight: "72px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)",
                  }}
                >
                  <span
                    className="flex items-center justify-between gap-2 rounded-[7px] px-[16px] py-[12px] w-full h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #101010 0%, #000 100%)",
                    }}
                  >
                    <span className="flex items-center gap-2.5">
                      <img
                        src={llm.logo}
                        alt=""
                        width={24}
                        height={24}
                        style={{
                          width: "24px",
                          height: "24px",
                          flexShrink: 0,
                          objectFit: "contain",
                          filter: llm.invert ? "invert(1)" : undefined,
                        }}
                      />
                      <span
                        className="font-sans font-medium text-[13px] uppercase whitespace-nowrap"
                        style={{
                          color: "#fafafa",
                          letterSpacing: "1.2px",
                          lineHeight: 1,
                        }}
                      >
                        {llm.name}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      style={{ color: "#71717a", flexShrink: 0 }}
                      strokeWidth={1.75}
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
