"use client";

interface TooltipProps {
  x: number;
  y: number;
  title: string;
}

export function Tooltip({ x, y, title }: TooltipProps) {
  return (
    <div
      className="pointer-events-none fixed z-50 rounded bg-black/80 px-2 py-1 text-xs text-white"
      style={{ left: x, top: y }}
    >
      {title}
    </div>
  );
}
