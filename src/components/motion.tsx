"use client";
import { useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export function Motion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [reduced, setReduced] = useState(false);
  useGSAP(
    () => {
      if (reduced) return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const headlines = scope.current?.querySelectorAll("[data-hero-line]");
        if (headlines?.length)
          gsap.from(headlines, {
            yPercent: 105,
            rotation: 3,
            duration: 1.15,
            stagger: 0.14,
            ease: "power3.out",
          });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 34,
            opacity: 0.25,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 94%", once: true },
          });
        });
        gsap.to(".scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
        });
        if (scope.current?.querySelector(".timeline"))
          gsap.fromTo(
            ".timeline-rail span",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".timeline",
                start: "top 70%",
                end: "bottom 70%",
                scrub: 0.4,
              },
            },
          );
      });
      media.add(
        "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
        () => {
          if (scope.current?.querySelector(".hero"))
            gsap.to(".hero-orbit", {
              y: 95,
              rotation: 38,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 0.7,
              },
            });
          gsap.utils
            .toArray<HTMLElement>(".work-chapter")
            .forEach((chapter) => {
              gsap.fromTo(
                chapter.querySelector(".project-visual"),
                { scale: 0.94, rotation: -1.5 },
                {
                  scale: 1,
                  rotation: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: chapter,
                    start: "top 85%",
                    end: "top 15%",
                    scrub: 0.6,
                  },
                },
              );
              gsap.fromTo(
                chapter.querySelector(".chapter-track span"),
                { scaleX: 0 },
                {
                  scaleX: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: chapter,
                    start: "top 55%",
                    end: "bottom 55%",
                    scrub: 0.3,
                  },
                },
              );
            });
        },
      );
      return () => media.revert();
    },
    { scope, dependencies: [pathname, reduced], revertOnUpdate: true },
  );
  return (
    <div ref={scope} data-motion={reduced ? "reduced" : "system"}>
      <div className="scroll-progress" aria-hidden="true" />
      {children}
      <div className="motion-preference wrap">
        <button
          type="button"
          aria-pressed={reduced}
          onClick={() => setReduced(!reduced)}
        >
          {reduced ? "Motion reduced — use system preference" : "Reduce motion"}
        </button>
      </div>
    </div>
  );
}
