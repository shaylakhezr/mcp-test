import type { ReactNode } from "react";

type Status = "success" | "warning" | "info" | "brand" | "neutral";

const statusStyles: Record<
  Status,
  { bg: string; border: string; fg: string }
> = {
  success: { bg: "var(--green-s)",  border: "var(--green-s)",  fg: "var(--green)" },
  warning: { bg: "var(--amber-s)",  border: "var(--amber-s)",  fg: "var(--amber)" },
  info:    { bg: "var(--purple-s)", border: "var(--purple-b)", fg: "var(--purple-h)" },
  brand:   { bg: "var(--purple-s)", border: "var(--purple-b)", fg: "var(--purple-h)" },
  neutral: { bg: "var(--raised)",   border: "var(--border)",   fg: "var(--text-3)" },
};

type PillProps = { label: string; status: Status; withDot?: boolean };

export function StatusPill({ label, status, withDot = true }: PillProps) {
  const s = statusStyles[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-mono text-[10px] tracking-[0.08em] uppercase shrink-0"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.fg }}
    >
      {withDot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "currentColor", boxShadow: "0 0 8px currentColor" }}
        />
      )}
      {label}
    </span>
  );
}

type ChromeProps = {
  endpoint?: string;
  pill?: PillProps;
  bar?: ReactNode;
  noBar?: boolean;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
};

export function TerminalChrome({
  endpoint,
  pill,
  bar,
  noBar,
  className = "",
  bodyClassName = "p-5",
  children,
}: ChromeProps) {
  return (
    <div
      className={`bg-card border border-border rounded-lg overflow-hidden font-mono ${className}`}
    >
      {!noBar && (
        <div
          className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border"
          style={{ background: "var(--overlay)" }}
        >
          {bar ?? (
            <>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-l)" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-l)" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-l)" }} />
              {endpoint && (
                <span
                  className="flex-1 min-w-0 truncate text-[12px] pl-2"
                  style={{ color: "var(--text-3)" }}
                >
                  {endpoint}
                </span>
              )}
              {pill && <StatusPill {...pill} />}
            </>
          )}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
