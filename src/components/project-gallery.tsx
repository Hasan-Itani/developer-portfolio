"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProjectMedia } from "@/content/project-media";

export function ProjectGallery({
  media,
  title,
}: {
  media: ProjectMedia;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : media.gallery[selected];
  const step = (direction: number) =>
    setSelected((current) =>
      current === null
        ? null
        : (current + direction + media.gallery.length) % media.gallery.length,
    );

  return (
    <section
      className="project-gallery"
      aria-labelledby="gallery-heading"
      id="gallery"
    >
      <div className="gallery-heading">
        <div>
          <p className="mono">INSIDE THE PROJECT</p>
          <h2 id="gallery-heading">The work, in view.</h2>
        </div>
        <p>{media.note}</p>
      </div>
      <div className="gallery-grid">
        {media.gallery.map((item, index) => (
          <figure
            className={`gallery-item${item.height > item.width ? " gallery-portrait" : ""}`}
            key={item.src}
          >
            <a
              className="gallery-image-link"
              href={item.src}
              aria-label={`Enlarge image: ${item.title}`}
              onClick={(event) => {
                if (
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return;
                event.preventDefault();
                setSelected(index);
                dialog.current?.showModal();
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes={
                  item.height > item.width
                    ? "(max-width: 700px) 80vw, 320px"
                    : index === 0
                      ? "(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 64px), calc(100vw - 112px)"
                      : "(max-width: 700px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), 48vw"
                }
              />
              <span className="image-enlarge">View full size</span>
            </a>
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
              <p className="gallery-contribution">
                <span>My contribution</span>
                {item.contribution}
              </p>
              <details className="capture-note">
                <summary>Capture notes</summary>
                <p>{item.limitation}</p>
              </details>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={`${title} screenshot viewer`}
        onClose={() => setSelected(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            step(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        <div className="image-dialog-bar">
          <span className="mono" aria-live="polite">
            {selected === null
              ? ""
              : `${selected + 1} / ${media.gallery.length}`}
          </span>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            autoFocus
          >
            Close
          </button>
        </div>
        {active && (
          <>
            <div className="image-dialog-stage">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="100vw"
                loading="eager"
              />
            </div>
            <div className="image-dialog-caption">
              <h3>{active.title}</h3>
              <p>{active.caption}</p>
            </div>
            <div className="image-dialog-controls">
              <button type="button" onClick={() => step(-1)}>
                Previous
              </button>
              <a href={active.src} target="_blank" rel="noopener noreferrer">
                Open original PNG
              </a>
              <button type="button" onClick={() => step(1)}>
                Next
              </button>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
