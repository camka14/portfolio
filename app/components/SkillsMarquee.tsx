"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type SkillsMarqueeProps = {
  items: string[];
};

const BUFFER_GROUPS = 3;
const MIN_GROUPS = 4;
const INITIAL_GROUPS = 8;
const FALLBACK_LIST_WIDTH = 1000;

export default function SkillsMarquee({ items }: SkillsMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [groupCount, setGroupCount] = useState(INITIAL_GROUPS);
  const [listWidth, setListWidth] = useState(FALLBACK_LIST_WIDTH);

  useEffect(() => {
    const updateGroupCount = () => {
      const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;
      const measuredListWidth = measureRef.current?.getBoundingClientRect().width ?? 0;

      if (!containerWidth || !measuredListWidth) {
        return;
      }

      const visibleGroups = Math.ceil(containerWidth / measuredListWidth);
      const nextGroupCount = Math.max(MIN_GROUPS, visibleGroups + BUFFER_GROUPS);

      setListWidth(measuredListWidth);
      setGroupCount(nextGroupCount);
    };

    updateGroupCount();

    const resizeObserver = new ResizeObserver(updateGroupCount);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    if (measureRef.current) {
      resizeObserver.observe(measureRef.current);
    }

    document.fonts?.ready.then(updateGroupCount).catch(() => undefined);
    window.addEventListener("resize", updateGroupCount);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateGroupCount);
    };
  }, [items]);

  const groups = useMemo(() => Array.from({ length: groupCount }), [groupCount]);
  const duration = Math.max(24, Math.min(42, listWidth / 32));
  const marqueeStyle = {
    "--marquee-list-width": `${listWidth}px`,
    "--marquee-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden border-y border-zinc-900/10 bg-white/70 py-5 dark:border-white/10 dark:bg-zinc-950/70"
    >
      <div
        aria-hidden="true"
        className="marquee-track flex w-max text-sm font-medium text-zinc-600 dark:text-zinc-300"
        style={marqueeStyle}
      >
        {groups.map((_, groupIndex) => (
          <div
            ref={groupIndex === 0 ? measureRef : undefined}
            key={groupIndex}
            className="marquee-list flex shrink-0 items-center gap-10 pr-10"
          >
            {items.map((item) => (
              <span key={`${item}-${groupIndex}`} className="whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">{items.join(", ")}</span>
    </div>
  );
}
