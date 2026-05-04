"use client";

import { useEffect, useState } from "react";

type Tool = { name: string; meta: string };

type Block = {
  title: string;
  body: string;
  header: string;
  tools: Tool[];
  gradientBorder?: boolean;
};

const blocks: Block[] = [
  {
    title: "Plain-English\ncompany and people lists",
    body: "Describe the account or persona. Claude picks the right search tool, applies the filters, and returns a structured list.",
    header: "TOOLS · SEARCH",
    tools: [
      { name: "crustdata_company_search", meta: "95+ filters" },
      { name: "crustdata_people_search", meta: "60+ filters" },
      { name: "crustdata_company_search_db", meta: "cached" },
      { name: "crustdata_people_search_db", meta: "3 credits / 100" },
    ],
    gradientBorder: true,
  },
  {
    title: "Social posts and web research in the same thread",
    body: "Pull a prospect's recent posts, run a live web search, or fetch a specific page without leaving the conversation.",
    header: "TOOLS · SIGNALS",
    tools: [
      { name: "crustdata_social_posts", meta: "by profile" },
      { name: "crustdata_web_search", meta: "web, news" },
      { name: "crustdata_web_fetch", meta: "html extract" },
      { name: "crustdata_company_social_posts", meta: "by keyword" },
    ],
    gradientBorder: true,
  },
  {
    title: "Hiring signals across\nevery target account",
    body: "Ask Claude which accounts are hiring SDRs, opening sales roles, or scaling engineering. Batch across up to ten companies at once.",
    header: "TOOLS · JOBS",
    tools: [
      { name: "crustdata_job_search", meta: "database" },
      { name: "crustdata_job_search_live", meta: "single company" },
      { name: "crustdata_batch_job_search", meta: "10 companies" },
      { name: "crustdata_batch_job_search_live", meta: "3 credits / 100" },
    ],
    gradientBorder: true,
  },
  {
    title: "Create push-based\nwatchers from a prompt",
    body: "Tell Claude which job change, post, or role opening to watch. It configures the webhook and simulates the payload before going live.",
    header: "TOOLS · WATCHERS",
    tools: [
      { name: "crustdata_watcher_create", meta: "webhook" },
      { name: "crustdata_watcher_list", meta: "audit" },
      { name: "crustdata_watcher_simulate", meta: "test, free" },
      { name: "crustdata_watcher_update", meta: "pause, resume" },
    ],
    gradientBorder: true,
  },
];

const ROTATE_MS = 5000;

function FeatureText({ block }: { block: Block }) {
  return (
    <div className="flex flex-col gap-3 w-full md:w-[400px] shrink-0 items-center md:items-start text-center md:text-left">
      <h3
        className="font-semibold text-[20px] m-0 whitespace-pre-line"
        style={{
          color: "#fafafa",
          letterSpacing: "-0.2px",
          lineHeight: "26px",
        }}
      >
        {block.title}
      </h3>
      <p
        className="font-normal text-[16px] m-0"
        style={{ color: "#a1a1aa", lineHeight: "24px" }}
      >
        {block.body}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div
      aria-hidden
      style={{
        height: "1px",
        width: "100%",
        background:
          "linear-gradient(90deg, #000 0%, #8681F7 15%, #8681F7 85%, #000 100%)",
      }}
    />
  );
}

function FeatureCard({ block }: { block: Block }) {
  return (
    <div
      className="flex flex-col items-center rounded-[16px] shrink-0 w-full md:w-[380px]"
      style={{
        height: "222px",
        padding: "28px 8px",
        overflow: "clip",
      }}
    >
      <div
        className="rounded-[12px] w-full"
        style={{
          padding: "19px 21px",
          border: "1px solid transparent",
          background:
            "linear-gradient(#000, #000) padding-box, linear-gradient(135deg, rgba(123, 111, 224, 0.9) 0%, rgba(123, 111, 224, 0.7) 35%, rgba(255, 255, 255, 0.08) 75%, rgba(255, 255, 255, 0.06) 100%) border-box",
        }}
      >
        <div
          className="font-mono text-[10.5px] uppercase w-full flex items-center justify-between"
          style={{
            color: "#52525b",
            letterSpacing: "1.26px",
            lineHeight: "16.27px",
            paddingBottom: "11px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <span>TOOLS</span>
          <span>{block.header.replace(/^TOOLS\s*·\s*/, "")}</span>
        </div>
        <div className="w-full" style={{ marginTop: "10px" }}>
          {block.tools.map((tool, i) => (
            <div
              key={tool.name}
              className="flex items-center justify-between gap-4 w-full"
              style={{
                height: i === 0 ? "39.59px" : "40.59px",
                paddingTop: i === 0 ? "10px" : "11px",
                paddingBottom: "10px",
                borderTop:
                  i === 0
                    ? undefined
                    : "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <span
                className="font-mono text-[12.5px] whitespace-nowrap"
                style={{ color: "#fafafa", lineHeight: "19.38px" }}
              >
                {tool.name}
              </span>
              <span
                className="font-mono text-[12px] whitespace-nowrap shrink-0"
                style={{ color: "#52525b", lineHeight: "18.6px" }}
              >
                {tool.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % blocks.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, active]);

  const block = blocks[active];

  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[64px] md:py-[80px] flex flex-col items-center">
        <header className="flex flex-col items-center gap-[14px] w-full pt-[6px]">
          <div
            className="font-semibold text-[14px] uppercase text-center"
            style={{
              color: "#8681f7",
              letterSpacing: "1.54px",
              lineHeight: "17px",
            }}
          >
            WHAT CLAUDE CAN DO
          </div>
          <h2
            className="font-semibold text-[26px] sm:text-[40px] text-center m-0 pt-[6px] max-w-[680px]"
            style={{
              color: "#fafafa",
              letterSpacing: "-0.6px",
              lineHeight: "1.05",
            }}
          >
            Four capabilities, 23 tools,
            <br />
            one conversation.
          </h2>
          <p
            className="font-normal text-[18px] text-center max-w-[620px] m-0"
            style={{ color: "#a1a1aa", lineHeight: 1.4 }}
          >
            Every surface of the Crustdata platform, exposed as
            <br />
            an MCP tool Claude can reach for.
          </p>
          <a
            href="https://docs.crustdata.com"
            className="rounded-[8px] inline-block"
            style={{
              marginTop: "16px",
              padding: "1px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)",
            }}
          >
            <span
              className="block rounded-[7px] px-[20px] py-[10px] font-medium text-[14px] leading-[21.7px]"
              style={{
                background:
                  "linear-gradient(180deg, #101010 0%, #000 100%)",
                color: "#fafafa",
              }}
            >
              Read the docs →
            </span>
          </a>
        </header>

        <div
          className="flex flex-col items-center w-full"
          style={{ marginTop: "80px", gap: "40px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-full">
            <div className="w-full max-w-[960px] flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
              <div
                key={`text-${active}`}
                className="w-full md:w-[400px] shrink-0 animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <FeatureText block={block} />
              </div>
              <div
                key={`card-${active}`}
                className="shrink-0 animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <FeatureCard block={block} />
              </div>
            </div>
            <div
              aria-hidden
              style={{
                height: "1px",
                width: "100%",
                background:
                  "linear-gradient(90deg, #000 0%, #8681F7 15%, #8681F7 85%, #000 100%)",
              }}
            />
          </div>

          <div className="flex gap-5 items-center">
            <button
              type="button"
              onClick={() =>
                setActive((prev) => (prev - 1 + blocks.length) % blocks.length)
              }
              aria-label="Previous capability"
              className="font-medium text-[16px] cursor-pointer transition-colors duration-200 hover:text-[#fafafa]"
              style={{
                background: "transparent",
                color: "#a1a1aa",
                lineHeight: 1,
              }}
            >
              ←
            </button>
            <span
              className="font-mono text-[12px] tabular-nums"
              style={{ color: "#71717a", letterSpacing: "0.5px" }}
            >
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(blocks.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setActive((prev) => (prev + 1) % blocks.length)}
              aria-label="Next capability"
              className="font-medium text-[16px] cursor-pointer transition-colors duration-200 hover:text-[#fafafa]"
              style={{
                background: "transparent",
                color: "#a1a1aa",
                lineHeight: 1,
              }}
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
