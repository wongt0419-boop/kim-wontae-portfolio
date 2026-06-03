"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SyntheticEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { siteNav } from "@/lib/data";
import { assetPath } from "@/lib/paths";

const profileImage = assetPath("/profile.png");
const profileFallbackImage = assetPath("/profile-placeholder.svg");
const projectLinks = [
  { label: "CRM 그룹 관리", href: "/projects/crm-group/", slug: "crm-group" },
  { label: "통합 메시지 개편", href: "/projects/integrated-message/", slug: "integrated-message" },
  { label: "고도몰 애널리틱스", href: "/projects/analytics/", slug: "analytics" },
];

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.09 9.88a16 16 0 0 0 6.03 6.03l1.25-1.25a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function useFallbackProfileImage(event: SyntheticEvent<HTMLImageElement>) {
  if (!event.currentTarget.src.endsWith(profileFallbackImage)) {
    event.currentTarget.src = profileFallbackImage;
  }
}

export function Header({ activeProjectSlug }: { activeProjectSlug?: string } = {}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const menuId = "mobile-navigation-panel";
  const toggleId = "mobile-navigation-toggle";
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const isActiveProject = (href: string, slug: string) =>
    activeProjectSlug === slug ||
    normalizedPath === href ||
    normalizedPath.endsWith(href) ||
    normalizedPath.includes(`/projects/${slug}`);
  const isProjectsActive = Boolean(activeProjectSlug) || normalizedPath.includes("/projects/");

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
      <header className="sticky top-0 z-50 border-b border-[#E5E1D8] bg-[#F8F7F2]/94 backdrop-blur lg:fixed lg:inset-y-0 lg:left-0 lg:w-[232px] lg:border-b-0 lg:border-r">
        <div className="container flex h-16 items-center justify-between lg:h-full lg:w-full lg:flex-col lg:items-stretch lg:justify-start lg:px-6 lg:py-8">
          <div>
            <div className="flex items-center gap-3 lg:block">
              <img
                src={profileImage}
                alt="김원태 프로필"
                onError={useFallbackProfileImage}
                className="h-10 w-8 rounded-md border border-[#00B894] bg-white object-cover lg:mb-5 lg:h-24 lg:w-[72px]"
              />
              <div className="profile-info">
                <Link href="/" className="text-[15px] font-bold tracking-[0] text-[#111827] lg:text-2xl">
                  김원태
                </Link>
                <p className="mt-1 hidden whitespace-nowrap text-sm leading-6 text-[#6B7280] lg:block">PM · Service Planner</p>
              </div>
            </div>
          </div>

          <nav className="hidden w-full text-sm font-bold uppercase tracking-[0.08em] text-[#6B7280] lg:mt-8 lg:grid lg:gap-4">
            {siteNav.map((item) => (
              <div key={item.href} className="grid gap-3">
                <Link
                  href={item.href}
                  className={`group flex items-center justify-between hover:text-[#111827] ${
                    item.label === "Projects" && isProjectsActive ? "text-[#111827]" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="h-px w-0 bg-[#00B894] transition-all group-hover:w-8" />
                </Link>
                {item.label === "Projects" ? (
                  <div className="grid gap-2 border-l border-[#E5E1D8] pl-4 text-[11px] font-semibold leading-5 normal-case tracking-[0] text-[#6B7280]">
                    {projectLinks.map((project) => {
                      const isActive = isActiveProject(project.href, project.slug);

                      return (
                        <Link
                          key={project.href}
                          href={project.href}
                          aria-current={isActive ? "page" : undefined}
                          className={isActive ? "project-nav-active" : "transition-colors hover:text-[#00B894]"}
                        >
                          {project.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ))}
            <a
              href={assetPath("/files/resume_v2.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-[#111827] hover:text-[#00B894]"
            >
              <span className="inline-flex items-center gap-1.5">
                Resume
                <ExternalLinkIcon />
              </span>
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

          <div className="hidden lg:mt-auto lg:block lg:w-full">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Contact</p>
            <a
              href="mailto:wongt93@naver.com"
              className="mt-2 flex items-center gap-1.5 text-[13px] leading-6 text-[#6B7280] hover:text-[#111827]"
            >
              <MailIcon />
              <span>wongt93@naver.com</span>
            </a>
            <a
              href="tel:01020290419"
              className="flex items-center gap-1.5 text-[13px] leading-6 text-[#6B7280] hover:text-[#111827]"
            >
              <PhoneIcon />
              <span>010.2029.0419</span>
            </a>
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
            className="mobile-menu-panel flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={profileImage}
                  alt="김원태 프로필"
                  onError={useFallbackProfileImage}
                  className="h-12 w-9 rounded-md border border-[#00B894] bg-white object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-[#111827]">김원태</p>
                  <p className="mt-1 whitespace-nowrap text-xs text-[#6B7280]">PM · Service Planner</p>
                </div>
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
                <div key={item.href} className="grid gap-2">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-md px-2 py-3 hover:bg-white ${
                      item.label === "Projects" && isProjectsActive ? "text-[#00B894]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.label === "Projects" ? (
                    <div className="ml-2 grid gap-1 border-l border-[#E5E1D8] pl-4 text-sm font-semibold text-[#6B7280]">
                      {projectLinks.map((project) => {
                        const isActive = isActiveProject(project.href, project.slug);

                        return (
                          <Link
                            key={project.href}
                            href={project.href}
                            onClick={closeMenu}
                            aria-current={isActive ? "page" : undefined}
                            className={
                              isActive
                                ? "project-nav-active rounded-md px-2 py-2"
                                : "rounded-md px-2 py-2 hover:bg-white hover:text-[#00B894]"
                            }
                          >
                            {project.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ))}
              <a
                href={assetPath("/files/resume_v2.pdf")}
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-2 py-3 hover:bg-white"
              >
                <span className="inline-flex items-center gap-1.5">
                  Resume
                  <ExternalLinkIcon />
                </span>
              </a>
            </nav>

            <div className="mt-auto pt-10">
              <p className="px-2 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Contact</p>
              <a
                href="mailto:wongt93@naver.com"
                onClick={closeMenu}
                className="mt-2 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm leading-6 text-[#6B7280] hover:bg-white hover:text-[#111827]"
              >
                <MailIcon />
                <span>wongt93@naver.com</span>
              </a>
              <a
                href="tel:01020290419"
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm leading-6 text-[#6B7280] hover:bg-white hover:text-[#111827]"
              >
                <PhoneIcon />
                <span>010.2029.0419</span>
              </a>
            </div>
          </aside>
        </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#E5E1D8] py-5">
      <div className="container flex flex-col justify-between gap-2 text-sm text-[#6B7280] sm:flex-row">
        <p>© 2026 Kim Wontae</p>
        <p>PM · Service Planner</p>
      </div>
    </footer>
  );
}
