export function ClosingCTA() {
  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[120px] text-center flex flex-col items-center gap-[14px]">
        <div
          className="font-semibold text-[14px] leading-[17px] uppercase"
          style={{ color: "#8681f7", letterSpacing: "1.54px" }}
        >
          READY TO SHIP
        </div>
        <h2
          className="font-semibold text-[32px] sm:text-[40px] text-center m-0 max-w-[720px] pt-[6px]"
          style={{
            color: "#fafafa",
            letterSpacing: "-0.6px",
            lineHeight: "1.05",
          }}
        >
          Give Claude the keys to{" "}
          <span style={{ color: "#df7e5d" }}>800M profiles</span>.
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
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
                background: "linear-gradient(180deg, #101010 0%, #000 100%)",
                color: "#fafafa",
              }}
            >
              Read the MCP docs
            </span>
          </a>
        </div>
        <div
          className="font-normal text-[14px] leading-[21px] mt-3"
          style={{ color: "#71717a", letterSpacing: "0.04em" }}
        >
          99.98% uptime · SOC 2 Type II · OAuth 2.1 · 23 tools
        </div>
      </div>
    </section>
  );
}
