import { Reveal } from "@/components/Reveal";
import { HeroChatInput } from "@/components/sections/HeroChatInput";

const navLinks = ["Products", "Use cases", "Docs", "Pricing"];

const tableRows = [
  { initial: "F", name: "Finch", hq: "SF", hc: 142 },
  { initial: "V", name: "Vanta", hq: "NY", hc: 256 },
  { initial: "M", name: "Moss", hq: "LA", hc: 378 },
];

export function Hero() {
  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 pt-8 pb-[100px]">
        <Reveal immediate offset={12} className="w-full">
        <nav
          className="flex items-center justify-between rounded-[14px] py-2.5 pl-5 pr-[14px]"
          style={{ background: "#19191a" }}
        >
          <a href="/" className="flex items-center gap-2">
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
          </a>
          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="font-medium text-[14px] leading-[21.7px] text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/demo"
            className="rounded-[8px] px-3 py-2 font-medium text-[14px] leading-[21px] text-white"
            style={{ background: "#5752ca" }}
          >
            Book a Demo
          </a>
        </nav>
        </Reveal>

        <div className="mt-[90px] flex flex-col items-center gap-[64px] max-w-[960px] mx-auto relative">
          <Reveal immediate delay={120} className="w-full">
          <div className="flex flex-col items-center w-full" style={{ gap: "32px" }}>
            <div className="flex flex-col items-center text-center w-full" style={{ gap: "14px" }}>
              <div
                className="font-semibold text-[14px] uppercase"
                style={{
                  color: "#8681f7",
                  letterSpacing: "1.54px",
                  lineHeight: "17px",
                }}
              >
                MCP SERVER
              </div>
              <h1
                className="font-semibold text-[40px] sm:text-[56px] m-0"
                style={{
                  color: "#fafafa",
                  letterSpacing: "-0.72px",
                  lineHeight: "1.05",
                }}
              >
                <span className="block">Prospect at the</span>
                <span className="block">
                  speed of{" "}
                  <span style={{ color: "#df7e5d" }}>Claude</span>
                </span>
              </h1>
              <p
                className="font-normal text-[18px] m-0 max-w-[620px]"
                style={{ color: "#a1a1aa", lineHeight: 1.4 }}
              >
                Crustdata&apos;s MCP server gives Claude live access to 95+
                company filters, 60+ people filters, social posts, and job
                signals. Ask in plain English. Get structured lists back.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://app.crustdata.com/signup"
                className="rounded-[8px] px-6 py-3 font-semibold text-[16px] leading-[21.7px] text-white"
                style={{ background: "#5752ca" }}
              >
                Get API key →
              </a>
              <a
                href="https://docs.crustdata.com"
                className="rounded-[8px] inline-block"
                style={{
                  padding: "1px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)",
                }}
              >
                <span
                  className="block rounded-[7px] px-[23px] py-[11px] font-medium text-[14px] leading-[21.7px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #101010 0%, #000 100%)",
                    color: "#fafafa",
                  }}
                >
                  View MCP docs
                </span>
              </a>
            </div>
          </div>
          </Reveal>

          <Reveal immediate delay={280} className="w-full">
          <div className="w-full" style={{ overflow: "clip" }}>
          <div
            className="rounded-[14px] w-full"
            style={{
              border: "1px solid transparent",
              background:
                "linear-gradient(#000, #000) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, #0F0F0F 67%) border-box",
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
              <div className="flex justify-end w-full">
                <div
                  className="rounded-[12px]"
                  style={{
                    border: "1px solid #5f5f60",
                    padding: "10px 16px",
                  }}
                >
                  <p
                    className="font-normal text-[14px] m-0 whitespace-nowrap"
                    style={{ color: "#eeeef5", lineHeight: "21px" }}
                  >
                    Find Series B SaaS in NYC, 100–500 employees
                  </p>
                </div>
              </div>

              <div className="flex flex-col" style={{ gap: "12px" }}>
                <div className="flex flex-col items-start">
                  <p
                    className="font-semibold text-[16px] m-0"
                    style={{ color: "#eeeef5", lineHeight: "22.5px" }}
                  >
                    Found 47 matching companies
                  </p>
                  <div
                    className="flex items-center"
                    style={{ gap: "8px", marginTop: "2px" }}
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
                      style={{ color: "#8a8a8a", lineHeight: "22.5px" }}
                    >
                      Crustdata MCP &gt;
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-[10px] overflow-hidden w-full"
                  style={{
                    border: "1px solid transparent",
                    background:
                      "linear-gradient(#070708, #070708) padding-box, linear-gradient(180deg, #858585 0%, #0F0F0F 67%) border-box",
                  }}
                >
                  <div
                    className="flex items-center w-full"
                    style={{ borderBottom: "1px solid #27272a" }}
                  >
                    {["COMPANY", "HQ", "HEADCOUNT"].map((h) => (
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

                  {tableRows.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center w-full"
                      style={{
                        gap: "32px",
                        padding: "13px 16px",
                        borderBottom: "1px solid #1f1f1f",
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
                          {row.name}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span
                          className="font-normal text-[13px]"
                          style={{ color: "#71717a", lineHeight: "19.5px" }}
                        >
                          {row.hq}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span
                          className="font-normal text-[13px]"
                          style={{ color: "#71717a", lineHeight: "19.5px" }}
                        >
                          {row.hc}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div style={{ padding: "12px 16px" }}>
                    <span
                      className="font-mono font-medium text-[12px]"
                      style={{
                        color: "#dfe1e5",
                        letterSpacing: "0.44px",
                        lineHeight: "16.5px",
                      }}
                    >
                      + 43 more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </Reveal>

          <HeroChatInput />
        </div>
      </div>
    </section>
  );
}
