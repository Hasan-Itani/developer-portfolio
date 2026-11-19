"use client";

import { useRef } from "react";
import Link from "next/link";

export function MobileMenu({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <details
      ref={menu}
      className="mobile-menu"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary>
        Menu <span aria-hidden="true">+</span>
      </summary>
      <nav aria-label="Mobile navigation">
        {[...links, { label: "Contact ↗", href: "/#contact" }].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              if (menu.current) menu.current.open = false;
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
