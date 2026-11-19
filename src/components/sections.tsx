import Link from "next/link";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { capabilities, site } from "@/content/site";
import { ProjectShowcase } from "./project-showcase";
export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-eyebrow mono">
        <span>FULL-STACK SOFTWARE ENGINEER</span>
        <span>WEB / INTERACTIVE / GAMES</span>
      </div>
      <h1 id="hero-title">
        <span className="hero-line">
          <span data-hero-line>Hasan</span>
        </span>
        <span className="hero-line hero-second">
          <span data-hero-line>
            Itani<span className="hero-period">.</span>
          </span>
          <span className="hero-orbit" aria-hidden="true">
            <span />
            <i />
            <b>+</b>
          </span>
        </span>
      </h1>
      <div className="hero-bottom">
        <span className="hero-index mono" aria-hidden="true">
          ENGINEERED WITH INTENT.
          <br />
          BUILT TO BE EXPERIENCED.
        </span>
        <div className="hero-description">
          <p>{site.intro}</p>
          <div className="hero-actions">
            <a className="button" href="#work">
              Explore my work
            </a>
            <a className="text-link" href={site.github}>
              GitHub
            </a>
            <a className="text-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="hero-credentials" aria-label="Background">
        <span className="mono">EXPERIENCE & EDUCATION</span>
        <a href="#experience">
          Full-stack internship <span>Fekrat Al Youm Technologies</span>
        </a>
        <a href="#experience">
          Frontend internship <span>Techryt</span>
        </a>
        <a href="#about">
          BSc Computer Science <span>Lebanese International University</span>
        </a>
      </div>
      <div className="hero-baseline mono">
        <span>SELECTED WORK & EXPERIENCE</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
export function SelectedWork() {
  return (
    <section id="work" className="work wrap">
      <div className="section-label mono">
        <span>01 / SELECTED WORK</span>
        <span>WEB APPLICATIONS & INTERACTIVE SYSTEMS</span>
      </div>
      <div className="section-heading">
        <h2 data-reveal>
          Different mediums.
          <br />
          <span className="muted">Same intent.</span>
        </h2>
        <p>
          Useful interfaces. Considered systems. A closer look at what I’m
          building and the decisions behind it.
        </p>
      </div>
      <div className="work-chapters">
        {projects
          .filter((p) => p.featured && !p.needsReview)
          .map((project, index) => (
            <article
              className="work-chapter"
              key={project.slug}
              id={project.slug}
            >
              <div className="project-stage">
                <ProjectShowcase
                  title={project.title}
                  kind={project.visual}
                  previews={project.media.previews}
                />
                <div className="chapter-track" aria-hidden="true">
                  <span />
                </div>
              </div>
              <div className="project-copy">
                <div className="project-meta mono">
                  <span>
                    0{index + 1} / {project.category}
                  </span>
                  <span className="status">
                    <i />
                    {project.status}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-headline">{project.shortTitle}</p>
                <p>{project.summary}</p>
                <div className="project-focus">
                  <span className="mono">ENGINEERING FOCUS</span>
                  <p>{project.focus}</p>
                </div>
                <ul className="tags" aria-label="Technologies">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <Link
                  className="text-link project-link"
                  href={`/work/${project.slug}`}
                >
                  Read the case study
                </Link>
              </div>
            </article>
          ))}
      </div>
      <p className="work-note mono">
        TWO PROJECTS. TWO DIFFERENT ENGINEERING CHALLENGES.
      </p>
    </section>
  );
}
export function ExperienceSection() {
  return (
    <section id="experience" className="experience wrap">
      <div className="section-label mono">
        <span>02 / EXPERIENCE</span>
        <span>CONTRIBUTING WITHIN TEAMS</span>
      </div>
      <div className="section-heading">
        <h2 data-reveal>
          Real teams.
          <br />
          <span className="muted">Real responsibility.</span>
        </h2>
        <p>
          Two internships spanning frontend interactions, full-stack features,
          and the details that make a release work.
        </p>
      </div>
      <div className="timeline">
        <div className="timeline-rail" aria-hidden="true">
          <span />
        </div>
        {experience.map((item, index) => (
          <article className="experience-item" key={item.company} data-reveal>
            <div className="experience-date mono">
              <span className="timeline-dot" />0{index + 1}
              <span>{item.period}</span>
            </div>
            <div className="experience-body">
              <p className="role mono">{item.role}</p>
              <h3>{item.company}</h3>
              <p className="experience-summary">{item.summary}</p>
              <ul className="contributions">
                {item.contributions.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Technologies">
                {item.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="capabilities">
      <div className="wrap">
        <div className="section-label mono">
          <span>03 / CAPABILITIES</span>
          <span>TOOLS FOLLOW THE PROBLEM</span>
        </div>
        <h2 data-reveal>
          From interface
          <br />
          to underlying system.
        </h2>
        <div className="capability-list">
          {capabilities.map((item, index) => (
            <article key={item.title} data-reveal>
              <span className="mono">
                0{index + 1} / {item.category}
              </span>
              <h3>{item.title}</h3>
              <div>
                <p>{item.text}</p>
                <span className="mono tools">{item.tools}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function AboutSection() {
  return (
    <section id="about" className="about wrap">
      <div className="section-label mono">
        <span>04 / ABOUT</span>
        <span>THE PERSON BEHIND THE SYSTEMS</span>
      </div>
      <div className="about-layout">
        <h2 data-reveal>
          Curious by nature.
          <br />
          <span className="muted">Deliberate by design.</span>
        </h2>
        <div>
          <p className="about-lead">{site.about}</p>
          <div className="education">
            <span className="mono">EDUCATION / {site.education.date}</span>
            <h3>{site.education.degree}</h3>
            <p>{site.education.school}</p>
          </div>
          <a className="text-link" href={site.linkedin}>
            More on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
