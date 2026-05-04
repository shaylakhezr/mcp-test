"use client";

import { useState } from "react";

type Token = { text: string; color: string };
type CodeLine = Token[];

const C = {
  cmt: "#52525b",
  pct: "#a1a1aa",
  key: "#8681f7",
  str: "#71f6ba",
  num: "#9fc6ff",
};

const cmt = (text: string): Token => ({ text, color: C.cmt });
const pct = (text: string): Token => ({ text, color: C.pct });
const key = (text: string): Token => ({ text, color: C.key });
const str = (text: string): Token => ({ text, color: C.str });
const num = (text: string): Token => ({ text, color: C.num });

const toolCallLines: CodeLine[] = [
  [cmt("// Claude translates the prompt to this MCP tool call")],
  [pct("{")],
  [pct("  "), key('"tool"'), pct(": "), str('"crustdata_people_search"'), pct(",")],
  [pct("  "), key('"arguments"'), pct(": {")],
  [pct("    "), key('"filters"'), pct(": {")],
  [pct("      "), key('"titles"'), pct(": ["), str('"VP of Sales"'), pct(", "), str('"Head of Sales"'), pct("],")],
  [pct("      "), key('"company_filters"'), pct(": {")],
  [pct("        "), key('"funding_stage"'), pct(": "), str('"Series B"'), pct(",")],
  [pct("        "), key('"tech_stack"'), pct(": ["), str('"HubSpot"'), pct("],")],
  [pct("        "), key('"headcount"'), pct(": { "), key('"min"'), pct(": "), num("100"), pct(", "), key('"max"'), pct(": "), num("500"), pct(" },")],
  [pct("        "), key('"hq_country"'), pct(": ["), str('"US"'), pct("]")],
  [pct("      },")],
  [pct("      "), key('"business_email_verified"'), pct(": "), num("true")],
  [pct("    },")],
  [pct("    "), key('"limit"'), pct(": "), num("250")],
  [pct("  }")],
  [pct("}")],
];

const responseLines: CodeLine[] = [
  [cmt("// Crustdata returns the structured result")],
  [pct("{")],
  [pct("  "), key('"results"'), pct(": "), num("241"), pct(",")],
  [pct("  "), key('"people"'), pct(": [")],
  [pct("    {")],
  [pct("      "), key('"name"'), pct(": "), str('"Maya Chen"'), pct(",")],
  [pct("      "), key('"title"'), pct(": "), str('"VP of Sales"'), pct(",")],
  [pct("      "), key('"company"'), pct(": "), str('"Finch"'), pct(",")],
  [pct("      "), key('"email"'), pct(": "), str('"maya@finch.com"'), pct(",")],
  [pct("      "), key('"linkedin"'), pct(": "), str('"linkedin.com/in/maya-chen"')],
  [pct("    },")],
  [pct("    {")],
  [pct("      "), key('"name"'), pct(": "), str('"Daniel Park"'), pct(",")],
  [pct("      "), key('"title"'), pct(": "), str('"Head of Sales"'), pct(",")],
  [pct("      "), key('"company"'), pct(": "), str('"Vanta"'), pct(",")],
  [pct("      "), key('"email"'), pct(": "), str('"daniel@vanta.com"'), pct(",")],
  [pct("      "), key('"linkedin"'), pct(": "), str('"linkedin.com/in/daniel-park"')],
  [pct("    }")],
  [pct("  ],")],
  [pct("  "), key('"credits_used"'), pct(": "), num("2"), pct(",")],
  [pct("  "), key('"credits_remaining"'), pct(": "), num("4818")],
  [pct("}")],
];

const watcherLines: CodeLine[] = [
  [cmt("// Persist the same query as a recurring watcher")],
  [pct("{")],
  [pct("  "), key('"watcher"'), pct(": "), str('"crustdata_watcher_create"'), pct(",")],
  [pct("  "), key('"arguments"'), pct(": {")],
  [pct("    "), key('"name"'), pct(": "), str('"Series B SaaS · HubSpot"'), pct(",")],
  [pct("    "), key('"trigger"'), pct(": "), str('"weekly"'), pct(",")],
  [pct("    "), key('"filters"'), pct(": {")],
  [pct("      "), key('"titles"'), pct(": ["), str('"VP of Sales"'), pct("],")],
  [pct("      "), key('"funding_stage"'), pct(": "), str('"Series B"'), pct(",")],
  [pct("      "), key('"tech_stack"'), pct(": ["), str('"HubSpot"'), pct("]")],
  [pct("    },")],
  [pct("    "), key('"webhook"'), pct(": "), str('"https://api.acme.com/leads"')],
  [pct("  }")],
  [pct("}")],
];

const TABS: { name: string; status: string; lines: CodeLine[] }[] = [
  { name: "tool_call.json", status: "200 OK", lines: toolCallLines },
  { name: "response.json", status: "200 OK", lines: responseLines },
  { name: "watcher_create.json", status: "201 CREATED", lines: watcherLines },
];

function StatusPill({ label }: { label: string }) {
  return (
    <div
      className="relative inline-flex items-center gap-[6px] rounded-full"
      style={{
        padding: "4px 13px",
        border: "1px solid rgba(113, 246, 186, 0.28)",
        background:
          "linear-gradient(180deg, rgba(113, 246, 186, 0.18) 0%, rgba(113, 246, 186, 0.04) 100%)",
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.06)",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "3px",
          background: "#71f6ba",
          boxShadow: "0 0 8px #71f6ba",
        }}
      />
      <span
        className="font-mono text-[10px] uppercase whitespace-nowrap"
        style={{
          color: "#71f6ba",
          letterSpacing: "0.8px",
          lineHeight: "15.5px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function ApiPreview() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[64px] md:py-[80px] flex flex-col items-center gap-[80px]">
        <header className="flex flex-col items-center gap-[14px] w-full pt-[6px]">
          <div
            className="font-semibold text-[14px] uppercase text-center"
            style={{
              color: "#8681f7",
              letterSpacing: "1.54px",
              lineHeight: "17px",
            }}
          >
            UNDER THE HOOD
          </div>
          <h2
            className="font-semibold text-[26px] sm:text-[40px] text-center m-0 pt-[6px] max-w-[680px]"
            style={{
              color: "#fafafa",
              letterSpacing: "-0.6px",
              lineHeight: "1.05",
            }}
          >
            Every prompt resolves to a real API call.
          </h2>
          <p
            className="font-normal text-[18px] text-center max-w-[620px] m-0"
            style={{ color: "#a1a1aa", lineHeight: 1.4 }}
          >
            Watch what Claude executes behind the natural-language surface.
          </p>
        </header>

        <div
          className="w-full max-w-[960px]"
          style={{ height: "456px", overflow: "clip" }}
        >
        <div
          className="rounded-[16px] overflow-hidden w-full flex flex-col"
          style={{
            background:
              "linear-gradient(#070708, #070708) padding-box, linear-gradient(180deg, #858585 0%, #0F0F0F 67%) border-box",
            border: "1px solid transparent",
            height: "472px",
          }}
        >
          <div
            className="flex items-center gap-[2px] shrink-0"
            style={{
              paddingTop: "8px",
              paddingBottom: "5px",
              paddingLeft: "24px",
              paddingRight: "24px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
            }}
          >
            <div className="flex gap-[6px] pr-[10px]">
              {(["#ff5f57", "#ffbd2e", "#28ca42"] as const).map((color) => (
                <div
                  key={color}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "5px",
                    background: color,
                  }}
                />
              ))}
            </div>

            {TABS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(i)}
                className="font-mono text-[12px] cursor-pointer transition-colors"
                style={{
                  color: i === active ? "#fafafa" : "#71717a",
                  borderBottom:
                    i === active
                      ? "2px solid #8681f7"
                      : "2px solid transparent",
                  paddingTop: "8px",
                  paddingBottom: "10px",
                  paddingLeft: "14px",
                  paddingRight: "14px",
                  background: "transparent",
                }}
              >
                {t.name}
              </button>
            ))}

            <div className="ml-auto pl-2">
              <StatusPill label={tab.status} />
            </div>
          </div>

          <div
            className="overflow-auto flex-1"
            style={{
              paddingTop: "16px",
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingBottom: "16px",
            }}
          >
            <pre
              className="m-0 font-mono text-[13px]"
              style={{ lineHeight: "22.75px" }}
            >
              {tab.lines.map((line, i) => (
                <div key={i}>
                  {line.length === 0 ? (
                    <span>&nbsp;</span>
                  ) : (
                    line.map((tok, j) => (
                      <span key={j} style={{ color: tok.color }}>
                        {tok.text}
                      </span>
                    ))
                  )}
                </div>
              ))}
            </pre>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
