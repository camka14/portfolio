"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type PortfolioMotionProps = {
  children: ReactNode;
};

export default function PortfolioMotion({ children }: PortfolioMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set("[data-hero-word], [data-scrub-word], .motion-image", {
          clearProps: "all",
        });
        return;
      }

      gsap.from("[data-hero-word]", {
        y: 38,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      const scrubWords = gsap.utils.toArray<HTMLElement>("[data-scrub-word]");
      if (scrubWords.length > 0) {
        gsap.fromTo(
          scrubWords,
          { opacity: 0.18, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: ".scrub-copy",
              start: "top 78%",
              end: "bottom 45%",
              scrub: 1,
            },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>(".motion-image").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.94, opacity: 0.72 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              end: "center 48%",
              scrub: 1,
            },
          },
        );

        gsap.to(element, {
          opacity: 0.38,
          filter: "brightness(0.72)",
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "bottom 70%",
            end: "bottom 22%",
            scrub: 1,
          },
        });
      });
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
