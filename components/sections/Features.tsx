type Tool = { name: string; meta: string };

type Block = {
  title: string;
  body: string;
  header: string;
  tools: Tool[];
  reversed?: boolean;
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
    reversed: true,
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
    reversed: true,
    gradientBorder: true,
  },
];

function FeatureText({ block }: { block: Block }) {
  return (
    <div className="flex flex-col gap-4 w-full md:w-[346px] shrink-0">
      <h3
        className="font-semibold text-[24px] m-0 whitespace-pre-line"
        style={{
          color: "#fafafa",
          letterSpacing: "-0.2px",
          lineHeight: "26px",
        }}
      >
        {block.title}
      </h3>
      <p
        className="font-normal text-[20px] m-0"
        style={{ color: "#a1a1aa", lineHeight: "22.48px" }}
      >
        {block.body}
      </p>
    </div>
  );
}

function FeatureCard({ block }: { block: Block }) {
  return (
    <div
      className="flex flex-col items-center rounded-[16px] shrink-0 w-full md:w-[370px]"
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
          ...(block.gradientBorder
            ? {
                border: "1px solid transparent",
                background: `linear-gradient(#000, #000) padding-box, linear-gradient(${
                  block.reversed ? "225deg" : "135deg"
                }, rgba(123, 111, 224, 0.9) 0%, rgba(123, 111, 224, 0.7) 35%, rgba(255, 255, 255, 0.08) 75%, rgba(255, 255, 255, 0.06) 100%) border-box`,
              }
            : {
                border: "1px solid #8681f7",
              }),
        }}
      >
        <div
          className="font-mono text-[10.5px] uppercase w-full"
          style={{
            color: "#52525b",
            letterSpacing: "1.26px",
            lineHeight: "16.27px",
            paddingBottom: "11px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {block.header}
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

function Feature({ block }: { block: Block }) {
  return (
    <div className="w-full max-w-[960px] flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-0">
        {block.reversed ? (
          <>
            <FeatureCard block={block} />
            <FeatureText block={block} />
          </>
        ) : (
          <>
            <FeatureText block={block} />
            <FeatureCard block={block} />
          </>
        )}
      </div>
      <div
        aria-hidden
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(90deg, #000 5%, #8681F7 51%, #000 100%)",
        }}
      />
    </div>
  );
}

export function Features() {
  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[120px] flex flex-col items-center">
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
            className="font-semibold text-[32px] sm:text-[40px] text-center m-0 pt-[6px] max-w-[680px]"
            style={{
              color: "#fafafa",
              letterSpacing: "-0.6px",
              lineHeight: "1.05",
            }}
          >
            Four capabilities, 23 tools, one conversation.
          </h2>
          <p
            className="font-normal text-[18px] text-center max-w-[620px] m-0"
            style={{ color: "#a1a1aa", lineHeight: 1.4 }}
          >
            Every surface of the Crustdata platform, exposed as an MCP tool
            Claude can reach for.
          </p>
        </header>

        <div
          className="flex flex-col items-center w-full"
          style={{ marginTop: "80px", gap: "120px" }}
        >
          <Feature block={blocks[0]} />
          <Feature block={blocks[1]} />
        </div>

        <div
          className="flex flex-col items-center w-full"
          style={{ marginTop: "240px", gap: "120px" }}
        >
          <Feature block={blocks[2]} />
          <Feature block={blocks[3]} />
        </div>
      </div>
    </section>
  );
}
