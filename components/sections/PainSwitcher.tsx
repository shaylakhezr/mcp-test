"use client";

import { Check } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";

const blocks = [
  {
    title: "Live data,\nnot stale snapshots",
    body: "While ZoomInfo and Apollo refresh weekly or monthly, Crustdata MCP gives Claude live data on every call.",
  },
  {
    title: "Plain English, not filter UIs",
    body: "Skip the schema hunting. Describe what you need in natural language and Claude builds the query.",
  },
  {
    title: "Self-serve,\nnot RevOps queues",
    body: "Connect once, the whole team gets data. Crustdata MCP turns a single integration into a self-serve interface that SDRs, AEs, CS, and marketing can all use through Claude.",
  },
];

export function PainSwitcher() {
  return (
    <div className="flex flex-col items-center gap-[120px] md:gap-[240px]">
      <div className="flex flex-col items-center gap-[80px] w-full">
        <header className="flex flex-col items-center gap-[16px] pt-[6px]">
          <div
            className="font-semibold text-[14px] uppercase text-center"
            style={{
              color: "#8681f7",
              letterSpacing: "1.54px",
              lineHeight: "17px",
            }}
          >
            BEFORE MCP
          </div>
          <h2
            className="font-semibold text-[26px] sm:text-[40px] text-center m-0 pt-[6px] max-w-[680px]"
            style={{
              color: "#fafafa",
              letterSpacing: "-0.6px",
              lineHeight: "1.05",
            }}
          >
            Every prospecting query costs a context switch.
          </h2>
          <p
            className="font-normal text-[18px] text-center max-w-[620px] m-0"
            style={{ color: "#a1a1aa", lineHeight: 1.4 }}
          >
            Reps bounce between tabs, API docs, and RevOps queues before a
            single lead gets touched.
          </p>
        </header>

        <Block text={blocks[0]}>
          <SubscriptionMock />
        </Block>
      </div>

      <Block text={blocks[1]}>
        <FiltersMock />
      </Block>

      <Block text={blocks[2]}>
        <SlackMock />
      </Block>
    </div>
  );
}

function Block({
  text,
  children,
}: {
  text: { title: string; body: string };
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[960px] flex flex-col md:flex-row md:items-center gap-12 md:gap-[80px]">
      <div className="flex flex-col gap-3 w-full md:flex-1 md:min-w-0">
        <div
          className="font-semibold text-[20px] whitespace-pre-line"
          style={{ color: "#eeeef5", lineHeight: "26px" }}
        >
          {text.title}
        </div>
        <p
          className="font-normal text-[16px] m-0"
          style={{ color: "#a1a1aa", lineHeight: "24px" }}
        >
          {text.body}
        </p>
      </div>
      <div className="flex justify-center md:justify-end shrink-0">
        {children}
      </div>
    </div>
  );
}

function SubscriptionMock() {
  const rows = [
    { name: "Finch", meta: " · SF · 142 hc", stale: "Stale 30d" },
    { name: "Vanta", meta: " · NY · 188 hc", stale: "Stale 45d" },
    { name: "Persona", meta: " · SF · 312 hc", stale: "Stale 28d" },
    { name: "Ramp", meta: " · NY · 840 hc", stale: "Stale 35d" },
  ];

  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cellBorder = "1px solid #666";
  const headerCell: React.CSSProperties = {
    height: "44px",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
  };
  const bodyCell: React.CSSProperties = {
    height: "53px",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
  };

  return (
    <div className="w-full max-w-full overflow-x-auto">
    <div
      ref={ref}
      className="flex flex-col items-start"
      style={{
        borderBottom: cellBorder,
        opacity: visible ? 1 : 0,
        transition: "opacity 600ms ease-out",
        minWidth: "min-content",
      }}
    >
      <div className="flex items-start">
        <div style={{ ...headerCell, width: "160px", borderRight: cellBorder }}>
          <span
            className="font-semibold text-[12px] uppercase whitespace-nowrap"
            style={{
              color: "#71717a",
              letterSpacing: "1.2px",
              lineHeight: "15px",
            }}
          >
            ACCOUNT
          </span>
        </div>
        <div
          style={{
            ...headerCell,
            width: "110px",
            borderRight: cellBorder,
            justifyContent: "center",
          }}
        >
          <span
            className="font-medium text-[12px] whitespace-nowrap"
            style={{ color: "#fafafa", lineHeight: "16.5px" }}
          >
            Crustdata MCP
          </span>
        </div>
        <div
          style={{
            ...headerCell,
            width: "110px",
            justifyContent: "center",
          }}
        >
          <span
            className="font-medium text-[12px] whitespace-nowrap"
            style={{ color: "#a1a1aa", lineHeight: "16.5px" }}
          >
            Other tools
          </span>
        </div>
      </div>

      {rows.map((row) => (
        <Fragment key={row.name}>
          <div className="flex items-start">
            <div style={{ ...bodyCell, width: "160px", borderRight: cellBorder }}>
              <p className="m-0 whitespace-nowrap">
                <span
                  className="font-medium text-[13px]"
                  style={{ color: "#fafafa", lineHeight: "19.5px" }}
                >
                  {row.name}
                </span>
                <span
                  className="font-normal text-[12px]"
                  style={{ color: "#71717a", lineHeight: "18px" }}
                >
                  {row.meta}
                </span>
              </p>
            </div>
            <div
              style={{
                ...bodyCell,
                width: "110px",
                borderRight: cellBorder,
                justifyContent: "center",
              }}
            >
              <span
                className="inline-flex items-center gap-[6px] font-medium text-[12px]"
                style={{ color: "#22c55e", lineHeight: "18px" }}
              >
                <Check size={14} strokeWidth={2.5} />
                Live
              </span>
            </div>
            <div
              style={{
                ...bodyCell,
                width: "110px",
                justifyContent: "center",
              }}
            >
              <span
                className="font-medium text-[12px] whitespace-nowrap"
                style={{ color: "#df7e5d", lineHeight: "18px" }}
              >
                {row.stale}
              </span>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
    </div>
  );
}

const PROMPT_TEXT =
  "Find Series B SaaS in NYC, then enrich with their tech stack";
const BUBBLE_APPEAR_MS = 500;

function FiltersMock() {
  const [bubbleIn, setBubbleIn] = useState(false);
  const [showTool, setShowTool] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      setBubbleIn(false);
      setShowTool(false);
      setShowResult(false);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const runChain = () => {
      setBubbleIn(false);
      setShowTool(false);
      setShowResult(false);
      timers.push(setTimeout(() => setBubbleIn(true), 60));
      const after = BUBBLE_APPEAR_MS + 200;
      timers.push(setTimeout(() => setShowTool(true), after + 400));
      timers.push(setTimeout(() => setShowResult(true), after + 1800));
      timers.push(setTimeout(runChain, after + 6500));
    };
    runChain();
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-[50px] items-start w-full md:w-[380px]"
    >
      <div className="flex justify-end w-full">
        <div
          style={{
            borderRadius: "16px 16px 6px 16px",
            border: "1px solid #5F5F60",
            padding: "11px 12px",
            opacity: bubbleIn ? 1 : 0,
            transform: bubbleIn ? "scale(1)" : "scale(0.4)",
            transformOrigin: "bottom right",
            transition: bubbleIn
              ? `opacity 220ms ease-out, transform ${BUBBLE_APPEAR_MS}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
              : "opacity 120ms ease-out, transform 120ms ease-in",
          }}
        >
          <p
            className="font-normal text-[14px] m-0"
            style={{ color: "#eeeef5", lineHeight: "21px", maxWidth: "322px" }}
          >
            {PROMPT_TEXT}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[8px] items-start w-full min-h-[60px]">
        {showTool && (
          <div className="flex gap-[8px] items-center animate-in fade-in duration-300">
            <img
              src="/logos/Crustdata.svg"
              alt=""
              width={18}
              height={16}
              style={{ width: "18px", height: "auto" }}
            />
            <p
              className="font-mono text-[13px] m-0"
              style={{
                lineHeight: "22.5px",
                ...(showResult
                  ? { color: "#8a8a8a" }
                  : {
                      backgroundImage:
                        "linear-gradient(90deg, #5a5a5a 0%, #5a5a5a 35%, #f4f4f5 50%, #5a5a5a 65%, #5a5a5a 100%)",
                      backgroundSize: "200% 100%",
                      backgroundRepeat: "no-repeat",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                      animation: "text-shimmer 2.2s linear infinite",
                      willChange: "background-position",
                    }),
              }}
            >
              crustdata_company_search &gt;
            </p>
          </div>
        )}
        {showResult && (
          <p
            className="font-semibold text-[16px] m-0 animate-in fade-in duration-300"
            style={{ color: "#eeeef5", lineHeight: "22.5px" }}
          >
            Found 23 companies. Tech stack added
          </p>
        )}
      </div>
    </div>
  );
}

function SlackMock() {
  const dashMask =
    "repeating-linear-gradient(90deg, #000 0 6px, transparent 6px 14px)";

  return (
    <div
      className="flex items-center justify-between w-full md:w-[380px]"
      style={{ height: "80px" }}
    >
      <div
        className="rounded-[16px] flex items-center justify-center shrink-0"
        style={{
          width: "80px",
          height: "80px",
          background: "rgba(255, 255, 255, 0.8)",
          padding: "8px",
          animation: "logo-float 4s ease-in-out infinite",
        }}
      >
        <img
          src="/logos/Crustdata.svg"
          alt="Crustdata"
          width={61}
          height={55}
          style={{ width: "61px", height: "auto" }}
        />
      </div>

      <div
        aria-hidden
        style={{
          flex: 1,
          margin: "0 12px",
          height: "2px",
          background: "linear-gradient(90deg, #5752ca 0%, #df7e5d 100%)",
          WebkitMaskImage: dashMask,
          maskImage: dashMask,
          WebkitMaskSize: "14px 100%",
          maskSize: "14px 100%",
          WebkitMaskRepeat: "repeat",
          maskRepeat: "repeat",
          animation: "dash-flow-h 1.5s linear infinite",
        }}
      />

      <div
        className="rounded-[16px] flex items-center justify-center shrink-0"
        style={{
          width: "80px",
          height: "80px",
          background: "rgba(255, 255, 255, 0.8)",
          padding: "8px",
          animation: "logo-float 4s ease-in-out infinite",
          animationDelay: "-2s",
        }}
      >
        <img
          src="/logos/Claude.svg"
          alt="Claude"
          width={60}
          height={60}
          style={{ width: "60px", height: "60px" }}
        />
      </div>
    </div>
  );
}
