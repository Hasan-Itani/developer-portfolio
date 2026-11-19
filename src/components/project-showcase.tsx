"use client";

import { useId, useState } from "react";
import type { ProjectMedia } from "@/content/project-media";
import { ProjectCapture } from "./project-visual";

export function ProjectShowcase({
  title,
  kind,
  previews,
}: {
  title: string;
  kind: "hotel" | "zero";
  previews: ProjectMedia["previews"];
}) {
  const [selected, setSelected] = useState(0);
  const imageId = useId();
  const current = previews[selected];
  return (
    <div className="project-showcase">
      <div
        className="preview-controls"
        role="group"
        aria-label={`${title} screenshot views`}
      >
        {previews.map((preview, index) => (
          <button
            type="button"
            key={preview.image.src}
            aria-pressed={index === selected}
            aria-controls={imageId}
            onClick={() => setSelected(index)}
          >
            {preview.label}
          </button>
        ))}
      </div>
      <div id={imageId} className="preview-frame">
        <ProjectCapture image={current.image} kind={kind} />
      </div>
      <div
        className="preview-description"
        aria-live="polite"
        aria-atomic="true"
      >
        <p>{current.image.title}</p>
        <span>{current.image.caption}</span>
      </div>
    </div>
  );
}
