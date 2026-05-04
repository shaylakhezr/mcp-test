type Surface = {
  kicker: string;
  title: string;
  body: string;
};

const mcpSurface: Surface = {
  kicker: "CONVERSATIONAL",
  title: "MCP Server",
  body: "All 23 tools available to Claude, Cursor, and any MCP client as natural-language commands.",
};

const surfaces: Surface[] = [
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

function HeroCard({ surface }: { surface: Surface }) {
  return (
    <div
      className="rounded-[12px] flex flex-col items-center w-full"
      style={{
        padding: "25px 23px",
        gap: "12px",
        border: "1px solid transparent",
        background:
          "linear-gradient(180deg, #1e1d30 0%, #000 100%) padding-box, linear-gradient(170deg, #8681f7 0%, #000 100%) border-box",
      }}
    >
      <div
        className="font-medium text-[14px] uppercase text-center w-full"
        style={{
          color: "#8681f7",
          letterSpacing: "1.2px",
          lineHeight: "15.5px",
        }}
      >
        {surface.kicker}
      </div>
      <div
        className="font-semibold text-[24px] text-center w-full"
        style={{
          color: "#fafafa",
          letterSpacing: "-0.18px",
          lineHeight: "23.4px",
        }}
      >
        {surface.title}
      </div>
      <p
        className="font-normal text-[16px] text-center m-0"
        style={{
          color: "#a1a1aa",
          lineHeight: "19.5px",
          maxWidth: "440px",
        }}
      >
        {surface.body}
      </p>
    </div>
  );
}

function SurfaceCard({ surface }: { surface: Surface }) {
  return (
    <div
      className="rounded-[12px] flex flex-col items-start"
      style={{
        flex: "1 0 0",
        minWidth: 0,
        padding: "25px 23px",
        gap: "12px",
        border: "1px solid transparent",
        background:
          "linear-gradient(#000, #000) padding-box, linear-gradient(170deg, rgba(255, 255, 255, 0.32) 0%, #000 100%) border-box",
      }}
    >
      <div
        className="font-medium text-[14px] uppercase w-full"
        style={{
          color: "#71717a",
          letterSpacing: "1.2px",
          lineHeight: "15.5px",
        }}
      >
        {surface.kicker}
      </div>
      <div
        className="font-semibold text-[24px] w-full"
        style={{
          color: "#fafafa",
          letterSpacing: "-0.18px",
          lineHeight: "23.4px",
        }}
      >
        {surface.title}
      </div>
      <p
        className="font-normal text-[16px] w-full m-0"
        style={{ color: "#a1a1aa", lineHeight: "19.5px" }}
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
            className="font-semibold text-[32px] sm:text-[40px] text-center m-0 pt-[6px]"
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

        <div className="flex flex-col w-full" style={{ gap: "24px" }}>
          <HeroCard surface={mcpSurface} />
          <div
            className="flex flex-col md:flex-row w-full"
            style={{ gap: "16px" }}
          >
            {surfaces.map((s) => (
              <SurfaceCard key={s.title} surface={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
