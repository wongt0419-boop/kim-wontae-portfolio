"use client";

import Link from "next/link";
import { useState } from "react";
import { siteNav } from "@/lib/data";
import { assetPath } from "@/lib/paths";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E1D8] bg-[#F8F7F2]/92 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-[15px] font-bold tracking-[0] text-[#111827]">
          김원태
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#6B7280] md:flex">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#111827]">
              {item.label}
            </Link>
          ))}
          <a
            href={assetPath("/resume-placeholder.pdf")}
            className="rounded-full border border-[#111827] px-4 py-2 text-[#111827] transition hover:bg-[#111827] hover:text-white"
          >
            Resume PDF
          </a>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E1D8] text-sm font-semibold md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#E5E1D8] bg-[#F8F7F2] md:hidden">
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
