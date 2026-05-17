"use client";

import Link from "next/link";
import { useState } from "react";
import { siteNav } from "@/lib/data";
import { assetPath } from "@/lib/paths";

export function Header() {
  const [open, setOpen] = useState(false);
  const projectLinks = [
    { label: "CRM GROUP", href: "/projects/crm-group" },
    { label: "MESSAGE", href: "/projects/integrated-message" },
    { label: "ANALYTICS", href: "/projects/analytics" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E1D8] bg-[#F8F7F2]/94 backdrop-blur lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] lg:border-b-0 lg:border-r">
      <div className="container flex h-16 items-center justify-between lg:h-full lg:w-full lg:flex-col lg:items-stretch lg:px-7 lg:py-8">
        <div>
          <Link href="/" className="text-[15px] font-bold tracking-[0] text-[#111827] lg:text-2xl">
            김원태
          </Link>
          <p className="mt-2 hidden text-sm leading-6 text-[#6B7280] lg:block">
            Commerce Platform Planner
          </p>
          <p className="mt-6 hidden border-l-2 border-[#00B894] pl-4 text-sm leading-7 text-[#4B5563] lg:block">
            CRM / Message / Analytics / API Integration
          </p>
        </div>

        <nav className="hidden text-sm font-bold uppercase tracking-[0.08em] text-[#6B7280] lg:mt-12 lg:grid lg:gap-4">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="group flex items-center justify-between hover:text-[#111827]">
              <span>{item.label}</span>
              <span className="h-px w-0 bg-[#00B894] transition-all group-hover:w-8" />
            </Link>
          ))}
          <div className="mt-1 grid gap-2 border-l border-[#E5E1D8] pl-4 text-xs font-semibold tracking-[0.04em] text-[#9CA3AF]">
            {projectLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#00B894]">
                ㄴ {item.label}
              </Link>
            ))}
          </div>
          <a
            href={assetPath("/resume-placeholder.pdf")}
            className="mt-5 inline-flex justify-center rounded-full border border-[#111827] px-4 py-2 text-[#111827] transition hover:bg-[#111827] hover:text-white"
          >
            Resume PDF
          </a>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E1D8] text-sm font-semibold lg:hidden"
        >
          {open ? "×" : "☰"}
        </button>

        <div className="hidden lg:block">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Available</p>
          <a href="mailto:wongt93@naver.com" className="mt-2 block text-sm text-[#6B7280] hover:text-[#111827]">
            wongt93@naver.com
          </a>
          <p className="mt-6 text-xs leading-5 text-[#9CA3AF]">© 2026 Kim Wontae</p>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#E5E1D8] bg-[#F8F7F2] lg:hidden">
          <nav className="container grid gap-1 py-4 text-sm font-semibold text-[#111827]">
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            {projectLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 pl-5 text-xs text-[#6B7280] hover:bg-white"
              >
                ㄴ {item.label}
              </Link>
            ))}
            <a
              href={assetPath("/resume-placeholder.pdf")}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#111827] px-4 py-3 text-center text-white"
            >
              Resume PDF
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#E5E1D8] py-8">
      <div className="container flex flex-col justify-between gap-2 text-sm text-[#6B7280] sm:flex-row">
        <p>© 2026 Kim Wontae</p>
        <p>Commerce Platform Planner</p>
      </div>
    </footer>
  );
}
