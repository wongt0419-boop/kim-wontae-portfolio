"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteNav } from "@/lib/data";
import { assetPath } from "@/lib/paths";

export function Header() {
  const [open, setOpen] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const menuId = "mobile-navigation-panel";
  const toggleId = "mobile-navigation-toggle";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (checkboxRef.current) {
          checkboxRef.current.checked = false;
        }
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
    setOpen(false);
  };

  return (
    <>
      <input
        ref={checkboxRef}
        id={toggleId}
        type="checkbox"
        className="mobile-menu-toggle sr-only"
        aria-hidden="true"
        onChange={(event) => setOpen(event.currentTarget.checked)}
      />
      <header className="sticky top-0 z-50 border-b border-[#E5E1D8] bg-[#F8F7F2]/94 backdrop-blur lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] lg:border-b-0 lg:border-r">
        <div className="container flex h-16 items-center justify-between lg:h-full lg:w-full lg:flex-col lg:items-stretch lg:px-7 lg:py-8">
          <div>
            <Link href="/" className="text-[15px] font-bold tracking-[0] text-[#111827] lg:text-2xl">
              김원태
            </Link>
            <p className="mt-2 hidden text-sm leading-6 text-[#6B7280] lg:block">Commerce Platform Planner</p>
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
            <a
              href={assetPath("/resume-placeholder.pdf")}
              className="group flex items-center justify-between text-[#111827] hover:text-[#00B894]"
            >
              <span>Resume</span>
              <span className="h-px w-0 bg-[#00B894] transition-all group-hover:w-8" />
            </a>
          </nav>

          <label
            htmlFor={toggleId}
            role="button"
            tabIndex={0}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls={menuId}
            className="relative z-[120] inline-flex h-11 w-11 cursor-pointer select-none items-center justify-center rounded-full border border-[#E5E1D8] bg-[#F8F7F2] text-sm font-semibold lg:hidden"
          >
            {open ? "×" : "☰"}
          </label>

          <div className="hidden lg:block">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Contact</p>
            <a href="mailto:wongt93@naver.com" className="mt-2 block text-sm text-[#6B7280] hover:text-[#111827]">
              wongt93@naver.com
            </a>
            <p className="mt-6 text-xs leading-5 text-[#9CA3AF]">© 2026 Kim Wontae</p>
          </div>
        </div>
      </header>

      <div className="mobile-menu-layer lg:hidden" role="presentation">
          <label
            htmlFor={toggleId}
            aria-label="메뉴 배경 닫기"
            className="absolute inset-0 block h-full w-full cursor-pointer bg-black/20"
          />
          <aside
            id={menuId}
            aria-label="모바일 메뉴"
            style={{ width: "min(320px, 85vw)" }}
            className="mobile-menu-panel"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#111827]">김원태</p>
                <p className="mt-1 text-xs text-[#6B7280]">Commerce Platform Planner</p>
              </div>
              <label
                htmlFor={toggleId}
                role="button"
                tabIndex={0}
                aria-label="메뉴 닫기"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#E5E1D8] text-lg"
              >
                ×
              </label>
            </div>

            <nav className="mt-10 grid gap-2 text-base font-bold text-[#111827]">
              {siteNav.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-md px-2 py-3 hover:bg-white">
                  {item.label}
                </Link>
              ))}
              <a
                href={assetPath("/resume-placeholder.pdf")}
                onClick={closeMenu}
                className="rounded-md px-2 py-3 hover:bg-white"
              >
                Resume
              </a>
              <a href="mailto:wongt93@naver.com" onClick={closeMenu} className="rounded-md px-2 py-3 text-[#6B7280] hover:bg-white">
                wongt93@naver.com
              </a>
            </nav>
          </aside>
        </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#E5E1D8] py-8">
      <div className="container flex flex-col justify-between gap-2 text-sm text-[#6B7280] sm:flex-row">
        <p>© 2026 Kim Wontae</p>
        <div className="flex flex-col gap-2 sm:items-end">
          <p>Commerce Platform Planner</p>
          <a href="mailto:wongt93@naver.com" className="hover:text-[#111827]">
            wongt93@naver.com
          </a>
        </div>
      </div>
    </footer>
  );
}
