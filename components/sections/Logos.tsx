import Image from "next/image";

type Logo = { src: string; alt: string; w: number };

const row1: Logo[] = [
  { src: "/logos/adri.png", alt: "Adri AI", w: 128 },
  { src: "/logos/agent.png", alt: "agent.ai", w: 128 },
  { src: "/logos/centralize.png", alt: "Centralize", w: 128 },
  { src: "/logos/eastside.png", alt: "Eastside", w: 128 },
  { src: "/logos/envisso.png", alt: "Envisso", w: 128 },
  { src: "/logos/floating.png", alt: "Floating", w: 128 },
  { src: "/logos/hirequotient.png", alt: "HireQuotient", w: 128 },
  { src: "/logos/greenlite.png", alt: "Greenlite", w: 144 },
];

const row2: Logo[] = [
  { src: "/logos/vari.png", alt: "Vari", w: 128 },
  { src: "/logos/lambdatest.png", alt: "LambdaTest", w: 128 },
  { src: "/logos/openspace.png", alt: "OpenSpace", w: 144 },
  { src: "/logos/origami.png", alt: "Origami Agents", w: 128 },
  { src: "/logos/revi.png", alt: "Revi", w: 144 },
  { src: "/logos/riviera.png", alt: "Riviera", w: 128 },
  { src: "/logos/rox.png", alt: "Rox", w: 128 },
  { src: "/logos/sybill.png", alt: "Sybill", w: 128 },
];

const fadeMask =
  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)";

function MarqueeRow({
  logos,
  direction,
}: {
  logos: Logo[];
  direction: "left" | "right";
}) {
  const duration = direction === "left" ? 45 : 50;
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        maskImage: fadeMask,
        WebkitMaskImage: fadeMask,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          animationName:
            direction === "left" ? "marquee-left" : "marquee-right",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "64px",
              paddingRight: "64px",
              flexShrink: 0,
            }}
            aria-hidden={copy === 1}
          >
            {logos.map((l) => (
              <Image
                key={`${copy}-${l.alt}`}
                src={l.src}
                alt={copy === 0 ? l.alt : ""}
                width={l.w}
                height={l.w === 144 ? 72 : 64}
                className="opacity-80"
                style={{
                  flexShrink: 0,
                  height: "64px",
                  width: "auto",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Logos() {
  return (
    <section style={{ background: "#000" }}>
      <div className="mx-auto max-w-[960px] px-6 py-[64px] md:py-[80px] flex flex-col items-center gap-8">
        <p
          className="font-normal text-[14px] leading-[21px]"
          style={{ color: "#aaa" }}
        >
          Trusted by revenue and AI teams at
        </p>
        <div className="w-full flex flex-col gap-8">
          <MarqueeRow logos={row1} direction="left" />
          <MarqueeRow logos={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}
