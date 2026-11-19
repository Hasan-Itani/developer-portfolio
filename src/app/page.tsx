import {
  Hero,
  SelectedWork,
  ExperienceSection,
  CapabilitiesSection,
  AboutSection,
} from "@/components/sections";
import { Contact } from "@/components/layout";
import { site } from "@/content/site";
export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    sameAs: [site.github, site.linkedin],
    alumniOf: { "@type": "CollegeOrUniversity", name: site.education.school },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <ExperienceSection />
        <CapabilitiesSection />
        <AboutSection />
        <Contact />
      </main>
    </>
  );
}
