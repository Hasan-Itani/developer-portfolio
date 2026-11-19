import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectVisual } from "@/components/project-visual";
import { ProjectGallery } from "@/components/project-gallery";
import { Contact } from "@/components/layout";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.filter((p) => !p.needsReview).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/work/${slug}`,
    },
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && !p.needsReview);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main-content">
      <article className="case-study wrap">
        <Link className="text-link case-back" href="/#work">
          All selected work
        </Link>
        <div className="project-meta mono">
          <span>{project.category}</span>
          <span className="status">
            <i />
            {project.status}
          </span>
        </div>
        <h1 data-reveal>{project.title}</h1>
        <p className="case-deck">{project.summary}</p>
        <div className="case-facts">
          <div>
            <span className="mono">MY ROLE</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span className="mono">PROJECT STATUS</span>
            <p>{project.status}</p>
          </div>
          <div>
            <span className="mono">PROJECT LINKS</span>
            {project.links.map((link) => (
              <a className="text-link" key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="case-visual">
          <ProjectVisual project={project} large />
        </div>
        <section className="case-overview" aria-label="Project at a glance">
          {project.overview.map((item) => (
            <div key={item.label}>
              <h2 className="mono">{item.label}</h2>
              <p>{item.text}</p>
            </div>
          ))}
          <a href="#gallery" className="text-link">
            Explore the screenshots
          </a>
        </section>
        <div className="case-content">
          <aside>
            <p className="mono">INSIDE THIS PROJECT</p>
            <nav aria-label="Case study sections">
              <a href="#gallery">Project gallery</a>
              {project.caseStudy.map((section, i) => (
                <a key={section.heading} href={`#section-${i}`}>
                  0{i + 1} / {section.heading}
                </a>
              ))}
            </nav>
          </aside>
          <div>
            {project.caseStudy.map((section, index) => (
              <section
                data-reveal
                id={`section-${index}`}
                key={section.heading}
              >
                <span className="mono case-number">0{index + 1}</span>
                <h2>{section.heading}</h2>
                {section.body.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </section>
            ))}
            <section>
              <h2>Technology</h2>
              <ul className="tags">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <ProjectGallery media={project.media} title={project.title} />
        <Link className="next-project" href={`/work/${next.slug}`}>
          <span className="mono">NEXT CASE STUDY</span>
          <span>
            {next.title}
            <span aria-hidden="true">↗</span>
          </span>
        </Link>
      </article>
      <Contact />
    </main>
  );
}
