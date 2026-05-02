"use client";

import { useEffect, useState } from "react";

export function HeroChatInput() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 460);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className="hidden md:flex absolute items-center"
      style={{
        left: "50%",
        bottom: "-32px",
        width: "480px",
        height: "64px",
        borderRadius: "16px",
        border: "1px solid transparent",
        background:
          "linear-gradient(#1b1b1b, #1b1b1b) padding-box, linear-gradient(135deg, #A8A5A3 1%, #424140 96%) border-box",
        padding: "11px 16px 11px 17px",
        gap: "12px",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(24px)",
        transition:
          "opacity 700ms ease-out, transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      <span
        className="flex-1 font-medium text-[16px]"
        style={{
          lineHeight: "21px",
          backgroundImage:
            "linear-gradient(90deg, #d1d1d1 0%, #bebebe 46.15%, #8d8d8d 84.62%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        Write a message...
      </span>
      <button
        type="button"
        aria-label="Send"
        className="flex items-center justify-center shrink-0"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "9.143px",
          background: "#cc6c4b",
        }}
      >
        <span
          className="text-[16px]"
          style={{ color: "#eeeef5", lineHeight: "16px" }}
        >
          ↑
        </span>
      </button>
    </div>
  );
}
