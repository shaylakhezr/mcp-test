type Surface = {
  kicker: string;
  title: string;
  body: string;
  highlighted?: boolean;
};

const surfaces: Surface[] = [
  {
    kicker: "CONVERSATIONAL",
    title: "MCP Server",
    body: "All 23 tools available to Claude, Cursor, and any MCP client as natural-language commands.",
    highlighted: true,
  },
  {
    kicker: "PULL",
    title: "APIs",
    body: "REST endpoints for on-demand enrichment, search, and signals. JSON in, JSON out.",
  },
  {
    kicker: "PUSH",
    title: "Watchers",
    body: "Webhook notifications the moment a tracked company, person, or post changes.",
  },
  {
    kicker: "BULK",
    title: "Datasets",
    body: "Flat files of companies, people, and job records delivered on a schedule.",
  },
];

function Card({ surface }: { surface: Surface }) {
  const isMcp = surface.highlighted;
  return (
    <div
      className="relative rounded-[12px] flex flex-col items-start"
      style={{
        padding: "28px",
        gap: "12px",
        border: "1px solid transparent",
        background: isMcp
          ? "linear-gradient(#000, #000) padding-box, linear-gradient(170deg, #8681f7 0%, #000 100%) border-box"
          : "linear-gradient(#000, #000) padding-box, linear-gradient(170deg, rgba(255, 255, 255, 0.32) 0%, #000 100%) border-box",
      }}
    >
      {isMcp && (
        <span
          className="absolute font-mono uppercase"
          style={{
            top: "16px",
            right: "16px",
            fontSize: "10px",
            letterSpacing: "0.08em",
            color: "var(--purple-h)",
            lineHeight: 1,
          }}
        >
          NEW
        </span>
      )}
      <div
        className="font-mono uppercase"
        style={{
          color: "var(--text-3)",
          fontSize: "11px",
          letterSpacing: "0.08em",
          lineHeight: 1.2,
        }}
      >
        {surface.kicker}
      </div>
      <h3
        className="m-0"
        style={{
          color: "var(--text-1)",
          fontSize: "24px",
          fontWeight: 600,
          letterSpacing: "-0.18px",
          lineHeight: "28px",
        }}
      >
        {surface.title}
      </h3>
      <p
        className="m-0"
        style={{
          color: "var(--text-2)",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        {surface.body}
      </p>
    </div>
  );
}

export function Surfaces() {
  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[64px] md:py-[80px] flex flex-col items-center gap-[80px]">
        <header className="flex flex-col items-center gap-[14px] w-full pt-[6px]">
          <div
            className="font-semibold text-[14px] leading-[17px] uppercase text-center"
            style={{ color: "#8681f7", letterSpacing: "1.54px" }}
          >
            ONE DATA LAYER, FOUR SURFACES
          </div>
          <h2
            className="font-semibold text-[26px] sm:text-[40px] text-center m-0 pt-[6px]"
            style={{
              color: "#fafafa",
              letterSpacing: "-0.6px",
              lineHeight: "1.05",
            }}
          >
            The conversational way to hit Crustdata.
          </h2>
          <p
            className="font-normal text-[18px] text-center max-w-[640px] m-0"
            style={{ color: "#a1a1aa", lineHeight: 1.4 }}
          >
            Same 800M profiles and 200M companies. Pick the surface that fits
            the stack.
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 w-full"
          style={{ gap: "24px" }}
        >
          {surfaces.map((s) => (
            <Card key={s.title} surface={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
