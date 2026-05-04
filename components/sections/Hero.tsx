import { Reveal } from "@/components/Reveal";
import { HeroChatInput } from "@/components/sections/HeroChatInput";
import { HeroChatMock } from "@/components/sections/HeroChatMock";

export function Hero() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse 1100px 600px at 50% 280px, rgba(134, 129, 247, 0.22), transparent 65%), radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px) 0 0 / 22px 22px, #000",
      }}
    >
      <div className="mx-auto max-w-[960px] px-6 pt-[120px] pb-[100px]">
        <div className="flex flex-col items-center gap-[64px] max-w-[960px] mx-auto relative">
          <Reveal immediate delay={120} className="w-full">
            <div
              className="flex flex-col items-center w-full"
              style={{ gap: "32px" }}
            >
              <div
                className="flex flex-col items-center text-center w-full"
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
                  MCP SERVER
                </div>
                <h1
                  className="font-semibold text-[34px] sm:text-[56px] m-0"
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
            <HeroChatMock />
          </Reveal>

          <HeroChatInput />
        </div>
      </div>
    </section>
  );
}
