import Link from "next/link";
import { Footer, Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { assetPath } from "@/lib/paths";
import { keywords, metrics, selectedProjects, toolTags } from "@/lib/data";

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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="soft-grid border-b border-[#E5E1D8]">
          <div className="container grid min-h-[560px] content-center gap-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-14 lg:min-h-[600px]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#E5E1D8] bg-white px-4 py-2 text-sm font-semibold text-[#00B894]">
                PM · Service Planner
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.2] tracking-[0] text-[#111827] md:text-6xl md:leading-[1.16]">
                사용자의 고민을<br />
                서비스 가치로 연결하는 <br />
                기획자입니다.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4B5563]">
                사용자의 니즈와 문제를 분석하고, 복잡한 시스템 기능을 쉽게 사용할 수 있는 서비스 경험으로 설계합니다.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex justify-center rounded-full bg-[#00B894] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#009f80]"
                >
                  프로젝트 보기
                </Link>
                <a
                  href={assetPath("/files/resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-button inline-flex items-center justify-center gap-1.5 rounded-full border px-6 py-3 text-sm font-bold"
                >
                  경력기술서 보기
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-[#E5E1D8] bg-[#FFFEFA] p-4 shadow-[0_18px_44px_rgba(17,24,39,0.05)] md:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6B7280]">Experience</p>
              <div className="mt-4 grid gap-2.5">
                {[
                  {
                    title: "NHN Commerce",
                    period: "2024.10 ~ Present",
                    main: "고도몰·샵바이 플랫폼 기획·운영",
                    sub: "CRM / 메시지 / 애널리틱스 / API 연동",
                  },
                  {
                    title: "MUSIGN",
                    period: "2021.03 ~ 2024.04",
                    main: "웹·앱 구축 프로젝트 PM",
                    sub: "UX·서비스 기획 / IA·화면 설계",
                  },
                  {
                    title: "Wicked Fashions Inc.",
                    period: "2019.09 ~ 2020.03",
                    main: "이커머스 MD 인턴",
                    sub: "온라인몰 운영 / 상품 상세페이지 기획",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-md border border-[#E5E1D8] bg-[#F8F7F2] p-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-bold text-[#111827]">{item.title}</p>
                      <span className="whitespace-nowrap text-[11px] font-semibold text-[#6B7280]">{item.period}</span>
                    </div>
                    <p className="mt-3 text-[13px] font-bold leading-5 text-[#111827]">{item.main}</p>
                    <p className="mt-2 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold leading-5 text-[#6B7280]">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#E5E1D8] py-6">
          <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-[#E5E1D8] bg-white p-5">
                <p className="text-3xl font-bold text-[#111827]">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Section id="about" eyebrow="About" title="구축부터 운영 경험을 바탕으로 더 나은 서비스 방향을 제시합니다.">
          <div className="grid gap-8 rounded-lg border border-[#E5E1D8] bg-white p-6 md:grid-cols-[1fr_0.9fr] md:p-8">
            <div className="space-y-4 text-base leading-8 text-[#4B5563]">
              <p>
                저는 사용자의 니즈와 문제를 분석하고, 복잡한 시스템 기능을 쉽게 사용할 수 있는 서비스 경험으로 풀어낼 수 있는 기획자입니다.
              </p>
              <p>
                웹에이전시에서는 기업 CMS, 이커머스, 앱서비스 구축 프로젝트를 수행하며 요구사항 정의, IA/UX 설계, 화면 기획을 리드했고, 이커머스 플랫폼 조직에서는 CRM, 메시지, 애널리틱스 기능을 기획하며 운영자가 고객을 이해하고 마케팅할 수 있는 흐름을 설계했습니다.
              </p>
              <p>
                특히 CRM 설정과 데이터 분석처럼 어렵게 느껴질 수 있는 기능을 추천 타겟, 대시보드, 성과 지표, 단계형 UX로 풀어내며 실제 업무에 활용 가능한 서비스 경험으로 연결해왔습니다.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Core Skills</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-[#E5E1D8] bg-[#F8F7F2] px-3 py-1.5 text-sm font-semibold text-[#111827]">
                    {keyword}
                  </span>
                ))}
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#9CA3AF]">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {toolTags.map((tool) => (
                  <span key={tool} className="rounded-full border border-[#E5E1D8] bg-white px-3 py-1 text-xs font-medium text-[#6B7280]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="E-COMMERCE PROJECTS" title="NHN커머스 주요 프로젝트">
          <div className="grid gap-4">
            {selectedProjects.map((project, index) => (
              <article key={project.href} className="card-hover rounded-lg border border-[#E5E1D8] bg-white p-6">
                <div className="grid gap-5 md:grid-cols-[72px_1fr_180px] md:items-start">
                  <p className="text-sm font-bold text-[#00B894]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <p className="text-sm font-bold text-[#FF8A3D]">{project.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-bold leading-[1.32] text-[#111827]">{project.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B7280] [word-break:keep-all] [overflow-wrap:break-word]">
                      {project.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#111827]">
                      {project.impact.map((impact) => (
                        <li key={impact} className="rounded-full bg-[#F8F7F2] px-3 py-1.5">
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={project.href}
                    className="outline-button inline-flex justify-center rounded-full border px-4 py-2 text-sm font-bold md:justify-self-end"
                  >
                    상세보기
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section className="section border-t border-[#E5E1D8]">
          <div className="container">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00B894]">Musign Portfolio</p>
            <div className="rounded-lg border border-[#E5E1D8] bg-white p-5 shadow-[0_18px_44px_rgba(17,24,39,0.05)] md:flex md:items-center md:justify-between md:gap-8 md:p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#E5E1D8] bg-[#F8F7F2] text-xs font-bold text-[#00B894]">
                  PDF
                </div>
                <div>
                  <h2 className="text-xl font-bold leading-[1.35] tracking-[0] text-[#111827]">웹에이전시 구축 프로젝트 포트폴리오</h2>
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-[#4B5563] [word-break:keep-all] [overflow-wrap:break-word]">
                    기업 CMS, 이커머스, 앱서비스 구축 프로젝트를 중심으로 PM, UX/서비스 기획, IA/화면 설계, 고객사 커뮤니케이션 경험을 정리한 별도 포트폴리오입니다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#111827]">
                    <span className="rounded-full bg-[#F8F7F2] px-3 py-1.5">프로젝트 완료 22건 · 웹 어워드 수상 14건</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row md:mt-0 md:shrink-0">
                <a
                  href={assetPath("/files/web-agency-portfolio.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#00B894] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#009f80]"
                >
                  포트폴리오 보기
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
