import Link from "next/link";
import { gmailComposeUrl, site } from "@/content/site";
import { MobileMenu } from "./mobile-menu";
const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
];
export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Hasan Itani, home">
        hi<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-contact" href="/#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <span className="header-location mono">BASED IN LEBANON</span>
      <MobileMenu links={navigation} />
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer wrap">
      <Link className="wordmark" href="/" aria-label="Back to home">
        hi<span>.</span>
      </Link>
      <span className="mono">Hasan Itani · Software & interaction</span>
      <a href={site.github}>GitHub ↗</a>
      <a href={site.linkedin}>LinkedIn ↗</a>
      <a className="back-top" href="#top">
        Back to top ↑
      </a>
    </footer>
  );
}
export function Contact() {
  return (
    <section id="contact" className="contact wrap">
      <div className="section-label mono">
        <span>05 / CONTACT</span>
        <span>THE NEXT CONVERSATION</span>
      </div>
      <p className="contact-intro">Have something in mind?</p>
      <h2 data-reveal>
        Let’s build
        <br />
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Hasan Itani using Gmail (opens in a new tab)"
        >
          something good.<span aria-hidden="true">↗</span>
        </a>
      </h2>
      <div className="contact-bottom">
        <a
          className="text-link"
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Email ${site.email} using Gmail (opens in a new tab)`}
        >
          {site.email} <span aria-hidden="true">↗</span>
        </a>
        <span className="mono">WEB PRODUCTS. INTERACTIVE EXPERIENCES.</span>
      </div>
    </section>
  );
}
