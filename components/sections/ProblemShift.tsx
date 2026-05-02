import { PainSwitcher } from "@/components/sections/PainSwitcher";

export function ProblemShift() {
  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[120px]">
        <PainSwitcher />
      </div>
    </section>
  );
}
