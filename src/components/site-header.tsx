"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !navigation.current?.contains(event.target as Node) &&
        !toggle.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Ardit Avdiu home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            a<span>.</span>
          </span>
          <span>
            Ardit Avdiu<span className="brand-period">.</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          className={`primary-nav ${open ? "is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
          ref={navigation}
          onBlur={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget as Node) &&
              event.relatedTarget !== toggle.current
            )
              setOpen(false);
          }}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.label === "Work" && pathname.startsWith("/work/")
                  ? "nav-active"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            <span className="status-dot" />
            Let’s talk
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
