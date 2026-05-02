const rows = [
  { name: "Finch", hq: "SF", hc: 142 },
  { name: "Vanta", hq: "NY", hc: 188 },
  { name: "Moss", hq: "Toronto", hc: 97 },
  { name: "Persona", hq: "SF", hc: 312 },
];

export function ConversationalMock() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border"
        style={{ background: "var(--overlay)" }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className="w-5 h-5 rounded-md shrink-0 flex items-center justify-center"
            style={{ background: "var(--purple)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--text-1)" }}
            />
          </span>
          <span
            className="font-sans text-[13px] font-semibold truncate"
            style={{ color: "var(--text-1)" }}
          >
            Crustdata MCP
          </span>
        </div>
        <span
          className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-mono text-[10px] tracking-[0.08em] uppercase shrink-0"
          style={{
            background: "var(--green-s)",
            border: "1px solid var(--green-s)",
            color: "var(--green)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "currentColor",
              boxShadow: "0 0 8px currentColor",
            }}
          />
          Connected
        </span>
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-5">
        <div className="flex flex-row-reverse">
          <div
            className="rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] font-sans text-[14px] leading-[1.5]"
            style={{
              background: "var(--raised)",
              border: "1px solid var(--border)",
              color: "var(--text-1)",
            }}
          >
            Find Series B SaaS in NYC, 100–500 employees
          </div>
        </div>

        <div>
          <h4
            className="font-sans text-[15px] font-semibold mb-3"
            style={{ color: "var(--text-1)" }}
          >
            Found 47 matching companies
          </h4>
          <div
            className="rounded-md border border-border overflow-hidden"
            style={{ background: "var(--overlay)" }}
          >
            <div
              className="grid grid-cols-[1fr_1fr_auto] gap-3 px-3 py-2 border-b border-border font-mono text-[10px] tracking-[0.08em] uppercase"
              style={{ color: "var(--text-3)" }}
            >
              <span>Company</span>
              <span>HQ</span>
              <span className="text-right">Headcount</span>
            </div>
            {rows.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[1fr_1fr_auto] gap-3 px-3 py-2 border-b border-border last:border-b-0 items-center font-sans text-[13px]"
              >
                <span
                  className="truncate"
                  style={{ color: "var(--text-1)" }}
                >
                  {r.name}
                </span>
                <span
                  className="truncate"
                  style={{ color: "var(--text-2)" }}
                >
                  {r.hq}
                </span>
                <span
                  className="text-right font-mono"
                  style={{ color: "var(--text-2)" }}
                >
                  {r.hc}
                </span>
              </div>
            ))}
            <div
              className="px-3 py-2 font-mono text-[11px] tracking-[0.04em] border-t border-border"
              style={{ color: "var(--text-3)" }}
            >
              + 43 more
            </div>
          </div>
        </div>
      </div>

      <div
        className="px-3 py-2.5 border-t border-border flex items-center gap-3"
        style={{ background: "var(--overlay)" }}
      >
        <span
          aria-hidden
          className="w-7 h-7 rounded-md shrink-0 flex items-center justify-center font-sans text-[14px] leading-none"
          style={{
            background: "var(--raised)",
            border: "1px solid var(--border-l)",
            color: "var(--text-2)",
          }}
        >
          +
        </span>
        <span
          className="flex-1 min-w-0 font-sans text-[14px]"
          style={{ color: "var(--text-3)" }}
        >
          Ask anything
        </span>
        <span
          aria-hidden
          className="w-7 h-7 rounded-md shrink-0 flex items-center justify-center font-sans text-[14px] leading-none"
          style={{
            background: "var(--purple)",
            color: "var(--text-1)",
          }}
        >
          ↑
        </span>
      </div>
    </div>
  );
}
