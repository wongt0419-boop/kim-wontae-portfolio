import Link from "next/link";
import { Footer, Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { assetPath } from "@/lib/paths";
import { keywords, metrics, selectedProjects, toolTags } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="soft-grid border-b border-[#E5E1D8]">
          <div className="container grid min-h-[620px] content-center gap-8 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:min-h-[680px]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#E5E1D8] bg-white px-4 py-2 text-sm font-semibold text-[#00B894]">
                Commerce Platform Planner
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-[0] text-[#111827] md:text-6xl">
                커머스 운영자의 CRM, 메시지, 데이터 분석 경험을 제품화합니다.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4B5563]">
                NHN커머스 고도몰 기획팀에서 회원/CRM/메시지/통계/API 연동 도메인을 담당하며,
                운영자의 타겟팅 → 발송 → 성과 확인 흐름을 설계해왔습니다.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-[#6B7280]">
                <span>NHN Commerce · Godomall Planning Team · Assistant Manager</span>
                <span className="hidden text-[#E5E1D8] sm:inline">|</span>
                <span>CRM / Message / Analytics / API Integration</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex justify-center rounded-full bg-[#00B894] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#009f80]"
                >
                  프로젝트 보기
                </Link>
                <a
                  href={assetPath("/resume-placeholder.pdf")}
                  className="inline-flex justify-center rounded-full border border-[#111827] px-6 py-3 text-sm font-bold text-[#111827] transition hover:bg-[#111827] hover:text-white"
                >
                  Resume 다운로드
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-[#E5E1D8] bg-[#FFFEFA] p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]">
              <p className="text-sm font-bold text-[#6B7280]">Focused Domains</p>
              <div className="mt-6 grid gap-3">
                {["Customer Targeting", "Message Delivery", "Performance Tracking"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-md border border-[#E5E1D8] bg-[#F8F7F2] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#00B894]">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-[#111827]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#E5E1D8] py-8">
          <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-[#E5E1D8] bg-white p-5">
                <p className="text-3xl font-bold text-[#111827]">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Section id="about" eyebrow="About" title="운영자 경험을 제품 흐름으로 정리하는 기획자">
          <div className="grid gap-8 rounded-lg border border-[#E5E1D8] bg-white p-6 md:grid-cols-[1fr_0.9fr] md:p-8">
            <div className="space-y-4 text-base leading-8 text-[#4B5563]">
              <p>저는 커머스 솔루션의 운영자 경험을 기획하는 플랫폼 기획자입니다.</p>
              <p>
                NHN커머스 고도몰 기획팀에서 회원, CRM, 메시지, 통계, API 연동 도메인을 담당하며
                쇼핑몰 운영자가 고객을 정의하고, 메시지를 보내고, 성과를 확인하는 흐름을 설계해왔습니다.
              </p>
              <p>
                이전에는 웹에이전시에서 PM, UX/BX, 서비스 기획, 제안 업무를 수행하며 다양한 산업군의
                웹/서비스 구축 프로젝트를 리드했습니다.
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

        <Section id="projects" eyebrow="Selected Projects" title="대표 프로젝트 3개">
          <div className="grid gap-4">
            {selectedProjects.map((project, index) => (
              <article key={project.href} className="card-hover rounded-lg border border-[#E5E1D8] bg-white p-6">
                <div className="grid gap-5 md:grid-cols-[72px_1fr_180px] md:items-start">
                  <p className="text-sm font-bold text-[#00B894]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <p className="text-sm font-bold text-[#FF8A3D]">{project.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-bold text-[#111827]">{project.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B7280]">{project.summary}</p>
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
                    className="inline-flex justify-center rounded-full border border-[#111827] px-4 py-2 text-sm font-bold text-[#111827] transition hover:bg-[#111827] hover:text-white md:justify-self-end"
                  >
                    View case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
