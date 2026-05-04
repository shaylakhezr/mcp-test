"use client";

import { useEffect, useRef, useState } from "react";

type Row = { initial: string; col1: string; col2: string; col3: string };

type Scenario = {
  prompt: string;
  toolCall: string;
  resultText: string;
  headers: [string, string, string];
  rows: Row[];
  moreCount: number;
};

const scenarios: Scenario[] = [
  {
    prompt: "Find Series B SaaS in NYC, 100–500 employees",
    toolCall: "crustdata_company_search",
    resultText: "Found 47 matching companies",
    headers: ["COMPANY", "HQ", "HEADCOUNT"],
    rows: [
      { initial: "F", col1: "Finch", col2: "SF", col3: "142" },
      { initial: "V", col1: "Vanta", col2: "NY", col3: "256" },
      { initial: "M", col1: "Moss", col2: "LA", col3: "378" },
    ],
    moreCount: 43,
  },
  {
    prompt: "VPs of Sales at HubSpot customers",
    toolCall: "crustdata_people_search",
    resultText: "Found 312 matching people",
    headers: ["NAME", "TITLE", "COMPANY"],
    rows: [
      { initial: "M", col1: "Maya Chen", col2: "VP Sales", col3: "Finch" },
      {
        initial: "D",
        col1: "Daniel Park",
        col2: "Head of Sales",
        col3: "Vanta",
      },
      { initial: "P", col1: "Priya Shah", col2: "VP of Sales", col3: "Persona" },
    ],
    moreCount: 309,
  },
  {
    prompt: "Companies hiring SDRs in the last 30 days",
    toolCall: "crustdata_job_search",
    resultText: "Found 89 open roles",
    headers: ["COMPANY", "ROLE", "POSTED"],
    rows: [
      { initial: "R", col1: "Ramp", col2: "Senior SDR", col3: "2d ago" },
      { initial: "B", col1: "Brex", col2: "Enterprise SDR", col3: "5d ago" },
      { initial: "L", col1: "Linear", col2: "SDR Manager", col3: "1w ago" },
    ],
    moreCount: 86,
  },
];

const DELETE_SPEED_MS = 22;
const TYPE_SPEED_MS = 32;
const SETTLE_HOLD_MS = 3500;

export function HeroChatMock() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [bubbleIn, setBubbleIn] = useState(false);
  const [thinkingIn, setThinkingIn] = useState(false);
  const [thinkingDone, setThinkingDone] = useState(false);
  const [resultIn, setResultIn] = useState(false);
  const [rowsRevealed, setRowsRevealed] = useState(0);
  const [moreIn, setMoreIn] = useState(false);

  const isFirstRef = useRef(true);
  const promptRef = useRef("");
  promptRef.current = displayedPrompt;

  useEffect(() => {
    const scenario = scenarios[scenarioIdx];
    const newPrompt = scenario.prompt;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;

    setThinkingIn(false);
    setThinkingDone(false);
    setResultIn(false);
    setRowsRevealed(0);
    setMoreIn(false);

    if (isFirstRef.current) {
      isFirstRef.current = false;
      timers.push(setTimeout(() => setBubbleIn(true), 800));
      elapsed = 1300;
    } else {
      const currentLen = promptRef.current.length;
      for (let i = 0; i < currentLen; i++) {
        timers.push(
          setTimeout(
            () => setDisplayedPrompt((prev) => prev.slice(0, -1)),
            elapsed + i * DELETE_SPEED_MS,
          ),
        );
      }
      elapsed += currentLen * DELETE_SPEED_MS + 250;
    }

    for (let i = 1; i <= newPrompt.length; i++) {
      timers.push(
        setTimeout(
          () => setDisplayedPrompt(newPrompt.slice(0, i)),
          elapsed + i * TYPE_SPEED_MS,
        ),
      );
    }
    elapsed += newPrompt.length * TYPE_SPEED_MS + 500;

    timers.push(setTimeout(() => setThinkingIn(true), elapsed));
    elapsed += 1100;
    timers.push(
      setTimeout(() => {
        setThinkingDone(true);
        setResultIn(true);
      }, elapsed),
    );
    elapsed += 250;
    timers.push(setTimeout(() => setRowsRevealed(1), elapsed));
    elapsed += 220;
    timers.push(setTimeout(() => setRowsRevealed(2), elapsed));
    elapsed += 220;
    timers.push(setTimeout(() => setRowsRevealed(3), elapsed));
    elapsed += 220;
    timers.push(setTimeout(() => setMoreIn(true), elapsed));
    elapsed += SETTLE_HOLD_MS;

    timers.push(
      setTimeout(() => {
        setScenarioIdx((prev) => (prev + 1) % scenarios.length);
      }, elapsed),
    );

    return () => timers.forEach(clearTimeout);
  }, [scenarioIdx]);

  const scenario = scenarios[scenarioIdx];
  const isTyping = displayedPrompt.length < scenario.prompt.length;

  return (
    <div className="w-full" style={{ overflow: "clip" }}>
      <div
        className="rounded-[14px] w-full"
        style={{
          border: "1px solid transparent",
          background:
            "linear-gradient(#070708, #070708) padding-box, linear-gradient(180deg, #858585 0%, #0F0F0F 67%) border-box",
          padding: "16px 24px",
          marginBottom: "-24px",
        }}
      >
        <div className="flex gap-[6px]">
          <div
            className="rounded-full"
            style={{ width: "10px", height: "10px", background: "#ff5f57" }}
          />
          <div
            className="rounded-full"
            style={{ width: "10px", height: "10px", background: "#ffbd2e" }}
          />
          <div
            className="rounded-full"
            style={{ width: "10px", height: "10px", background: "#28ca42" }}
          />
        </div>

        <div
          className="flex flex-col"
          style={{ gap: "20px", paddingTop: "12px", paddingBottom: "24px" }}
        >
          <div
            className="flex justify-end w-full"
            style={{ maxWidth: "100%" }}
          >
            <div
              style={{
                borderRadius: "16px 16px 6px 16px",
                border: "1px solid #5F5F60",
                padding: "10px 16px",
                maxWidth: "100%",
                opacity: bubbleIn ? 1 : 0,
                transform: bubbleIn ? "scale(1)" : "scale(0.3)",
                transformOrigin: "bottom right",
                transition: bubbleIn
                  ? "opacity 300ms ease-out, transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                  : "opacity 100ms ease-out, transform 100ms ease-in",
              }}
            >
              <p
                className="font-normal text-[13px] sm:text-[14px] m-0"
                style={{
                  color: "#eeeef5",
                  lineHeight: "21px",
                  minHeight: "21px",
                  maxWidth: "100%",
                }}
              >
                {displayedPrompt}
                <span
                  aria-hidden
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "14px",
                    marginLeft: "2px",
                    verticalAlign: "-2px",
                    background: "#eeeef5",
                    opacity: isTyping ? 1 : 0,
                    animation: isTyping
                      ? "caret-blink 1s steps(1) infinite"
                      : undefined,
                  }}
                />
              </p>
            </div>
          </div>

          <div className="flex flex-col" style={{ gap: "12px" }}>
            <div
              className="flex flex-col items-start"
              style={{ minHeight: "50px" }}
            >
              {thinkingIn && (
                <div
                  className="flex items-center animate-in fade-in duration-300"
                  style={{ gap: "8px" }}
                >
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
                      ...(thinkingDone
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
                    {scenario.toolCall} &gt;
                  </p>
                </div>
              )}
              {resultIn && (
                <p
                  className="font-semibold text-[16px] m-0 animate-in fade-in duration-300"
                  style={{
                    color: "#eeeef5",
                    lineHeight: "22.5px",
                    marginTop: "6px",
                  }}
                >
                  {scenario.resultText}
                </p>
              )}
            </div>

            <div
              className="rounded-[10px] overflow-hidden w-full"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(#070708, #070708) padding-box, linear-gradient(180deg, #858585 0%, #0F0F0F 67%) border-box",
                opacity: resultIn ? 1 : 0,
                transition: "opacity 350ms ease-out",
              }}
            >
              <div
                className="flex items-center w-full"
                style={{ borderBottom: "1px solid #27272a" }}
              >
                {scenario.headers.map((h) => (
                  <div
                    key={h}
                    className="flex-1 font-semibold text-[10px] uppercase"
                    style={{
                      color: "#52525b",
                      letterSpacing: "0.12px",
                      lineHeight: "15px",
                      padding: "12px 16px",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>

              {scenario.rows.map((row, i) => (
                <div
                  key={`${scenarioIdx}-${i}`}
                  className="flex items-center w-full"
                  style={{
                    gap: "32px",
                    padding: "13px 16px",
                    borderBottom: "1px solid #1f1f1f",
                    opacity: rowsRevealed > i ? 1 : 0,
                    transform:
                      rowsRevealed > i
                        ? "translateY(0)"
                        : "translateY(16px)",
                    transition:
                      "opacity 500ms ease-out, transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div
                    className="flex-1 flex items-center"
                    style={{ gap: "10px" }}
                  >
                    <div
                      className="rounded-full flex items-center justify-center shrink-0"
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "#5752ca",
                      }}
                    >
                      <span
                        className="font-semibold text-[10px] text-white"
                        style={{ lineHeight: "15px" }}
                      >
                        {row.initial}
                      </span>
                    </div>
                    <span
                      className="font-medium text-[13px]"
                      style={{ color: "#f5f5f7", lineHeight: "19.5px" }}
                    >
                      {row.col1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span
                      className="font-normal text-[13px]"
                      style={{ color: "#71717a", lineHeight: "19.5px" }}
                    >
                      {row.col2}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span
                      className="font-normal text-[13px]"
                      style={{ color: "#71717a", lineHeight: "19.5px" }}
                    >
                      {row.col3}
                    </span>
                  </div>
                </div>
              ))}

              <div
                style={{
                  padding: "12px 16px",
                  opacity: moreIn ? 1 : 0,
                  transition: "opacity 350ms ease-out",
                }}
              >
                <span
                  className="font-mono font-medium text-[12px]"
                  style={{
                    color: "#dfe1e5",
                    letterSpacing: "0.44px",
                    lineHeight: "16.5px",
                  }}
                >
                  + {scenario.moreCount} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
