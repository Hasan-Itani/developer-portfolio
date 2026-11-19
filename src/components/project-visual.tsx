import Image from "next/image";
import type { Project } from "@/content/projects";
import type { ProjectImage } from "@/content/project-media";

export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const image = project.media.featured;
  return <ProjectCapture image={image} kind={project.visual} large={large} />;
}

export function ProjectCapture({
  image,
  kind,
  large = false,
}: {
  image: ProjectImage;
  kind: Project["visual"];
  large?: boolean;
}) {
  return (
    <figure className={`project-visual screenshot-visual screenshot-${kind}`}>
      <div className="project-image-frame">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={
            large
              ? "(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 64px), calc(100vw - 112px)"
              : "(max-width: 700px) calc(100vw - 40px), (max-width: 999px) calc(100vw - 64px), 48vw"
          }
          preload={large}
        />
      </div>
      <figcaption>
        <span>
          {kind === "hotel"
            ? "Application capture · Demo data"
            : "Gameplay capture · Windows development build"}
        </span>
        <span>
          {image.width} × {image.height}
        </span>
      </figcaption>
    </figure>
  );
}
