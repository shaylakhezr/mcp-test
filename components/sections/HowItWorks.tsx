type Step = {
  kicker: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    kicker: "SETUP",
    title: "Add the MCP endpoint",
    body: "In Claude Settings, add a custom MCP server with the Crustdata URL. One field, one paste.",
  },
  {
    kicker: "AUTH",
    title: "Authenticate with your API key",
    body: "OAuth 2.1 handshake. The key never touches our MCP server and is passed through on every request.",
  },
  {
    kicker: "QUERY",
    title: "Query in plain English",
    body: "Claude reads the prompt, picks the right tool, builds the query, and returns the structured response to the thread.",
  },
];

const verticalDividerBg =
  "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.12) 15%, rgba(255, 255, 255, 0.12) 85%, transparent 100%)";

export function HowItWorks() {
  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[64px] md:py-[80px]">
        <header className="flex flex-col items-center gap-[14px] w-full pt-[6px] mb-[80px]">
          <div
            className="font-semibold text-[14px] leading-[17px] uppercase text-center"
            style={{ color: "#8681f7", letterSpacing: "1.54px" }}
          >
            INTEGRATION
          </div>
          <h2
            className="font-semibold text-[26px] sm:text-[40px] text-center m-0 pt-[6px] max-w-[680px]"
            style={{
              color: "#fafafa",
              letterSpacing: "-0.6px",
              lineHeight: "1.05",
            }}
          >
            Five minutes from signup to first query.
          </h2>
          <p
            className="font-normal text-[18px] text-center max-w-[620px] m-0"
            style={{ color: "#a1a1aa", lineHeight: 1.4 }}
          >
            Works natively with Claude.ai, Claude Code, Cursor, and any
            MCP-compatible client.
          </p>
        </header>

        <div className="max-w-[960px] mx-auto">
          <div
            className="relative hidden md:block"
            style={{ height: "40px", marginBottom: "40px" }}
          >
            <div
              aria-hidden
              className="absolute h-[1px]"
              style={{
                top: "19.5px",
                left: "calc(100% / 6)",
                right: "calc(100% / 6)",
                background:
                  "linear-gradient(90deg, #000 0%, #8681F7 15%, #8681F7 85%, #000 100%)",
              }}
            />
            <div className="grid grid-cols-3 h-full">
              {steps.map((step, i) => (
                <div
                  key={step.kicker}
                  className="flex items-center justify-center"
                >
                  <div
                    className="rounded-full flex items-center justify-center font-semibold relative"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#8681f7",
                      color: "#fff",
                      fontSize: "16px",
                      boxShadow: "0 0 0 6px #000",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
            <div
              aria-hidden
              className="hidden md:block absolute top-0 bottom-0"
              style={{
                left: "33.333%",
                width: "1px",
                background: verticalDividerBg,
              }}
            />
            <div
              aria-hidden
              className="hidden md:block absolute top-0 bottom-0"
              style={{
                left: "66.666%",
                width: "1px",
                background: verticalDividerBg,
              }}
            />

            {steps.map((step, i) => (
              <div
                key={step.kicker}
                className="flex flex-col items-start gap-3 px-8 py-6"
              >
                <div className="md:hidden mb-2">
                  <div
                    className="rounded-full flex items-center justify-center font-semibold"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#8681f7",
                      color: "#fff",
                      fontSize: "16px",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
                <div
                  className="font-medium text-[12px] uppercase"
                  style={{
                    color: "#8681f7",
                    letterSpacing: "1.4px",
                    lineHeight: "15.5px",
                  }}
                >
                  {step.kicker}
                </div>
                <h3
                  className="font-semibold text-[20px] m-0"
                  style={{
                    color: "#eeeef5",
                    lineHeight: "26px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-normal text-[16px] m-0"
                  style={{ color: "#a1a1aa", lineHeight: "24px" }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
