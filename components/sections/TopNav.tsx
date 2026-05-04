"use client";

import { useEffect, useState } from "react";

const navLinks = ["Products", "Use cases", "Docs", "Pricing"];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        width: "calc(100% - 32px)",
        maxWidth: "960px",
        pointerEvents: "none",
      }}
    >
      <nav
        className="flex items-center justify-between rounded-[14px] py-2.5 pl-5 pr-[14px]"
        style={{
          pointerEvents: "auto",
          background: scrolled ? "rgba(25, 25, 26, 0.72)" : "#19191a",
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(12px)" : undefined,
          border: scrolled
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid transparent",
          transition:
            "background 250ms ease-out, border-color 250ms ease-out, backdrop-filter 250ms ease-out",
        }}
      >
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logos/Crustdata.svg"
            alt=""
            width={36}
            height={32}
            style={{ width: "36px", height: "auto" }}
          />
          <span
            className="font-normal text-[24px] leading-[23.25px]"
            style={{ color: "#fafafa" }}
          >
            Crustdata
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-7 list-none">
          {navLinks.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="font-medium text-[14px] leading-[21.7px] text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/demo"
          className="rounded-[8px] px-3 py-2 font-medium text-[14px] leading-[21px] text-white"
          style={{ background: "#5752ca" }}
        >
          Book a Demo
        </a>
      </nav>
    </div>
  );
}
